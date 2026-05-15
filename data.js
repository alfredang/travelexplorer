const DESTINATIONS = [
  {
    id: "seoul",
    name: "Seoul",
    country: "South Korea",
    blurb: "Neon-lit alleys, palace courtyards, and a café scene that runs until sunrise.",
    flightTimeFromSGP: "6h 30m",
    dailyBudgetSGD: 180,
    bestSeason: "Apr–Jun · Sep–Nov",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1400&q=80",
    guide: {
      overview: "Seoul is a city of beautiful contradictions — Joseon-era palaces sit a metro stop from K-pop megastores, and Michelin tasting menus share neighborhoods with sizzling pojangmacha tents. The city rewards walkers and night owls alike.",
      itinerary: [
        { day: 1, title: "Palaces & Old Town", plan: "Morning at Gyeongbokgung in hanbok, lunch at Tongin Market's lunchbox café, afternoon stroll through Bukchon Hanok Village, sunset cocktails in Samcheong-dong." },
        { day: 2, title: "Hongdae & Gangnam", plan: "Coffee crawl through Yeonnam-dong, vintage shopping in Hongdae, dinner at a Gangnam Korean BBQ, late-night noraebang." },
        { day: 3, title: "Mountain & River", plan: "Cable car up Namsan to N Seoul Tower, Han River bike ride, dinner cruise, finish with fried chicken and beer (chimaek) in Itaewon." }
      ],
      food: ["Korean BBQ — Maple Tree House (Itaewon)", "Bibimbap — Gogung (Insadong)", "Naengmyeon — Eulji Myeonok", "Tteokbokki at Sindang-dong", "Cafés along Seongsu-dong"],
      transport: ["T-money card works on metro, bus, and taxis", "Metro is sign-posted in English and runs until ~midnight", "KakaoTaxi app for cabs (Grab does not work)", "Airport: AREX express train 43min to Seoul Station"],
      costBreakdown: { Accommodation: 110, Food: 45, Transport: 12, Activities: 25, Misc: 8 },
      safety: ["Very low street-crime rate even late at night", "Carry your passport — ID checks at clubs", "Tap water is safe", "Watch for scooters on pedestrian streets in Hongdae"],
      photoSpots: ["Bukchon Hanok Village rooftop view", "Cheonggyecheon stream at dusk", "Lotte World Tower observation deck", "Ihwa Mural Village", "Banpo Bridge rainbow fountain"]
    }
  },
  {
    id: "singapore",
    name: "Singapore",
    country: "Singapore",
    blurb: "A garden city where hawker legends, futuristic skylines, and tropical green collide.",
    flightTimeFromSGP: "0h",
    dailyBudgetSGD: 150,
    bestSeason: "Feb–Apr",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=80",
    guide: {
      overview: "Yes, Singapore is home for many — but it's also a world-class long weekend. Eat your way through hawker centres, wander Gardens by the Bay at night, and lose an afternoon in Tiong Bahru's bookshops.",
      itinerary: [
        { day: 1, title: "Iconic Skyline", plan: "Marina Bay Sands SkyPark, lunch at Lau Pa Sat, ArtScience Museum, sunset at Gardens by the Bay's Supertree Grove." },
        { day: 2, title: "Heritage Districts", plan: "Breakfast at Tiong Bahru Bakery, walk Chinatown and Kampong Glam, peranakan dinner at Candlenut." },
        { day: 3, title: "Green Escape", plan: "MacRitchie TreeTop Walk in the morning, Botanic Gardens picnic, Dempsey Hill for dinner and drinks." }
      ],
      food: ["Hainanese chicken rice — Tian Tian (Maxwell)", "Chilli crab — Jumbo East Coast", "Laksa — 328 Katong Laksa", "Kaya toast — Ya Kun", "Satay — Lau Pa Sat after 7pm"],
      transport: ["EZ-Link or contactless credit card on MRT/buses", "Grab for late-night rides", "Bicycle rentals along East Coast Park", "Changi Airport: MRT to city ~30min"],
      costBreakdown: { Accommodation: 90, Food: 35, Transport: 8, Activities: 12, Misc: 5 },
      safety: ["Extremely safe at any hour", "Chewing gum is restricted — don't bring large amounts", "Jaywalking is fined", "Tap water is safe"],
      photoSpots: ["Helix Bridge towards MBS", "Cloud Forest waterfall", "Haji Lane street art", "Henderson Waves bridge", "Pulau Ubin rustic kampong"]
    }
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    blurb: "Rice terraces, surf breaks, and beach clubs threaded through a Hindu-Balinese soul.",
    flightTimeFromSGP: "2h 40m",
    dailyBudgetSGD: 120,
    bestSeason: "May–Sep",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80",
    guide: {
      overview: "Bali is many islands in one — surfer-bohemian in Canggu, spiritual in Ubud, polished in Seminyak, wild in the east. Three days only scratches the surface, so pick a base and go deep.",
      itinerary: [
        { day: 1, title: "Ubud's Soul", plan: "Sunrise yoga, breakfast at Sayuri Healing Food, walk Campuhan Ridge, afternoon at Tegallalang rice terraces, fire dance at Pura Dalem Ubud." },
        { day: 2, title: "Canggu Beach Day", plan: "Surf lesson at Batu Bolong, smoothie bowl at Crate, sunset at La Brisa beach club, dinner at Mason." },
        { day: 3, title: "Temples & Cliffs", plan: "Tirta Empul water temple, Tegenungan waterfall, drive to Uluwatu for Kecak dance at sunset and seafood at Jimbaran Bay." }
      ],
      food: ["Babi guling — Ibu Oka (Ubud)", "Nasi campur — Warung Wardani", "Smoothie bowls — Nalu Bowls (Canggu)", "Seafood BBQ — Jimbaran Bay", "Coffee — Revolver Espresso"],
      transport: ["Rent a scooter ~SGD 7/day (IDP required)", "Grab/Gojek work well outside Ubud and beach clubs", "Private drivers ~SGD 60/day", "Airport (DPS) is in south Bali"],
      costBreakdown: { Accommodation: 55, Food: 25, Transport: 15, Activities: 18, Misc: 7 },
      safety: ["Avoid drinking unbranded arak (methanol cases reported)", "Watch belongings at busy temples", "Mosquito repellent for dengue", "Roads are chaotic — wear a helmet"],
      photoSpots: ["Tegallalang rice terraces swing", "Lempuyang Temple gates of heaven", "Diamond Beach, Nusa Penida", "Tibumana waterfall", "Uluwatu cliffs at sunset"]
    }
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    blurb: "A megacity where every street corner conceals a tiny perfect thing.",
    flightTimeFromSGP: "7h 0m",
    dailyBudgetSGD: 220,
    bestSeason: "Mar–May · Oct–Nov",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&q=80",
    guide: {
      overview: "Tokyo is the rare megacity that runs on quiet precision. The trains are punctual to the second, the toilets sing, and somewhere in Shimokitazawa someone is making the world's best curry from a 6-seat counter.",
      itinerary: [
        { day: 1, title: "East Side Classic", plan: "Tsukiji Outer Market breakfast, Senso-ji temple in Asakusa, river boat to Hamarikyu, Ginza shopping, omakase dinner." },
        { day: 2, title: "Youth & Style", plan: "Meiji Shrine forest walk, Harajuku & Omotesando, vintage in Shimokitazawa, ramen in Shinjuku, Golden Gai bar crawl." },
        { day: 3, title: "Modern Tokyo", plan: "TeamLab Planets, Toyosu fish market, Shibuya Sky at sunset, izakaya hopping in Ebisu." }
      ],
      food: ["Sushi — Sushi Dai (Toyosu)", "Ramen — Ichiran or Afuri", "Tonkatsu — Maisen (Aoyama)", "Udon — Tsurutontan", "Convenience store breakfasts are a genre"],
      transport: ["Suica/Pasmo IC card on JR, metro, and convenience stores", "Avoid taxis — expensive and slow", "Narita Express or Skyliner from Narita; Limousine bus from Haneda", "Trains stop ~midnight — plan or pay for a cab"],
      costBreakdown: { Accommodation: 130, Food: 55, Transport: 18, Activities: 25, Misc: 12 },
      safety: ["Among the world's safest cities", "Cash still rules in small shops — carry yen", "Earthquake drills are routine — follow staff instructions", "Pickpocketing rare but possible in Shibuya crowds"],
      photoSpots: ["Shibuya Scramble from Mag's Park rooftop", "Mt Fuji view from Chureito Pagoda", "Nezu Shrine torii path", "Yanaka Ginza old-town street", "Odaiba waterfront at night"]
    }
  },
  {
    id: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    blurb: "Street food legends, gold-leaf temples, and rooftop bars 60 floors above the chaos.",
    flightTimeFromSGP: "2h 25m",
    dailyBudgetSGD: 110,
    bestSeason: "Nov–Feb",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1400&q=80",
    guide: {
      overview: "Bangkok runs hot, loud, and gloriously good. Eat boat noodles for breakfast, temple-hop before the heat peaks, nap in your hotel pool, then surface for a rooftop sundowner.",
      itinerary: [
        { day: 1, title: "Old City Temples", plan: "Grand Palace and Wat Pho early to beat the heat, river ferry to Wat Arun, sunset at Sala Rattanakosin rooftop, dinner at Err." },
        { day: 2, title: "Markets & Malls", plan: "Chatuchak Weekend Market, lunch at Or Tor Kor, afternoon spa, dinner at Gaggan Anand or street eats at Soi 38." },
        { day: 3, title: "River & Rooftops", plan: "Chao Phraya boat to Iconsiam, Jim Thompson House, sunset at Vertigo or Lebua, late-night Chinatown food crawl on Yaowarat." }
      ],
      food: ["Boat noodles — Victory Monument stalls", "Pad krapow — Jay Fai street side", "Mango sticky rice — Mae Varee", "Som tam — Som Tam Nua", "Chinatown seafood — T&K Seafood"],
      transport: ["BTS Skytrain and MRT are fast and cheap", "Grab and Bolt for taxis; meter taxis often refuse to use the meter", "River boats are scenic and cheap", "Suvarnabhumi Airport: ARL to city 30min"],
      costBreakdown: { Accommodation: 50, Food: 22, Transport: 10, Activities: 20, Misc: 8 },
      safety: ["Dress modestly for temples (covered shoulders/knees)", "Tuk-tuk gem scams — never agree to detours", "Watch for pickpockets at Khao San and Chatuchak", "Drink bottled water"],
      photoSpots: ["Wat Arun across the river at golden hour", "Chao Phraya boat at dusk", "Rooftop view from Mahanakhon SkyWalk", "Chinatown neon on Yaowarat", "Wat Saket Golden Mount"]
    }
  },
  {
    id: "hongkong",
    name: "Hong Kong",
    country: "Hong Kong SAR",
    blurb: "Skyscraper canyons, dim sum carts, and a hiking trail thirty minutes from downtown.",
    flightTimeFromSGP: "4h 15m",
    dailyBudgetSGD: 180,
    bestSeason: "Oct–Dec",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1400&q=80",
    guide: {
      overview: "Hong Kong is a vertical city you read with your feet — escalator up to the Mid-Levels, ferry across the harbour, take the tram up the Peak, eat dim sum at 3pm because you can.",
      itinerary: [
        { day: 1, title: "Hong Kong Island", plan: "Tram to Victoria Peak, dim sum at Lin Heung Tea House, walk through Soho and Sheung Wan galleries, Symphony of Lights from the Star Ferry." },
        { day: 2, title: "Kowloon Side", plan: "Temple Street Night Market warm-up at lunch, Tsim Sha Tsui Promenade, K11 Musea, dinner in Mong Kok." },
        { day: 3, title: "Hike & Beach", plan: "Dragon's Back trail to Big Wave Bay, lunch at Shek O, Stanley Market in the afternoon, drinks in Lan Kwai Fong." }
      ],
      food: ["Dim sum — Tim Ho Wan or Lung King Heen", "Wonton noodles — Mak's Noodle", "Roast goose — Yat Lok", "Egg tarts — Tai Cheong Bakery", "Milk tea — Lan Fong Yuen"],
      transport: ["Octopus card on MTR, buses, trams, ferries", "MTR is fast and clean", "Star Ferry is SGD 0.50 of pure magic", "HKIA Airport Express 24min to Central"],
      costBreakdown: { Accommodation: 120, Food: 38, Transport: 10, Activities: 18, Misc: 6 },
      safety: ["Generally very safe", "Watch belongings in crowded markets", "Avoid political demonstrations", "Typhoon season Jul–Sep — check signal levels"],
      photoSpots: ["Lugard Road circuit at the Peak", "Choi Hung estate basketball courts", "Quarry Bay Monster Building", "Sai Wan Swimming Shed pier", "Tian Tan Buddha, Lantau"]
    }
  },
  {
    id: "kualalumpur",
    name: "Kuala Lumpur",
    country: "Malaysia",
    blurb: "Twin towers above, char kway teow below, and weekend escapes to the highlands.",
    flightTimeFromSGP: "1h 5m",
    dailyBudgetSGD: 90,
    bestSeason: "May–Jul",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1400&q=80",
    guide: {
      overview: "KL is Singapore's louder, cheaper, hungrier cousin. Drive up for the weekend, eat your weight in nasi lemak and banana leaf, and finish on a rooftop with the Petronas Towers glowing beside you.",
      itinerary: [
        { day: 1, title: "City Centre", plan: "Petronas Towers Skybridge, lunch at Madam Kwan's, KL Tower observation deck, sunset drinks at Heli Lounge Bar." },
        { day: 2, title: "Heritage & Markets", plan: "Batu Caves morning, Central Market, lunch at Yut Kee, walk Petaling Street, Jalan Alor street food dinner." },
        { day: 3, title: "Bangsar & Highlands", plan: "Brunch in Bangsar, optional day trip to Genting or Berjaya Hills, dinner at TROIA." }
      ],
      food: ["Nasi lemak — Village Park Restaurant", "Banana leaf — Sri Nirwana Maju (Bangsar)", "Char kway teow — Sisters Char Kuey Teow", "Hokkien mee — Kim Lian Kee", "Cendol at Jalan Alor"],
      transport: ["Touch 'n Go card on LRT/MRT/monorail", "Grab is cheap and reliable", "KLIA Ekspres 33min to KL Sentral", "Drive from Singapore ~5h via 2nd Link"],
      costBreakdown: { Accommodation: 40, Food: 18, Transport: 8, Activities: 14, Misc: 10 },
      safety: ["Take licensed cabs or Grab — avoid unmetered ones", "Bag-snatching on scooters in Bukit Bintang — keep bag on inside arm", "Drink bottled water", "Modest dress at mosques"],
      photoSpots: ["KLCC Park reflecting pool", "Batu Caves rainbow stairs", "Thean Hou Temple lanterns", "Bukit Tabur ridge sunrise (advanced)", "Heli Lounge Bar helipad"]
    }
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    blurb: "Overwater villas, glass-clear lagoons, and the silence you forgot you needed.",
    flightTimeFromSGP: "4h 45m",
    dailyBudgetSGD: 600,
    bestSeason: "Nov–Apr",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1400&q=80",
    guide: {
      overview: "The Maldives is less a destination than a posture: horizontal, in water, with a book. Pick your resort carefully — the seaplane transfer is part of the magic but doubles your travel time.",
      itinerary: [
        { day: 1, title: "Arrive & Float", plan: "Seaplane or speedboat to resort, late lunch on the deck, snorkel the house reef, sunset dolphin cruise, beachfront dinner." },
        { day: 2, title: "Reef & Sandbank", plan: "Morning dive or manta ray excursion, sandbank picnic, spa in the afternoon, private dinner under the stars." },
        { day: 3, title: "Local Island", plan: "Maafushi or nearby local-island day trip for culture and budget eats, return for last lagoon swim and farewell cocktails." }
      ],
      food: ["Mas huni breakfast (tuna, coconut, chili)", "Garudhiya fish soup", "Resort buffets — surprisingly excellent", "Fresh sashimi-grade tuna", "Hedhikaa (Maldivian short eats)"],
      transport: ["Seaplane transfers daylight only", "Speedboat for nearer atolls", "Bicycle rentals at most resorts", "No public transport between atolls"],
      costBreakdown: { Accommodation: 480, Food: 80, Transport: 20, Activities: 80, Misc: 20 },
      safety: ["Very safe — resorts are private islands", "Sun is brutal — reef-safe SPF 50", "Modest dress on local islands (Muslim country)", "Alcohol only on resort islands"],
      photoSpots: ["Overwater villa private deck", "Bioluminescent beach at Vaadhoo", "Aerial of atolls from seaplane", "Sandbank at low tide", "Underwater restaurant at Conrad Rangali"]
    }
  },
  {
    id: "phuketkrabi",
    name: "Phuket & Krabi",
    country: "Thailand",
    blurb: "Limestone karsts rising from emerald water, longtail boats, and beach bars at sunset.",
    flightTimeFromSGP: "2h 0m",
    dailyBudgetSGD: 130,
    bestSeason: "Nov–Mar",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1400&q=80",
    guide: {
      overview: "Pair Phuket's nightlife and beach clubs with Krabi's dramatic karst scenery for a balanced Andaman trip. Skip Patong if it's not your scene — Kata, Kamala, and Ao Nang are calmer bases.",
      itinerary: [
        { day: 1, title: "Phuket Beaches", plan: "Breakfast in Kata, morning at Freedom Beach, lunch at Suay, sunset at Promthep Cape, dinner and drinks at Catch Beach Club." },
        { day: 2, title: "Phi Phi & Maya", plan: "Early speedboat to Phi Phi Leh, Maya Bay, Bamboo Island snorkel, lunch onboard, sunset back in Phuket, Old Town dinner walk." },
        { day: 3, title: "Krabi & Railay", plan: "Longtail to Railay Beach, rock-climb or laze on Phra Nang, kayak through Ao Thalane mangroves, Krabi night market dinner." }
      ],
      food: ["Massaman curry — Tu Kab Khao (Phuket Old Town)", "Phad thai at any beach shack", "Fresh seafood — Rawai pier", "Roti — Mali Roti", "Cocktails at Baba Nest Sri Panwa"],
      transport: ["Scooter ~SGD 12/day for confident riders", "Grab in Phuket only — taxis can be expensive", "Speedboats and longtails for islands", "Phuket airport (HKT) 45min to Patong/Kata"],
      costBreakdown: { Accommodation: 70, Food: 25, Transport: 15, Activities: 15, Misc: 5 },
      safety: ["Jet-ski scams in Patong — avoid renting", "Strong currents at some beaches — check red flags", "Box jellyfish rare but possible — vinegar at beaches", "Drink-spiking reported at some Patong bars"],
      photoSpots: ["Maya Bay early morning", "Railay viewpoint", "Hong Island lagoon", "Phuket Old Town Sino-Portuguese streets", "Big Buddha at sunrise"]
    }
  },
  {
    id: "sydney",
    name: "Sydney",
    country: "Australia",
    blurb: "Harbour life, ocean baths, and a flat white culture that takes coffee seriously.",
    flightTimeFromSGP: "8h 10m",
    dailyBudgetSGD: 250,
    bestSeason: "Sep–Nov · Mar–May",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=80",
    guide: {
      overview: "Sydney is outdoor living dressed up in a global city — surf before breakfast, harbour ferry to work, sunset wine in a back-alley wine bar. Three days is tight; four is better.",
      itinerary: [
        { day: 1, title: "Harbour Classics", plan: "Opera House tour, Royal Botanic Garden walk to Mrs Macquarie's Chair, ferry to Manly, fish and chips at the Wharf, harbour bridge climb at sunset." },
        { day: 2, title: "Coastal Walk", plan: "Bondi to Coogee walk, swim at Bronte, brunch at Three Blue Ducks, afternoon at Icebergs pool, dinner in Surry Hills." },
        { day: 3, title: "Inner West & Wine", plan: "Carriageworks market, Newtown street art, afternoon ferry to Watsons Bay, dinner at Doyles or back in the CBD." }
      ],
      food: ["Flat white anywhere — try Single O", "Modern Australian — Quay or Bennelong", "Vietnamese — Cabramatta", "Pies — Bourke Street Bakery", "Seafood — Sydney Fish Market"],
      transport: ["Opal card on trains, buses, ferries, light rail", "Ferries are the best way to see the harbour", "Uber and DiDi widely available", "Sydney Airport 13min on Airport Link train"],
      costBreakdown: { Accommodation: 150, Food: 60, Transport: 15, Activities: 20, Misc: 5 },
      safety: ["Very safe city overall", "Strong rips at ocean beaches — swim between flags", "UV is severe — SPF 50+ even on cloudy days", "Closing times can be early (kitchen 9pm in some areas)"],
      photoSpots: ["Mrs Macquarie's Chair for Opera House + Bridge", "Bondi Icebergs ocean pool", "Wedding Cake Rock (look only, don't stand on it)", "Sydney Harbour Bridge pylon lookout", "Hornby Lighthouse, Watsons Bay"]
    }
  },
  {
    id: "taipei",
    name: "Taipei",
    country: "Taiwan",
    blurb: "Night markets, mountain temples, and the friendliest city you'll visit this year.",
    flightTimeFromSGP: "4h 40m",
    dailyBudgetSGD: 130,
    bestSeason: "Oct–Dec · Mar–May",
    image: "https://images.unsplash.com/photo-1518472283177-c4f7f73a3415?auto=format&fit=crop&w=1400&q=80",
    guide: {
      overview: "Taipei is underrated and overdelivers: cheap, clean, kind, and full of food. Add a day trip to Jiufen or the hot springs at Beitou and you have a perfect long weekend.",
      itinerary: [
        { day: 1, title: "Central Taipei", plan: "Chiang Kai-shek Memorial, lunch at Din Tai Fung (the original), Taipei 101 observation, Shilin Night Market for dinner." },
        { day: 2, title: "Old Streets Day Trip", plan: "Train to Ruifang, Jiufen old street and teahouses, Shifen waterfall and sky lanterns, back to Taipei for Raohe Night Market." },
        { day: 3, title: "Mountain & Hot Springs", plan: "Elephant Mountain sunrise hike, brunch at Fujin Tree café, Beitou hot springs in the afternoon, dinner at a beef noodle shop." }
      ],
      food: ["Beef noodle soup — Yong Kang", "Xiaolongbao — Din Tai Fung", "Lu rou fan — Jin Feng", "Mango shaved ice — Smoothie House", "Bubble tea — Chun Shui Tang"],
      transport: ["EasyCard on MRT and buses", "MRT is cheap and goes everywhere", "YouBike rentals for short hops", "Taoyuan Airport: MRT 35min to Taipei Main"],
      costBreakdown: { Accommodation: 70, Food: 25, Transport: 10, Activities: 18, Misc: 7 },
      safety: ["Among the safest cities in Asia", "Lost wallets are routinely returned", "Earthquakes possible — follow drill instructions", "Typhoon season Jul–Sep"],
      photoSpots: ["Elephant Mountain Taipei 101 view", "Jiufen Amei Teahouse lanterns", "Shifen sky lantern release", "Beitou Hot Spring Library", "Dadaocheng Wharf at sunset"]
    }
  },
  {
    id: "hanoi",
    name: "Hanoi",
    country: "Vietnam",
    blurb: "Pho at dawn, scooters like a river, French colonial bones beneath a thousand-year-old soul.",
    flightTimeFromSGP: "3h 25m",
    dailyBudgetSGD: 95,
    bestSeason: "Oct–Apr",
    image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07e?auto=format&fit=crop&w=1400&q=80",
    guide: {
      overview: "Hanoi rewards slow walkers. Sit on a tiny plastic stool, drink egg coffee, watch the city move, and pretend not to notice the cyclist with five propane tanks weaving past you.",
      itinerary: [
        { day: 1, title: "Old Quarter", plan: "Hoan Kiem Lake morning walk, Ngoc Son Temple, pho for lunch at Pho Gia Truyen, Train Street coffee, water puppet show, bia hoi corner." },
        { day: 2, title: "History & Crafts", plan: "Temple of Literature, Ho Chi Minh Mausoleum and stilt house, lunch at Cha Ca Thang Long, afternoon ceramic workshop in Bat Trang." },
        { day: 3, title: "Halong Day Trip", plan: "Day cruise to Halong or Lan Ha Bay (better, less crowded), kayak through karsts, back to Hanoi for a farewell dinner at Cau Go." }
      ],
      food: ["Pho bo — Pho Gia Truyen", "Bun cha — Bun Cha Huong Lien (the Obama one)", "Banh mi — Banh Mi 25", "Egg coffee — Giang Café", "Cha ca — Cha Ca Thang Long"],
      transport: ["Grab bikes and cars are cheap and reliable", "Walking is the best way through Old Quarter", "Crossing the street: walk slowly and predictably — scooters flow around you", "Noi Bai Airport: ~45min by Grab"],
      costBreakdown: { Accommodation: 35, Food: 18, Transport: 10, Activities: 25, Misc: 7 },
      safety: ["Generally safe — watch bags on scooters", "Drink filtered/bottled water", "Egg coffee uses raw egg — choose reputable spots", "Train Street access restricted at times — follow café rules"],
      photoSpots: ["Train Street as a train passes (with permission)", "Hoan Kiem Lake at dawn", "Long Bien Bridge at sunset", "Temple of Literature courtyards", "Halong Bay karsts from a cruise deck"]
    }
  }
];
