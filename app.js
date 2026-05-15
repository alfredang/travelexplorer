/* =============================================
   Travel Explorer — App Logic
   ============================================= */

const STORAGE = {
  PACKING: 'te_packing',
  ITINERARY: 'te_itinerary',
  ENQUIRIES: 'te_enquiries',
};

const FEATURED_ID = 'tokyo';

const PACKING_DEFAULTS = {
  'Documents': ['Passport (6+ months validity)', 'Visa / eVisa printouts', 'Travel insurance card', 'Flight & hotel bookings', 'Driving licence / IDP', 'Copy of itinerary'],
  'Clothing': ['Underwear & socks', 'T-shirts / tops', 'Trousers / shorts', 'Light jacket or layer', 'Sleepwear', 'Swimwear', 'Comfortable walking shoes'],
  'Electronics': ['Phone & charger', 'Power bank', 'Universal adapter', 'Camera & memory card', 'Headphones', 'Laptop / tablet (if needed)'],
  'Medication': ['Prescription meds + script', 'Paracetamol / ibuprofen', 'Anti-diarrheal tablets', 'Antihistamines', 'Plasters & antiseptic', 'Motion sickness pills'],
  'Travel Essentials': ['Reef-safe sunscreen SPF 50+', 'Insect repellent', 'Reusable water bottle', 'Sunglasses', 'Day backpack', 'Travel-size toiletries', 'Cash + 2 cards']
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const formatSGD = (n) => 'SGD ' + Math.round(n).toLocaleString('en-SG');

const loadJSON = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
};
const saveJSON = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* quota or private mode */ }
};

/* -------- Toast -------- */
const toastEl = $('#toast');
let toastTimer;
function showToast(message) {
  toastEl.textContent = message;
  toastEl.hidden = false;
  requestAnimationFrame(() => toastEl.classList.add('show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('show');
    setTimeout(() => { toastEl.hidden = true; }, 300);
  }, 3000);
}

/* -------- Navigation (mobile toggle) -------- */
function setupNav() {
  const toggle = $('#nav-toggle');
  const links = $('#nav-links');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  $$('#nav-links a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

/* -------- Featured Guide -------- */
function renderFeatured() {
  const dest = DESTINATIONS.find(d => d.id === FEATURED_ID) || DESTINATIONS[0];
  const el = $('#featured-card');
  el.innerHTML = `
    <div class="featured-image">
      <img src="${dest.image}" alt="${dest.name}, ${dest.country}" loading="lazy" />
    </div>
    <div class="featured-body">
      <p class="featured-country">${dest.country}</p>
      <h3>${dest.name}</h3>
      <p class="featured-blurb">${dest.guide.overview}</p>
      <dl class="featured-meta">
        <div><dt>Flight from SGP</dt><dd>${dest.flightTimeFromSGP}</dd></div>
        <div><dt>Daily Budget</dt><dd>${formatSGD(dest.dailyBudgetSGD)}</dd></div>
        <div><dt>Best Season</dt><dd>${dest.bestSeason}</dd></div>
      </dl>
      <button class="btn btn-primary" data-open="${dest.id}">Read Full Guide</button>
    </div>
  `;
  el.querySelector('[data-open]').addEventListener('click', () => openGuide(dest.id));
}

/* -------- City Cards -------- */
function renderCities() {
  const grid = $('#city-grid');
  grid.innerHTML = DESTINATIONS.map(d => `
    <article class="city-card" data-id="${d.id}" tabindex="0">
      <div class="city-image">
        <img src="${d.image}" alt="${d.name}, ${d.country}" loading="lazy" />
      </div>
      <div class="city-body">
        <p class="city-country">${d.country}</p>
        <h3 class="city-name">${d.name}</h3>
        <p class="city-blurb">${d.blurb}</p>
        <dl class="city-meta">
          <div><dt>Flight</dt><dd>${d.flightTimeFromSGP}</dd></div>
          <div><dt>Budget / day</dt><dd>${formatSGD(d.dailyBudgetSGD)}</dd></div>
          <div><dt>Best</dt><dd>${d.bestSeason}</dd></div>
        </dl>
        <span class="city-cta">View Guide</span>
      </div>
    </article>
  `).join('');

  $$('.city-card', grid).forEach(card => {
    card.addEventListener('click', () => openGuide(card.dataset.id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openGuide(card.dataset.id);
      }
    });
  });
}

/* -------- Guide Modal -------- */
const modal = $('#guide-modal');
const modalContent = $('#modal-content');

function openGuide(id) {
  const d = DESTINATIONS.find(x => x.id === id);
  if (!d) return;
  const totalDaily = Object.values(d.guide.costBreakdown).reduce((a, b) => a + b, 0);
  modalContent.innerHTML = `
    <div class="modal-hero" style="background-image: url('${d.image}');">
      <div class="modal-hero-text">
        <p class="modal-country">${d.country} · Flight ${d.flightTimeFromSGP} from SGP</p>
        <h2 class="modal-title" id="modal-title">${d.name}</h2>
      </div>
    </div>
    <div class="modal-body">
      <section class="modal-section">
        <p class="modal-overview">${d.guide.overview}</p>
      </section>

      <section class="modal-section">
        <h3>Suggested 3-Day Itinerary</h3>
        <div class="modal-days">
          ${d.guide.itinerary.map(day => `
            <div class="modal-day">
              <div class="modal-day-num">${String(day.day).padStart(2, '0')}</div>
              <div>
                <h4>${day.title}</h4>
                <p>${day.plan}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="modal-section">
        <h3>Food Recommendations</h3>
        <ul class="modal-list">${d.guide.food.map(f => `<li>${f}</li>`).join('')}</ul>
      </section>

      <section class="modal-section">
        <h3>Transport Tips</h3>
        <ul class="modal-list">${d.guide.transport.map(t => `<li>${t}</li>`).join('')}</ul>
      </section>

      <section class="modal-section">
        <h3>Estimated Daily Cost (per person)</h3>
        <table class="modal-cost-table">
          ${Object.entries(d.guide.costBreakdown).map(([k, v]) => `
            <tr><td>${k}</td><td>${formatSGD(v)}</td></tr>
          `).join('')}
          <tr class="total"><td>Total per day</td><td>${formatSGD(totalDaily)}</td></tr>
        </table>
      </section>

      <section class="modal-section">
        <h3>Safety Notes</h3>
        <ul class="modal-list">${d.guide.safety.map(s => `<li>${s}</li>`).join('')}</ul>
      </section>

      <section class="modal-section">
        <h3>Best Photo Spots</h3>
        <ul class="modal-list">${d.guide.photoSpots.map(p => `<li>${p}</li>`).join('')}</ul>
      </section>
    </div>
  `;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  $('.modal-content').scrollTop = 0;
}

function closeGuide() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function setupModal() {
  $$('[data-close]', modal).forEach(el => el.addEventListener('click', closeGuide));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeGuide();
  });
}

/* -------- Tool Tabs -------- */
function setupToolTabs() {
  const tabs = $$('.tool-tab');
  const panels = { budget: $('#tool-budget'), packing: $('#tool-packing'), itinerary: $('#tool-itinerary') };
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      Object.values(panels).forEach(p => p.classList.remove('active'));
      panels[tab.dataset.tab].classList.add('active');
    });
  });
}

/* -------- Budget Calculator -------- */
function setupBudget() {
  const sel = $('#budget-destination');
  const travellers = $('#budget-travellers');
  const days = $('#budget-days');
  const daily = $('#budget-daily');
  const totalEl = $('#budget-total');
  const noteEl = $('#budget-note');

  sel.innerHTML = '<option value="">Custom (no preset)</option>' +
    DESTINATIONS.map(d => `<option value="${d.id}" data-budget="${d.dailyBudgetSGD}">${d.name}, ${d.country}</option>`).join('');

  function recalc() {
    const t = Math.max(1, parseInt(travellers.value) || 1);
    const d = Math.max(1, parseInt(days.value) || 1);
    const b = Math.max(0, parseInt(daily.value) || 0);
    const total = t * d * b;
    totalEl.textContent = formatSGD(total);
    noteEl.textContent = `${t} traveller${t > 1 ? 's' : ''} · ${d} day${d > 1 ? 's' : ''} · ${formatSGD(b)} / day per person`;
  }

  sel.addEventListener('change', () => {
    const opt = sel.options[sel.selectedIndex];
    if (opt.dataset.budget) {
      daily.value = opt.dataset.budget;
    }
    recalc();
  });
  [travellers, days, daily].forEach(el => el.addEventListener('input', recalc));

  // Default selection
  const featured = DESTINATIONS.find(d => d.id === FEATURED_ID);
  if (featured) {
    sel.value = featured.id;
    daily.value = featured.dailyBudgetSGD;
  }
  recalc();
}

/* -------- Packing Checklist -------- */
function setupPacking() {
  const grid = $('#packing-grid');
  const fill = $('#packing-fill');
  const text = $('#packing-text');
  const reset = $('#packing-reset');

  let state = loadJSON(STORAGE.PACKING, {});

  function render() {
    grid.innerHTML = Object.entries(PACKING_DEFAULTS).map(([category, items]) => `
      <div class="packing-category">
        <h4>${category}</h4>
        <ul>
          ${items.map((item, i) => {
            const key = `${category}::${item}`;
            const checked = !!state[key];
            return `
              <li class="${checked ? 'checked' : ''}">
                <input type="checkbox" id="pack-${category}-${i}" data-key="${key}" ${checked ? 'checked' : ''} />
                <label for="pack-${category}-${i}" style="margin:0;text-transform:none;letter-spacing:0;font-weight:400;color:inherit;font-size:14px;cursor:pointer;">${item}</label>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    `).join('');

    $$('input[type="checkbox"]', grid).forEach(cb => {
      cb.addEventListener('change', () => {
        state[cb.dataset.key] = cb.checked;
        saveJSON(STORAGE.PACKING, state);
        cb.closest('li').classList.toggle('checked', cb.checked);
        updateProgress();
      });
    });

    updateProgress();
  }

  function updateProgress() {
    const allItems = Object.entries(PACKING_DEFAULTS).flatMap(([c, items]) => items.map(i => `${c}::${i}`));
    const total = allItems.length;
    const checked = allItems.filter(k => state[k]).length;
    const pct = total ? Math.round((checked / total) * 100) : 0;
    fill.style.width = pct + '%';
    text.textContent = `${checked} / ${total} packed`;
  }

  reset.addEventListener('click', () => {
    state = {};
    saveJSON(STORAGE.PACKING, state);
    render();
    showToast('Packing list reset');
  });

  render();
}

/* -------- Itinerary Planner -------- */
function setupItinerary() {
  const form = $('#itinerary-form');
  const list = $('#itinerary-list');
  let entries = loadJSON(STORAGE.ITINERARY, []);

  function render() {
    if (entries.length === 0) {
      list.innerHTML = `<div class="itinerary-empty">No entries yet. Add your first activity above — it'll save automatically.</div>`;
      return;
    }
    const byDay = entries.reduce((acc, e) => {
      (acc[e.day] = acc[e.day] || []).push(e);
      return acc;
    }, {});
    const days = Object.keys(byDay).map(Number).sort((a, b) => a - b);
    list.innerHTML = days.map(day => {
      const sorted = byDay[day].slice().sort((a, b) => a.time.localeCompare(b.time));
      return `
        <div class="itinerary-day">
          <div class="itinerary-day-header">
            <span class="itinerary-day-num">Day ${day}</span>
            <span class="itinerary-day-label">${sorted.length} activit${sorted.length === 1 ? 'y' : 'ies'}</span>
          </div>
          ${sorted.map(e => `
            <div class="itinerary-entry">
              <div class="itinerary-time">${e.time}</div>
              <div>
                <p class="itinerary-activity">${escapeHTML(e.activity)}</p>
                ${e.notes ? `<p class="itinerary-notes">${escapeHTML(e.notes)}</p>` : ''}
              </div>
              <button class="itinerary-delete" data-id="${e.id}">Remove</button>
            </div>
          `).join('')}
        </div>
      `;
    }).join('');

    $$('.itinerary-delete', list).forEach(btn => {
      btn.addEventListener('click', () => {
        entries = entries.filter(e => e.id !== btn.dataset.id);
        saveJSON(STORAGE.ITINERARY, entries);
        render();
      });
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const day = parseInt($('#itin-day').value);
    const time = $('#itin-time').value;
    const activity = $('#itin-activity').value.trim();
    const notes = $('#itin-notes').value.trim();
    if (!day || !time || !activity) return;
    entries.push({
      id: 'i' + Date.now() + Math.random().toString(36).slice(2, 6),
      day, time, activity, notes
    });
    saveJSON(STORAGE.ITINERARY, entries);
    form.reset();
    $('#itin-day').value = day; // keep day for next entry
    render();
    showToast('Activity added');
  });

  render();
}

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

/* -------- Weather (OpenWeather) -------- */
function setupWeather() {
  const form = $('#weather-form');
  const result = $('#weather-result');
  const cityInput = $('#weather-city');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (!city) return;
    result.innerHTML = `<div class="weather-message">Loading conditions for ${escapeHTML(city)}…</div>`;
    await fetchWeather(city, result);
  });
}

async function fetchWeather(city, mountEl) {
  // Key is loaded from gitignored config.local.js (see config.example.js).
  // Copy config.example.js to config.local.js and paste your AccuWeather key
  // from https://developer.accuweather.com/ — it stays out of git.
  const API_KEY = (typeof window !== 'undefined' && window.ACCUWEATHER_API_KEY) || '';

  if (!API_KEY) {
    mountEl.innerHTML = `
      <div class="weather-message">
        <div>
          <strong>Weather demo not connected.</strong><br/>
          Add your free AccuWeather API key in <code>app.js</code> (search for <code>INSERT YOUR ACCUWEATHER API KEY</code>) to enable live conditions for any city worldwide.
        </div>
      </div>
    `;
    return;
  }

  try {
    const locUrl = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${encodeURIComponent(city)}`;
    const locRes = await fetch(locUrl);
    if (!locRes.ok) throw new Error(locRes.status === 401 ? 'Invalid API key' : 'Weather service unavailable');
    const locations = await locRes.json();
    if (!locations.length) throw new Error('City not found');
    const loc = locations[0];

    const condUrl = `https://dataservice.accuweather.com/currentconditions/v1/${loc.Key}?apikey=${API_KEY}&details=true`;
    const condRes = await fetch(condUrl);
    if (!condRes.ok) throw new Error('Weather service unavailable');
    const condData = await condRes.json();
    if (!condData.length) throw new Error('No current conditions');
    const cur = condData[0];

    const iconNum = String(cur.WeatherIcon).padStart(2, '0');
    const iconUrl = `https://developer.accuweather.com/sites/default/files/${iconNum}-s.png`;

    mountEl.innerHTML = `
      <div class="weather-data">
        <img class="weather-icon" src="${iconUrl}" alt="${escapeHTML(cur.WeatherText)}" />
        <div>
          <p class="weather-city-out">${escapeHTML(loc.LocalizedName)}, ${escapeHTML(loc.Country.ID || '')}</p>
          <p class="weather-condition">${escapeHTML(cur.WeatherText)}</p>
          <p class="weather-temp">${Math.round(cur.Temperature.Metric.Value)}°C</p>
          <div class="weather-details">
            <span>Feels like <strong>${Math.round(cur.RealFeelTemperature.Metric.Value)}°C</strong></span>
            <span>Humidity <strong>${cur.RelativeHumidity}%</strong></span>
            <span>Wind <strong>${Math.round(cur.Wind.Speed.Metric.Value)} km/h</strong></span>
          </div>
        </div>
      </div>
    `;
  } catch (err) {
    mountEl.innerHTML = `<div class="weather-message"><div><strong>Couldn't fetch weather.</strong><br/>${escapeHTML(err.message)}</div></div>`;
  }
}

/* -------- Enquiry Form -------- */
// Web3Forms — get a free access key at https://web3forms.com (paste your
// email, they instantly email you the key). Paste the key below to enable
// live email delivery. While the key is blank, the form falls back to the
// mailto: panel so users can still send enquiries via their email client.
const WEB3FORMS_ACCESS_KEY = '';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const ENQUIRY_TO_EMAIL = 'angch@tertiaryinfotech.com';

function buildEnquiryMailto(data, destLabel) {
  const subject = `Travel Explorer enquiry — ${data.fullName} (${destLabel})`;
  const lines = [
    `Full Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Destination: ${destLabel}`,
    `Travel Date: ${data.travelDate}`,
    `Travellers: ${data.travellers}`,
    '',
    'Message:',
    data.message,
    '',
    `Submitted: ${data.submittedAt}`,
  ];
  return `mailto:${ENQUIRY_TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

function setupEnquiry() {
  const form = $('#enquiry-form');
  const success = $('#form-success');
  const fallback = $('#form-fallback');
  const mailtoLink = $('#form-mailto');
  const destSelect = $('#enquiry-destination');
  const submitBtn = form.querySelector('button[type="submit"]');

  destSelect.innerHTML = '<option value="">Select a destination</option>' +
    DESTINATIONS.map(d => `<option value="${d.id}">${d.name}, ${d.country}</option>`).join('') +
    '<option value="other">Other / Not sure yet</option>';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    fallback.hidden = true;
    if (!validateEnquiry(form)) return;

    const data = Object.fromEntries(new FormData(form).entries());
    data.submittedAt = new Date().toISOString();

    const destLabel = destSelect.options[destSelect.selectedIndex]?.text || data.destination;
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Travel Explorer enquiry — ${data.fullName} (${destLabel})`,
      from_name: 'Travel Explorer Enquiry',
      name:        data.fullName,
      email:       data.email,
      phone:       data.phone,
      destination: destLabel,
      travel_date: data.travelDate,
      travellers:  data.travellers,
      message:     data.message,
      submitted_at: data.submittedAt,
    };

    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      if (!WEB3FORMS_ACCESS_KEY) {
        throw new Error('Email service not configured');
      }
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept':       'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));
      if (!(res.ok && result.success === true)) {
        throw new Error(result.message || 'Email service responded without success');
      }

      const all = loadJSON(STORAGE.ENQUIRIES, []);
      all.push(data);
      saveJSON(STORAGE.ENQUIRIES, all);

      form.reset();
      success.hidden = false;
      setTimeout(() => { success.hidden = true; }, 6000);
      showToast('Enquiry sent — we\'ll be in touch within 24 hours');
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (err) {
      // FormSubmit unreachable — offer mailto: fallback so the user can still
      // send the enquiry via their own email client.
      mailtoLink.href = buildEnquiryMailto(data, destLabel);
      fallback.hidden = false;
      fallback.scrollIntoView({ behavior: 'smooth', block: 'center' });
      showToast('Form server unreachable — use the email fallback below');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
}

function validateEnquiry(form) {
  let valid = true;
  $$('input, select, textarea', form).forEach(el => {
    if (!el.hasAttribute('required')) return;
    const v = (el.value || '').trim();
    if (!v) {
      el.style.borderColor = 'var(--accent)';
      valid = false;
    } else if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      el.style.borderColor = 'var(--accent)';
      valid = false;
    } else {
      el.style.borderColor = '';
    }
  });
  if (!valid) showToast('Please complete all required fields');
  return valid;
}

/* -------- Init -------- */
document.addEventListener('DOMContentLoaded', () => {
  setupNav();
  renderFeatured();
  renderCities();
  setupModal();
  setupToolTabs();
  setupBudget();
  setupPacking();
  setupItinerary();
  setupWeather();
  setupEnquiry();
});
