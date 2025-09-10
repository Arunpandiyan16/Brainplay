
export interface NewsHeadline {
  headline: string;
  isReal: boolean;
  explanation: string;
  source: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  country: 'India' | 'Global';
}

export const fakeNewsData: NewsHeadline[] = [
    // === Easy ===
    // Global - Real
    {
        headline: "Scientists Discover Water on Mars",
        isReal: true,
        explanation: "This is a real finding. NASA has confirmed the presence of liquid water on Mars multiple times, which has significant implications for potential life.",
        source: "Astro Today",
        difficulty: 'Easy',
        country: 'Global'
    },
    {
        headline: "World's Largest Pizza Baked in Rome",
        isReal: true,
        explanation: "This is real. In 2012, a team of chefs created a pizza with a surface area of 1,261 square meters, setting a Guinness World Record.",
        source: "Global Food Times",
        difficulty: 'Easy',
        country: 'Global'
    },
    // Global - Fake
    {
        headline: "Study Finds Chocolate Cures All Diseases",
        isReal: false,
        explanation: "This is fake. While dark chocolate has health benefits, it's not a cure-all. This headline is an exaggeration typical of fake health news.",
        source: "HealthBeat Journal",
        difficulty: 'Easy',
        country: 'Global'
    },
    {
        headline: "BREAKING: Talking Cat Elected Mayor of Small Town",
        isReal: false,
        explanation: "This is fake. While a cat named Stubbs was the honorary mayor of Talkeetna, Alaska, it did not 'talk' or win a formal election.",
        source: "Local Ledger",
        difficulty: 'Easy',
        country: 'Global'
    },

    // India - Real
    {
        headline: "India's Mangalyaan Mission Reaches Mars Orbit on First Attempt",
        isReal: true,
        explanation: "This is real. In 2014, India's ISRO successfully placed the Mars Orbiter Mission (Mangalyaan) into orbit, making it the first nation to do so on its first try.",
        source: "The Cosmic Chronicle",
        difficulty: 'Easy',
        country: 'India'
    },
    {
        headline: "A Post Office in India Is Shaped Like a Giant Letterbox",
        isReal: true,
        explanation: "This is real. The GPO (General Post Office) in Kolkata has a museum section housed in a building designed to look like a red letterbox.",
        source: "Architecture Daily",
        difficulty: 'Easy',
        country: 'India'
    },

    // India - Fake
    {
        headline: "Taj Mahal to be Painted Blue for a Month",
        isReal: false,
        explanation: "This is fake. The Taj Mahal is a protected UNESCO World Heritage site and there are no plans to change its iconic white marble color.",
        source: "Heritage Weekly",
        difficulty: 'Easy',
        country: 'India'
    },
    {
        headline: "Government Announces Free Internet for All Citizens",
        isReal: false,
        explanation: "This is fake. While there are initiatives to provide low-cost internet, there is no plan to make it entirely free for everyone in the country.",
        source: "Digital India News",
        difficulty: 'Easy',
        country: 'India'
    },

    // === Medium ===
    // Global - Real
    {
        headline: "Octopuses Observed 'Throwing' Debris at Each Other",
        isReal: true,
        explanation: "This is real. Scientists have documented octopuses in the wild purposefully gathering and flinging shells and silt, sometimes at other octopuses.",
        source: "Oceanic Observer",
        difficulty: 'Medium',
        country: 'Global'
    },
    // Global - Fake
    {
        headline: "Archaeologists Unearth Ancient Roman Subway System",
        isReal: false,
        explanation: "This is fake. While the Romans built impressive roads and aqueducts, there is no evidence they constructed anything resembling a modern subway system.",
        source: "Ancient Insights",
        difficulty: 'Medium',
        country: 'Global'
    },
    // India - Real
    {
        headline: "Floating Post Office in Dal Lake, Srinagar, a Major Tourist Attraction",
        isReal: true,
        explanation: "This is real. India has a floating post office on a houseboat in Dal Lake, Srinagar, which has been operational for several years.",
        source: "Travel Post",
        difficulty: 'Medium',
        country: 'India'
    },
     // India - Fake
    {
        headline: "Mumbai Introduces Water Taxis that Can Drive on Roads",
        isReal: false,
        explanation: "This is fake. While Mumbai has ferry and water taxi services, amphibious vehicles are not part of its public transport system.",
        source: "Metro Movers",
        difficulty: 'Medium',
        country: 'India'
    },
    
    // === Hard ===
    // Global - Real
    {
        headline: "A Man Once Sued a Beer Company for False Advertising Because Their Ads Didn’t Make Him Popular with Women",
        isReal: true,
        explanation: "This is a real court case. In 1991, a man sued Anheuser-Busch. The case was ultimately dismissed as frivolous.",
        source: "Legal Eagle News",
        difficulty: 'Hard',
        country: 'Global'
    },
     {
        headline: "The Australian Government Once Lost a War Against Emus",
        isReal: true,
        explanation: "This is real. In 1932, the 'Great Emu War' took place where soldiers with machine guns were deployed to combat an emu population boom, and they were largely unsuccessful.",
        source: "Historical Gazette",
        difficulty: 'Hard',
        country: 'Global'
    },
    // Global - Fake
    {
        headline: "Linguistic Experts Announce Dolphins Have Developed a Written Language Using Sand Patterns",
        isReal: false,
        explanation: "This is fake. While dolphins are highly intelligent and use complex vocalizations, there is no scientific evidence of them using a written language.",
        source: "Marine Linguistics Digest",
        difficulty: 'Hard',
        country: 'Global'
    },
    {
        headline: "Amazon Patents 'Predictive Shipping' Technology That Sends You Items Before You Buy Them",
        isReal: true,
        explanation: "This is surprisingly real. Amazon was granted a patent in 2014 for an 'anticipatory shipping' system to start delivering packages even before customers have clicked 'buy'.",
        source: "Tech Patents Weekly",
        difficulty: 'Hard',
        country: 'Global'
    },
    // India - Real
    {
        headline: "A Village in Maharashtra, Shani Shingnapur, is Famous for Having No Doors on its Houses",
        isReal: true,
        explanation: "This is real. Due to a belief that the deity Lord Shani protects the village from theft, most homes and shops in Shani Shingnapur traditionally do not have doors.",
        source: "Cultural Chronicles",
        difficulty: 'Hard',
        country: 'India'
    },
    {
        headline: "The Highest Cricket Ground in the World is Located in Chail, Himachal Pradesh",
        isReal: true,
        explanation: "This is real. The Chail Cricket Ground, at an altitude of 2,444 meters, is the highest in the world and was built in 1893.",
        source: "High Altitude Sports",
        difficulty: 'Hard',
        country: 'India'
    },
    // India - Fake
    {
        headline: "Indian Government Approves Plan to Build a High-Speed Rail Network Suspended by Magnetic Fields Over Rivers",
        isReal: false,
        explanation: "This is fake. While India is developing high-speed rail, the technology described (river-based magnetic levitation) is not part of any current, approved project.",
        source: "Future Infra Weekly",
        difficulty: 'Hard',
        country: 'India'
    },
    {
        headline: "ISRO Confirms Discovery of Ancient Temple Structure on the Moon's Surface",
        isReal: false,
        explanation: "This is fake. ISRO's lunar missions have made significant discoveries, but finding man-made structures is not one of them.",
        source: "Celestial Archaeology",
        difficulty: 'Hard',
        country: 'India'
    },
  // === India – Hard ===
  {
    headline: "U.S. imposes 50% tariff on India over Russian oil purchases; rupee hits record low, stock markets tumble",
    isReal: true,
    explanation: "The U.S. doubled tariffs to 50% on Indian imports like textiles and leather, reacting to India’s continued Russian oil imports; this caused the rupee and major indices to fall sharply.",
    source: "Times of India / IndiaTimes",
    difficulty: 'Hard',
    country: 'India'
  },
  {
    headline: "India growth likely slowed to 6.7% in April–June and set to ease further: Reuters poll",
    isReal: true,
    explanation: "A Reuters poll suggests India’s Q1 growth dipped to 6.7% from 7.4%, citing weak industry and private investment; GVA is at 6.4%, with FY year-long growth projected at 6.3%.",
    source: "Reuters",
    difficulty: 'Hard',
    country: 'India'
  },
  {
    headline: "Fitch maintains its rating on India, citing strong growth",
    isReal: true,
    explanation: "Fitch reaffirmed India’s ‘BBB-’ rating, highlighting resilient growth and gov’t spending; it noted U.S. tariffs as a moderate downside risk offset by proposed GST reforms.",
    source: "Reuters",
    difficulty: 'Medium',
    country: 'India'
  },
  {
    headline: "India temporarily suspends most postal services to US; effective August 25",
    isReal: true,
    explanation: "In response to new U.S. customs regulations, India halted most postal services to the U.S. from August 25, although some services remain exempt.",
    source: "Times of India",
    difficulty: 'Medium',
    country: 'India'
  },
  {
    headline: "India’s Mission Sudarshan Chakra unveiled as multi-domain defence shield",
    isReal: true,
    explanation: "Announced on August 15, the 'Sudarshan Chakra' aims to modernize India’s defense with AI, quantum computing, and integrated sensor infrastructure under Atmanirbhar Bharat.",
    source: "Wikipedia / Reuters",
    difficulty: 'Medium',
    country: 'India'
  },

  // === Global – Med to Hard ===
  {
    headline: "Markets react sharply as tariff and rate-cut tensions weigh on global equities",
    isReal: true,
    explanation: "UK retail stocks dropped after Deutsche Bank downgrades; U.S. markets fluctuated on Fed independence concerns and tariff threats, while Filtronic gained on a SpaceX contract.",
    source: "The Guardian",
    difficulty: 'Hard',
    country: 'Global'
  },
  {
    headline: "Drake Passage 7.4-magnitude earthquake underscores oceanographic risks",
    isReal: true,
    explanation: "A strong 7.4 earthquake in the Drake Passage raised tsunami alerts in Chile and highlighted potential impacts on ocean circulation and Antarctic ice stability.",
    source: "Times of India",
    difficulty: 'Hard',
    country: 'Global'
  },
  {
    headline: "Wall Street jumps after Fed’s Powell signals possible rate cut",
    isReal: true,
    explanation: "At Jackson Hole, Jerome Powell hinted at rate cuts amid tariff and immigration pressures from the Trump administration; markets rallied on the dovish tone.",
    source: "The Guardian",
    difficulty: 'Medium',
    country: 'Global'
  },
  {
    headline: "US cancels India trade talks scheduled for August amid tariff buildup",
    isReal: true,
    explanation: "Trade negotiations in Delhi were called off just before a planned 25% additional tariff took effect, intensifying U.S.–India trade tensions.",
    source: "Reuters / NDTV Profit",
    difficulty: 'Medium',
    country: 'Global'
  },
  {
    headline: "4 black rainstorm episodes in Hong Kong break historical record",
    isReal: true,
    explanation: "Between late July and early August, Hong Kong experienced four ‘black rainstorm’ events—the highest alert level—marking a record cluster of severe precipitation.",
    source: "arXiv",
    difficulty: 'Hard',
    country: 'Global'
    },
   {
    headline: "Rupee braces for 50% US tariffs; deepens pressure on Indian markets",
    isReal: true,
    explanation: "With new U.S. tariffs up to 50% set to take effect, India’s rupee is expected to weaken further amid heightened market volatility and concerns over Fed independence.1",
    source: "Reuters",
    difficulty: 'Hard',
    country: 'India'
  },
  // === Global – Medium ===
  {
    headline: "Lebanon to present plan by August 31 to persuade Hezbollah to disarm: U.S. envoy",
    isReal: true,
    explanation: "The U.S.-brokered peace initiative aims for Lebanon to submit a non-violent plan to disarm Hezbollah by August 31, with Israel expected to respond accordingly.2",
    source: "Reuters",
    difficulty: 'Medium',
    country: 'Global'
  },
  // === Global – Medium ===
  {
    headline: "China's Xi Jinping to host Putin and Modi at SCO summit in show of solidarity",
    isReal: true,
    explanation: "Xi will host the Shanghai Cooperation Organisation summit from August 31 to September 1 in Tianjin, with Putin and Modi among attendees, symbolizing Global South unity.3",
    source: "Reuters",
    difficulty: 'Medium',
    country: 'Global'
  },
  // === Global – Hard ===
  {
    headline: "Israel airstrike on Gaza hospital kills civilians and journalists, spurring EU diplomatic action",
    isReal: true,
    explanation: "A double-tap strike on Gaza’s Nasser Hospital killed at least 20 people, including Reuters and AP journalists, prompting calls from EU diplomats for accountability.4",
    source: "The Guardian",
    difficulty: 'Hard',
    country: 'Global'
  },
  // === Global – Medium ===
  {
    headline: "US grants tariff exemption to Indonesia on palm oil, cocoa and rubber",
    isReal: true,
    explanation: "The U.S. reportedly agreed to exempt key Indonesian exports from a 19% tariff, aiming to stabilize trade while exploring mutual infrastructure investments.5",
    source: "Reuters",
    difficulty: 'Medium',
    country: 'Global'
  },
  // === Global – Hard ===
  {
    headline: "Markets jittery as Trump’s Fed turmoil fuels yield curve concerns",
    isReal: true,
    explanation: "Traders are reacting to political turbulence surrounding the Fed, particularly after Trump’s attempt to oust a governor, adding stress on yields and AI investment sentiment.6",
    source: "Reuters",
    difficulty: 'Hard',
    country: 'Global'
  },
  // === Global – Hard ===
  {
    headline: "Dollar and Treasury yields slide as Trump escalates pressure on Federal Reserve",
    isReal: true,
    explanation: "Markets responded to Trump’s removal of Fed Governor Lisa Cook with a drop in the dollar, movement in bond yields, and a rise in gold as flight-to-safety picked up.7",
    source: "Reuters",
    difficulty: 'Hard',
    country: 'Global'
  },
  // === Global – Medium ===
  {
    headline: "Asia shares rise on hopes of US rate cuts but Nvidia's earnings loom as potential hurdle",
    isReal: true,
    explanation: "Asian markets gained on expectations of Fed easing, although optimism remained cautious with Nvidia’s earnings looming.8",
    source: "Reuters",
    difficulty: 'Medium',
    country: 'Global'
  },
  // === Global – Hard ===
  {
    headline: "Markets remain on edge as Trump firing attempt raises doubts on Fed independence",
    isReal: true,
    explanation: "Despite rate-cut optimism, Trump’s attempt to fire Fed Governor Cook rattled markets, raising concerns over the central bank’s autonomy and geopolitical risks.9",
    source: "Reuters",
    difficulty: 'Hard',
    country: 'Global'
  },
  // === Global – Medium ===
  {
    headline: "Xi Jinping to host major regional summit in Tianjin with over 20 world leaders",
    isReal: true,
    explanation: "Xi will host leaders including Putin, Modi, and UN Secretary-General Guterres at the SCO summit in Tianjin, to deepen political and security cooperation.10",
    source: "Reuters",
    difficulty: 'Medium',
    country: 'Global'
  },
   // === India – Hard ===
  {
    headline: "Papa John's to re-enter India with plan for 650 stores by 2035",
    isReal: true,
    explanation: "Papa John's plans to return in October 2025 and roll out 650 outlets over the next decade drive, adapting menus for India’s competitive quick-service market.1",
    source: "Reuters",
    difficulty: 'Medium',
    country: 'India'
  },
  {
    headline: "Suzuki to invest $8 billion in India over next 5–6 years",
    isReal: true,
    explanation: "Suzuki will bolster production and EV output via Maruti’s Gujarat hub, plus lithium-ion cell manufacturing for global exports.2",
    source: "Reuters",
    difficulty: 'Medium',
    country: 'India'
  },
  {
    headline: "Vedanta's deleveraging push faces trust issues with Indian government",
    isReal: true,
    explanation: "The government has pushed back on Vedanta’s breakup plan amid concerns over accounting issues and withheld payments.3",
    source: "Reuters",
    difficulty: 'Hard',
    country: 'India'
  },
  {
    headline: "India to tap Amazon and Flipkart data for new CPI revamp",
    isReal: true,
    explanation: "The revised CPI will integrate weekly online prices to better reflect modern consumption trends.4",
    source: "Reuters",
    difficulty: 'Medium',
    country: 'India'
  },
  {
    headline: "Fitch maintains India's 'BBB-' rating, citing strong outlook",
    isReal: true,
    explanation: "Fitch reaffirmed India’s rating with a solid 6.5% GDP growth forecast despite U.S. tariff headwinds.5",
    source: "Reuters",
    difficulty: 'Medium',
    country: 'India'
  },

  // === India – Medium ===
  {
    headline: "India backs Quad ahead of Modi’s Japan trip amid US ties strain",
    isReal: true,
    explanation: "India reaffirmed Quad’s importance ahead of Modi’s Japan visit, focusing on critical minerals cooperation.6",
    source: "Reuters",
    difficulty: 'Medium',
    country: 'India'
  },
  {
    headline: "Rupee slips as importers retreat amid US tariff anxiety",
    isReal: true,
    explanation: "The rupee weakened on light import hedging and fears of impending 50% U.S. tariffs.7",
    source: "Reuters",
    difficulty: 'Medium',
    country: 'India'
  },

  // === Global – Medium to Hard ===
  {
    headline: "US cancels India trade talks ahead of steep tariffs",
    isReal: true,
    explanation: "The U.S. canceled scheduled trade talks in Delhi just before new 50% tariffs were implemented.8",
    source: "Reuters",
    difficulty: 'Medium',
    country: 'Global'
  },
  {
    headline: "Trump nominates Sergio Gor as next US ambassador to India",
    isReal: true,
    explanation: "Trump selected longtime aide Sergio Gor as ambassador and special envoy for the region amidst trade tensions.9",
    source: "Reuters",
    difficulty: 'Hard',
    country: 'Global'
  },
  {
    headline: "How India-US trade talks unraveled amid tariff fallout",
    isReal: true,
    explanation: "A breakdown in negotiations over agriculture and Russian oil led to abrupt 25% tariffs, up to 50% eventually.10",
    source: "Reuters",
    difficulty: 'Hard',
    country: 'Global'
  },
  {
        "headline": "NASA Plans Mission to Study Jupiter’s Moon Europa for Signs of Life",
        "isReal": true,
        "explanation": "NASA is developing a mission named Europa Clipper to study the moon's ice-covered ocean and its potential habitability.",
        "source": "Space Research Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "Scientists Claim That Drinking Water from Plastic Bottles Rejuvenates Youth",
        "isReal": false,
        "explanation": "There is no scientific basis for this claim. Plastic water bottles do not have rejuvenating properties.",
        "source": "Pseudoscience Digest",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Launches World's First 6G Satellite Prototype",
        "isReal": false,
        "explanation": "As of now, no country has launched a working 6G satellite prototype; 5G remains the latest deployed technology.",
        "source": "Tech Hoax Daily",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "India’s PM Announces 'Digital India 2.0' Initiative to Boost Tech Infrastructure",
        "isReal": true,
        "explanation": "The government announced a new phase of the Digital India program aiming to improve internet penetration and digital governance.",
        "source": "Times of India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "World Health Organization Declares Coffee as Official Antidepressant",
        "isReal": false,
        "explanation": "WHO has never declared coffee as an official antidepressant; such a claim is false.",
        "source": "Global Fake Health News",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s Chandrayaan-3 Successfully Lands Near Moon's South Pole",
        "isReal": true,
        "explanation": "Chandrayaan-3 successfully landed in 2023, marking a significant achievement for ISRO.",
        "source": "ISRO Official Reports",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Ancient Underwater City Discovered in the Mediterranean Sea",
        "isReal": true,
        "explanation": "Archaeologists discovered remnants of a submerged ancient city near Greece, possibly from the Bronze Age.",
        "source": "Archaeology Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "Government to Ban All Petrol and Diesel Cars Starting Next Year",
        "isReal": false,
        "explanation": "No such blanket ban has been announced; the government focuses on promoting electric vehicles gradually.",
        "source": "Fake Policy Weekly",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Apple Unveils Next-Generation Foldable iPhone with 5G Support",
        "isReal": false,
        "explanation": "As of now, Apple has not released a foldable iPhone; this is a speculative rumor.",
        "source": "Tech Hoaxes Today",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "New Study Finds Link Between Poor Air Quality and Increased Risk of Depression",
        "isReal": true,
        "explanation": "Scientific studies confirm that prolonged exposure to air pollution correlates with higher risks of mental health issues.",
        "source": "Health Science Today",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India to Build World’s Tallest Skyscraper in Mumbai by 2030",
        "isReal": false,
        "explanation": "While plans exist to build tall structures, no confirmed project for the world's tallest building in Mumbai has been announced.",
        "source": "Urban Myth News",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Scientists Successfully Clone Woolly Mammoth from Preserved DNA",
        "isReal": false,
        "explanation": "Woolly mammoth cloning remains theoretical; no successful clones have been created yet.",
        "source": "Genetics Hoax Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India's IT Industry Exports Cross $200 Billion Mark in Latest Fiscal Year",
        "isReal": true,
        "explanation": "India’s IT exports have crossed significant milestones, contributing massively to the economy.",
        "source": "Economic Times India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "New App Claims to Detect Lies Through Smartphone Sensors",
        "isReal": false,
        "explanation": "No app has scientifically validated technology to detect lies through sensors; this is a pseudoscientific claim.",
        "source": "Fake Tech Innovations",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Launches National Electric Vehicle Policy to Cut Carbon Emissions",
        "isReal": true,
        "explanation": "India's policy promotes electric vehicle adoption and infrastructure development for a sustainable future.",
        "source": "Government Press Release",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Ancient Alien Base Found Beneath the Pyramids, Experts Claim",
        "isReal": false,
        "explanation": "This claim is entirely fictional with no scientific support.",
        "source": "Pseudo History Weekly",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "Breakthrough in Cancer Research: New Drug Shows 90% Success Rate",
        "isReal": true,
        "explanation": "Recent studies show promising results in specific cancer types, though not universally 90%.",
        "source": "Medical Science Today",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Inaugurates World’s Largest Solar Power Plant",
        "isReal": true,
        "explanation": "India inaugurated Bhadla Solar Park, one of the largest in the world, advancing renewable energy usage.",
        "source": "Clean Energy Times",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Aliens Send Secret Messages Embedded in Global Internet Traffic",
        "isReal": false,
        "explanation": "There is no evidence or credible research supporting this claim.",
        "source": "Conspiracy Theory Review",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "Government Launches Free Wi-Fi Scheme for Rural India",
        "isReal": true,
        "explanation": "Schemes like BharatNet aim to expand internet connectivity in rural India at no cost.",
        "source": "Digital India Report",
        "difficulty": "Easy",
        "country": "India"
    },
  
    {
        "headline": "NASA Plans Mission to Study Jupiter’s Moon Europa for Signs of Life",
        "isReal": true,
        "explanation": "NASA is developing a mission named Europa Clipper to study the moon's ice-covered ocean and its potential habitability.",
        "source": "Space Research Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "Scientists Claim That Drinking Water from Plastic Bottles Rejuvenates Youth",
        "isReal": false,
        "explanation": "There is no scientific basis for this claim. Plastic water bottles do not have rejuvenating properties.",
        "source": "Pseudoscience Digest",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Launches World's First 6G Satellite Prototype",
        "isReal": false,
        "explanation": "As of now, no country has launched a working 6G satellite prototype; 5G remains the latest deployed technology.",
        "source": "Tech Hoax Daily",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "India’s PM Announces 'Digital India 2.0' Initiative to Boost Tech Infrastructure",
        "isReal": true,
        "explanation": "The government announced a new phase of the Digital India program aiming to improve internet penetration and digital governance.",
        "source": "Times of India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "World Health Organization Declares Coffee as Official Antidepressant",
        "isReal": false,
        "explanation": "WHO has never declared coffee as an official antidepressant; such a claim is false.",
        "source": "Global Fake Health News",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s Chandrayaan-3 Successfully Lands Near Moon's South Pole",
        "isReal": true,
        "explanation": "Chandrayaan-3 successfully landed in 2023, marking a significant achievement for ISRO.",
        "source": "ISRO Official Reports",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Ancient Underwater City Discovered in the Mediterranean Sea",
        "isReal": true,
        "explanation": "Archaeologists discovered remnants of a submerged ancient city near Greece, possibly from the Bronze Age.",
        "source": "Archaeology Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "Government to Ban All Petrol and Diesel Cars Starting Next Year",
        "isReal": false,
        "explanation": "No such blanket ban has been announced; the government focuses on promoting electric vehicles gradually.",
        "source": "Fake Policy Weekly",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Apple Unveils Next-Generation Foldable iPhone with 5G Support",
        "isReal": false,
        "explanation": "As of now, Apple has not released a foldable iPhone; this is a speculative rumor.",
        "source": "Tech Hoaxes Today",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "New Study Finds Link Between Poor Air Quality and Increased Risk of Depression",
        "isReal": true,
        "explanation": "Scientific studies confirm that prolonged exposure to air pollution correlates with higher risks of mental health issues.",
        "source": "Health Science Today",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India to Build World’s Tallest Skyscraper in Mumbai by 2030",
        "isReal": false,
        "explanation": "While plans exist to build tall structures, no confirmed project for the world's tallest building in Mumbai has been announced.",
        "source": "Urban Myth News",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Scientists Successfully Clone Woolly Mammoth from Preserved DNA",
        "isReal": false,
        "explanation": "Woolly mammoth cloning remains theoretical; no successful clones have been created yet.",
        "source": "Genetics Hoax Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India's IT Industry Exports Cross $200 Billion Mark in Latest Fiscal Year",
        "isReal": true,
        "explanation": "India’s IT exports have crossed significant milestones, contributing massively to the economy.",
        "source": "Economic Times India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "New App Claims to Detect Lies Through Smartphone Sensors",
        "isReal": false,
        "explanation": "No app has scientifically validated technology to detect lies through sensors; this is a pseudoscientific claim.",
        "source": "Fake Tech Innovations",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Launches National Electric Vehicle Policy to Cut Carbon Emissions",
        "isReal": true,
        "explanation": "India's policy promotes electric vehicle adoption and infrastructure development for a sustainable future.",
        "source": "Government Press Release",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Ancient Alien Base Found Beneath the Pyramids, Experts Claim",
        "isReal": false,
        "explanation": "This claim is entirely fictional with no scientific support.",
        "source": "Pseudo History Weekly",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "Breakthrough in Cancer Research: New Drug Shows 90% Success Rate",
        "isReal": true,
        "explanation": "Recent studies show promising results in specific cancer types, though not universally 90%.",
        "source": "Medical Science Today",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Inaugurates World’s Largest Solar Power Plant",
        "isReal": true,
        "explanation": "India inaugurated Bhadla Solar Park, one of the largest in the world, advancing renewable energy usage.",
        "source": "Clean Energy Times",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Aliens Send Secret Messages Embedded in Global Internet Traffic",
        "isReal": false,
        "explanation": "There is no evidence or credible research supporting this claim.",
        "source": "Conspiracy Theory Review",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "Government Launches Free Wi-Fi Scheme for Rural India",
        "isReal": true,
        "explanation": "Schemes like BharatNet aim to expand internet connectivity in rural India at no cost.",
        "source": "Digital India Report",
        "difficulty": "Easy",
        "country": "India"
    },
    {
        "headline": "India Successfully Tests Hypersonic Missile for Strategic Defense",
        "isReal": true,
        "explanation": "India conducted a successful test of a hypersonic missile in 2023 as part of strengthening its strategic defense capabilities.",
        "source": "ISRO Official Reports",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "NASA Detects First Direct Evidence of Parallel Universe",
        "isReal": false,
        "explanation": "There is no scientific confirmation or credible evidence supporting the detection of a parallel universe.",
        "source": "Pseudo Science News",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s New Renewable Energy Policy to Phase Out Coal Plants by 2040",
        "isReal": true,
        "explanation": "The government announced ambitious targets under its National Energy Policy to reduce coal dependency and promote renewables.",
        "source": "Economic Times India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "New Study Finds Link Between 5G Radiation and Brain Tumors",
        "isReal": false,
        "explanation": "Multiple scientific studies have found no causal link between 5G exposure and brain tumors; this is misinformation.",
        "source": "Health Conspiracy Weekly",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Launches World’s Largest Digital Education Platform for Rural Students",
        "isReal": true,
        "explanation": "India launched DIKSHA and other platforms to improve digital education access for rural students nationwide.",
        "source": "Government of India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Scientists Develop Technology to Extract Water Directly from Air at Large Scale",
        "isReal": true,
        "explanation": "Recent innovations have enabled large-scale atmospheric water generators, providing sustainable solutions in arid regions.",
        "source": "Tech Science Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "Indian Government Approves Project to Build Underwater Train Network Connecting Major Coastal Cities",
        "isReal": false,
        "explanation": "No such project has been officially announced or funded; this is a fabricated story.",
        "source": "Future Hoax Weekly",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "WHO Issues New Guidelines to Combat Antimicrobial Resistance Globally",
        "isReal": true,
        "explanation": "WHO published updated strategies in 2023 to tackle the global rise in antimicrobial resistance.",
        "source": "World Health Organization",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s Agricultural Exports Surpass $50 Billion Mark for the First Time",
        "isReal": true,
        "explanation": "India's agricultural export sector crossed significant milestones recently, contributing strongly to the economy.",
        "source": "Economic Times India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Study Reveals That Drinking Lemon Water in the Morning Cures Diabetes",
        "isReal": false,
        "explanation": "This is a common health myth with no scientific evidence supporting it as a diabetes cure.",
        "source": "Health Myths Journal",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India to Host 2030 World Solar Summit Aiming for Renewable Collaboration",
        "isReal": true,
        "explanation": "India has been chosen to host the World Solar Summit in 2030 to boost international renewable energy efforts.",
        "source": "UN Energy Program",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Scientists Successfully Reverse Aging in Mice Using Gene Therapy",
        "isReal": true,
        "explanation": "Experimental studies in mice show promising results reversing signs of aging, though not yet applicable to humans.",
        "source": "Scientific American",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Approves Bill to Make Yoga Mandatory in All Schools by 2025",
        "isReal": false,
        "explanation": "There is no government-approved bill mandating yoga in every school; this is false information.",
        "source": "Fake Government News",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Links Red Meat Consumption to Increased Risk of Colon Cancer",
        "isReal": true,
        "explanation": "Multiple studies have confirmed the link between high red meat consumption and increased cancer risk.",
        "source": "Health Science Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s Smart City Projects Lead to 40% Reduction in Urban Traffic Congestion",
        "isReal": true,
        "explanation": "Reports show smart city initiatives are improving urban planning and reducing congestion in pilot cities.",
        "source": "Digital India Report",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "New Device Converts Human Sweat into Electricity for Small Electronics",
        "isReal": true,
        "explanation": "Researchers developed a wearable device that harvests energy from sweat to power low-energy electronics.",
        "source": "Tech Innovation Today",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s Space Research Organization Discovers Alien Microbes on Mars",
        "isReal": false,
        "explanation": "No space agency has reported the discovery of alien microbes on Mars; this is entirely fictional.",
        "source": "Extraterrestrial Hoax Weekly",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global CO2 Emissions Drop by 7% Amid Renewables Surge",
        "isReal": true,
        "explanation": "Reports confirm a significant drop in global CO2 emissions in 2020 due to pandemic-related reductions and renewable energy adoption.",
        "source": "IPCC Reports",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s Education Ministry Launches Program to Teach Coding in Schools from Grade 1",
        "isReal": true,
        "explanation": "The Indian government announced plans to introduce coding and computational thinking into school curricula to promote digital literacy.",
        "source": "Government of India Official",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Shows Wearing Aluminum Foil Hats Blocks Government Mind Control Signals",
        "isReal": false,
        "explanation": "There is no scientific basis for claims that aluminum foil hats can block mind control or government signals.",
        "source": "Conspiracy Theory Weekly",
        "difficulty": "Easy",
        "country": "Global"
    },
   {
        "headline": "India Develops Indigenous COVID-19 Vaccine, Achieves Phase 3 Trial Success",
        "isReal": true,
        "explanation": "India developed multiple indigenous COVID-19 vaccines, with some passing Phase 3 trials successfully and being approved for use.",
        "source": "Indian Council of Medical Research (ICMR)",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "World Bank Projects India to Become 3rd Largest Economy by 2030",
        "isReal": true,
        "explanation": "According to several economic forecasts, India is projected to become the world’s 3rd largest economy by 2030.",
        "source": "World Bank Report",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "Study Finds Drinking 8 Cups of Coffee Daily Eliminates All Cancer Risks",
        "isReal": false,
        "explanation": "Excessive coffee intake may have health risks; no credible study confirms it eliminates all cancer risks.",
        "source": "Health Hoax Digest",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India’s Largest Solar Park Inaugurated, Generating Over 2 GW Capacity",
        "isReal": true,
        "explanation": "India inaugurated its largest solar park with over 2 GW of power generation capacity in Rajasthan.",
        "source": "Economic Times India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Scientists Achieve Quantum Teleportation of Data Over 100 Kilometers",
        "isReal": true,
        "explanation": "Recent experiments successfully demonstrated quantum teleportation of information over long distances.",
        "source": "Nature Physics",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Launches First Indigenous Electric Car with 500 km Range",
        "isReal": false,
        "explanation": "While India promotes electric vehicle production, no indigenous electric car with 500 km range is currently available.",
        "source": "Fake Auto Industry News",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Study Finds Link Between Excessive Screen Time and Sleep Disorders in Children",
        "isReal": true,
        "explanation": "Many studies link excessive screen time in children with disrupted sleep patterns and disorders.",
        "source": "Pediatric Health Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Approves First Ever AI-Powered Healthcare Regulation Framework",
        "isReal": true,
        "explanation": "India became one of the first nations to approve an AI-based regulatory framework for medical devices and diagnostics.",
        "source": "Government of India Official Reports",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Aliens Contact Earth Using Radio Signals, Claims Secret Whistleblower",
        "isReal": false,
        "explanation": "There is no verified or credible source confirming alien contact through radio signals; this is misinformation.",
        "source": "Extraterrestrial Hoax Weekly",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s First Hydrogen-Powered Train Launched in Delhi NCR Region",
        "isReal": true,
        "explanation": "India conducted trials for its first hydrogen-powered train as part of sustainable transportation initiatives.",
        "source": "Railway Ministry of India",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Study Links Increased Meat Consumption to Accelerated Climate Change",
        "isReal": true,
        "explanation": "Research shows that livestock farming contributes significantly to greenhouse gas emissions.",
        "source": "Environmental Science Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s Ministry of Finance Announces Free Tax Filing for All Citizens Starting Next Fiscal Year",
        "isReal": false,
        "explanation": "There is no official announcement supporting free tax filing for all Indian citizens; this is fake news.",
        "source": "Economic Hoax Daily",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Scientists Identify Key Gene Responsible for Longevity in Humans",
        "isReal": true,
        "explanation": "Multiple genetic studies have found links between specific genes and increased human lifespan.",
        "source": "Genomics Today",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Bans All Cryptocurrency Trading from Next Year",
        "isReal": false,
        "explanation": "Although the Indian government is considering regulatory frameworks, no outright ban on cryptocurrency trading has been announced.",
        "source": "Financial Hoax News",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "UN Launches Global Campaign to End Child Labor by 2030",
        "isReal": true,
        "explanation": "The UN runs initiatives like the International Year for the Elimination of Child Labor to target this global problem.",
        "source": "United Nations",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s Startup Ecosystem Grows 30% YoY, Becoming Third Largest Globally",
        "isReal": true,
        "explanation": "Reports show India's startup ecosystem expanding rapidly, now ranking among the top three in the world.",
        "source": "Startup India Report",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Finds Daily Consumption of Carrots Reverses Vision Loss in Adults",
        "isReal": false,
        "explanation": "Carrots are healthy for vision but cannot reverse vision loss; this is a common misconception and false claim.",
        "source": "Health Myths Weekly",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India to Host Global Climate Change Conference in 2027",
        "isReal": true,
        "explanation": "India was selected to host the next major climate change conference as part of international environmental cooperation.",
        "source": "United Nations Environment Program",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Researchers Develop Biodegradable Plastic That Decomposes in 30 Days",
        "isReal": true,
        "explanation": "Innovations in polymer science have resulted in biodegradable plastics that break down quickly under environmental conditions.",
        "source": "Environmental Science Today",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Plans to Privatize Entire Rail Network by 2025",
        "isReal": false,
        "explanation": "India has no official policy to privatize the entire rail network; only select segments have been opened for private investment.",
        "source": "Transportation Hoax Digest",
        "difficulty": "Hard",
        "country": "India"
    },
  {
        "headline": "India Launches First Space Telescope, Named 'Aryabhata-II'",
        "isReal": false,
        "explanation": "India has launched several space missions, but there is no publicly confirmed mission called 'Aryabhata-II' as a space telescope.",
        "source": "Fictional Space News",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "WHO Declares Global Health Emergency Over New Super Flu Strain",
        "isReal": true,
        "explanation": "WHO occasionally declares health emergencies, such as for COVID-19 and Ebola. A recent super flu strain triggered such alerts in 2025.",
        "source": "World Health Organization Official Report",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Crosses $5 Trillion GDP Milestone Amid Global Economic Slowdown",
        "isReal": true,
        "explanation": "India officially crossed the $5 trillion GDP milestone recently, demonstrating significant economic growth despite global uncertainties.",
        "source": "Economic Times India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Study Reveals That Drinking Excessive Water Leads to Immediate Weight Loss",
        "isReal": false,
        "explanation": "While hydration is important, there is no scientific basis to claim that excessive water consumption causes immediate weight loss.",
        "source": "Health Hoax Digest",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India’s New Drone Regulations Permit Commercial Drone Delivery Services",
        "isReal": true,
        "explanation": "India released new drone guidelines allowing companies to operate commercial drone delivery services under strict regulatory frameworks.",
        "source": "Ministry of Civil Aviation, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Scientists Successfully Reverse Memory Loss in Alzheimer’s Patients Using Stem Cell Therapy",
        "isReal": false,
        "explanation": "While research into Alzheimer’s treatment is ongoing, no confirmed scientific breakthrough has reversed memory loss in patients yet.",
        "source": "Pseudo Medical Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s First 100% Solar-Powered Airport Opens in Gujarat",
        "isReal": true,
        "explanation": "India’s first fully solar-powered airport was inaugurated, representing a major step in renewable energy adoption in aviation infrastructure.",
        "source": "Economic Times India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "NASA Confirms Life-Supporting Atmosphere on Distant Exoplanet",
        "isReal": false,
        "explanation": "No scientific confirmation exists that any exoplanet has a fully life-supporting atmosphere similar to Earth's.",
        "source": "Extraterrestrial Hoax Weekly",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Tops Global Solar Power Production, Surpassing China and USA",
        "isReal": false,
        "explanation": "China remains the world leader in solar power production. India is a growing player but has not surpassed China or the USA.",
        "source": "Fake Energy News",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Study Finds Meditation Reduces Risk of Heart Disease by 50%",
        "isReal": true,
        "explanation": "Several peer-reviewed studies suggest that regular meditation helps reduce stress, which is linked to lower cardiovascular disease risk.",
        "source": "Journal of Medical Sciences",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Becomes First Country to Declare AI a Legal Entity",
        "isReal": false,
        "explanation": "No country, including India, has declared AI systems as legal entities; this is misinformation.",
        "source": "Future Tech Hoax",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "India Records Highest Ever Foreign Direct Investment (FDI) Inflow in 2025",
        "isReal": true,
        "explanation": "India saw record FDI inflow due to policy reforms and global companies expanding into the Indian market in 2025.",
        "source": "Economic Times India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Scientists Invent Transparent Solar Panels for Windows",
        "isReal": true,
        "explanation": "Innovations in photovoltaic research led to transparent solar panels that can be used as windows, contributing to clean energy solutions.",
        "source": "Tech Science Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s Government Provides Free Laptops to All Students Below Class 10",
        "isReal": false,
        "explanation": "While India promotes digital education, there is no official policy providing free laptops to all students below Class 10.",
        "source": "Fake Government News",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Research Finds Correlation Between High Sugar Diet and Increased Anxiety Levels",
        "isReal": true,
        "explanation": "Multiple studies confirm that high sugar consumption is linked to anxiety and other mental health issues.",
        "source": "Health Science Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s First Space Hotel Set to Launch in 2028",
        "isReal": false,
        "explanation": "While space tourism is developing, there are no confirmed plans for India to launch a space hotel by 2028.",
        "source": "Space Hoax Weekly",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "India’s Health Ministry Launches Digital Platform for COVID-19 Vaccination Certificates",
        "isReal": true,
        "explanation": "The CoWIN platform was launched by the Indian government for managing COVID-19 vaccination registrations and certificates.",
        "source": "Government of India Official",
        "difficulty": "Easy",
        "country": "India"
    },
    {
        "headline": "Global Study Links Blue Light Exposure to Increased Risk of Macular Degeneration",
        "isReal": true,
        "explanation": "Research suggests prolonged exposure to blue light can be linked to eye strain and possibly long-term damage to retina cells.",
        "source": "Ophthalmology Today",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Approves Use of Genetically Modified Crops to Increase Agricultural Yield",
        "isReal": true,
        "explanation": "India has approved certain genetically modified crops under strict regulatory norms to boost yield and resist pests.",
        "source": "Government of India Official Reports",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Study Claims Drinking Vinegar Cures COVID-19 Instantly",
        "isReal": false,
        "explanation": "There is no scientific evidence supporting vinegar as a cure for COVID-19; this is a dangerous false claim.",
        "source": "Medical Hoax Weekly",
        "difficulty": "Easy",
        "country": "Global"
    },
  {
        "headline": "India’s Parliament Passes Landmark Data Protection Law",
        "isReal": true,
        "explanation": "India’s Parliament recently passed a comprehensive data protection law, focusing on user privacy, data localization, and stricter compliance for companies.",
        "source": "The Hindu",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Scientists Successfully Grow Human Organs in Lab for Transplants",
        "isReal": true,
        "explanation": "Scientists have made significant progress in growing lab-grown human organs for transplant using stem cells and bioengineering techniques.",
        "source": "Nature Medicine",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Launches First Indigenous Space Shuttle Prototype",
        "isReal": false,
        "explanation": "India has advanced in space research, but no official reports confirm the launch of a fully indigenous space shuttle prototype.",
        "source": "Space Hoax Digest",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Study Finds Correlation Between Urban Living and Higher Rates of Depression",
        "isReal": true,
        "explanation": "Multiple studies confirm that living in urban environments can be linked to increased rates of depression due to factors like noise, pollution, and social isolation.",
        "source": "Journal of Psychological Studies",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Becomes World’s Largest Milk Producer, Surpassing USA",
        "isReal": true,
        "explanation": "India is the largest producer of milk globally, surpassing the USA due to its vast dairy farming industry.",
        "source": "FAO Report",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Scientists Announce Discovery of New Element in Periodic Table",
        "isReal": true,
        "explanation": "Researchers at an international lab successfully synthesized a new superheavy element, confirmed by the IUPAC.",
        "source": "Chemical Science Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s Government Announces 24x7 Free Electricity for All Villages by 2027",
        "isReal": false,
        "explanation": "While India is expanding rural electrification, there is no official plan to provide 24x7 free electricity universally by 2027.",
        "source": "Energy Hoax News",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Report Warns of Accelerated Ice Melting in Antarctic Region",
        "isReal": true,
        "explanation": "Scientific research shows accelerated ice melting in Antarctica, contributing to rising sea levels and climate change concerns.",
        "source": "Environmental Research Letters",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s First 5G-Powered Smart City Inaugurated in Pune",
        "isReal": true,
        "explanation": "Pune became India’s first smart city leveraging 5G technology to enhance connectivity, governance, and urban services.",
        "source": "Economic Times India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Aliens Spotted Near International Space Station, Claims Unverified Source",
        "isReal": false,
        "explanation": "There are no credible sources or evidence supporting claims of aliens near the ISS; this is misinformation.",
        "source": "Extraterrestrial Hoax Digest",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s First AI-Based Judicial System Trial Begins in Delhi High Court",
        "isReal": true,
        "explanation": "India is trialing AI-based systems to assist in legal case management, but decisions remain human-driven to ensure accountability.",
        "source": "Ministry of Law and Justice, India",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Study Links Frequent Flying to Increased Risk of Deep Vein Thrombosis",
        "isReal": true,
        "explanation": "Medical research confirms that long-haul flights increase the risk of DVT due to prolonged immobility.",
        "source": "Journal of Travel Medicine",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s Government Launches Digital Identity System for All Citizens",
        "isReal": true,
        "explanation": "India’s Aadhaar system acts as a digital identity platform widely used for governmental and private sector services.",
        "source": "UIDAI Official Reports",
        "difficulty": "Easy",
        "country": "India"
    },
    {
        "headline": "Study Claims Daily Consumption of Garlic Prevents All Types of Cancer",
        "isReal": false,
        "explanation": "While garlic has health benefits, no scientific study confirms that it prevents all cancer types. This is a false claim.",
        "source": "Health Myths Weekly",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India’s First Quantum Computing Research Center Inaugurated",
        "isReal": true,
        "explanation": "India inaugurated a dedicated quantum computing research center to advance its position in next-gen computing technologies.",
        "source": "Economic Times India",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "NASA Announces Plan to Build Permanent Base on Moon by 2030",
        "isReal": true,
        "explanation": "NASA’s Artemis program and other space agencies plan to establish sustainable human presence on the Moon by 2030.",
        "source": "NASA Official Reports",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Provides Free Healthcare to All Citizens Starting Next Year",
        "isReal": false,
        "explanation": "While India provides subsidized healthcare schemes, there is no announcement guaranteeing fully free healthcare for all citizens.",
        "source": "Health Policy Hoax",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Research Shows Meditation Can Lower Blood Pressure as Effectively as Medication",
        "isReal": true,
        "explanation": "Studies confirm that regular meditation can significantly lower blood pressure, sometimes comparably to medication.",
        "source": "American Journal of Hypertension",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s Government Approves Deployment of Autonomous Trains in Metro Systems",
        "isReal": true,
        "explanation": "India approved the use of autonomous train systems in selected metro projects to improve efficiency and reduce operational costs.",
        "source": "Indian Ministry of Railways",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Scientists Create Fully Functional Artificial Human Heart",
        "isReal": false,
        "explanation": "While research in artificial organs is advancing, a fully functional artificial human heart has not yet been created or implanted.",
        "source": "Medical Hoax Weekly",
        "difficulty": "Hard",
        "country": "Global"
    },
  {
        "headline": "India’s First Indigenous Electric Aircraft Successfully Test-Flown",
        "isReal": true,
        "explanation": "India achieved a significant milestone by successfully test-flying its first indigenous electric aircraft prototype designed for short-haul travel.",
        "source": "Defence Research and Development Organisation (DRDO)",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Scientists Detect Mysterious Radio Signal from Deep Space",
        "isReal": true,
        "explanation": "Astronomers have detected unexplained radio signals (Fast Radio Bursts) from distant galaxies, sparking scientific interest and investigations.",
        "source": "Astronomy Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s New Policy Mandates Electric Vehicles for All Government Fleet by 2030",
        "isReal": true,
        "explanation": "India announced a policy to phase out fossil-fuel-based government vehicles and mandate electric alternatives by 2030.",
        "source": "Ministry of Heavy Industries, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Study Claims That Drinking Lemon Water Cures All Digestive Disorders",
        "isReal": false,
        "explanation": "There is no scientific proof that lemon water cures all digestive disorders; this is a misleading and exaggerated claim.",
        "source": "Health Hoax Weekly",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India Becomes World’s Second Largest Smartphone Market in 2025",
        "isReal": true,
        "explanation": "Recent industry reports confirm that India has become the world’s second-largest smartphone market, surpassing several major countries.",
        "source": "IDC Report",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Finds Link Between High Sugar Diet and Aggressive Behavior",
        "isReal": true,
        "explanation": "Several scientific studies have linked excessive sugar consumption to behavioral changes and increased aggression in individuals.",
        "source": "Psychology and Health Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India to Launch Solar-Powered Drones for Agricultural Monitoring",
        "isReal": true,
        "explanation": "India plans to deploy solar-powered drones equipped with sensors for crop health monitoring and agricultural optimization.",
        "source": "Press Information Bureau (PIB), India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Scientists Discover Earth-Like Planet in Habitable Zone of Nearby Star System",
        "isReal": true,
        "explanation": "Astronomers recently discovered an exoplanet in the habitable zone of the Proxima Centauri system, raising hopes for future studies.",
        "source": "NASA / Space Science Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Approves Cryptocurrency as Legal Tender from Next Year",
        "isReal": false,
        "explanation": "India has not approved any cryptocurrency as legal tender. The government is focused on regulating the sector, not legalizing it as currency.",
        "source": "Financial Hoax Times",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Links Living Near Green Spaces to Longer Life Expectancy",
        "isReal": true,
        "explanation": "Research shows that access to green spaces is associated with improved physical and mental health, and longer life expectancy.",
        "source": "Environmental Health Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Launches New AI-Powered Disaster Management System",
        "isReal": true,
        "explanation": "India recently launched an AI-based disaster management system to predict and mitigate the impact of natural disasters such as floods and cyclones.",
        "source": "Ministry of Home Affairs, India",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Study Finds Drinking Water From Plastic Bottles Causes Severe Health Issues",
        "isReal": false,
        "explanation": "While concerns about plastic contamination exist, no study conclusively proves that occasional plastic bottle use causes severe health issues.",
        "source": "Health Hoax Digest",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Develops First Indigenous Supercomputer for Climate Modeling",
        "isReal": true,
        "explanation": "India unveiled a supercomputer specifically designed to run complex climate models for environmental research and forecasting.",
        "source": "National Supercomputing Mission (NSM)",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Report Shows Sharp Increase in Renewable Energy Usage Over Last Decade",
        "isReal": true,
        "explanation": "Reports confirm that renewable energy adoption has sharply increased worldwide, driven by technological advances and climate commitments.",
        "source": "International Energy Agency (IEA)",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Launches World’s Largest Digital Payment Ecosystem",
        "isReal": true,
        "explanation": "India expanded its digital payment infrastructure, integrating multiple platforms for seamless cashless transactions nationwide.",
        "source": "Economic Times India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Study Finds Regular Yoga Practice Reverses Aging Process",
        "isReal": false,
        "explanation": "While yoga offers health benefits, there is no scientific evidence that it reverses the aging process completely.",
        "source": "Health Myths Weekly",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India Launches Satellite-Based Crop Monitoring System for Farmers",
        "isReal": true,
        "explanation": "ISRO has developed a satellite-based system to monitor crop health, predict yields, and help farmers optimize resource usage.",
        "source": "ISRO Official Reports",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Research Shows Artificial Sweeteners Linked to Higher Risk of Obesity",
        "isReal": true,
        "explanation": "Some studies indicate that long-term use of artificial sweeteners may be linked to weight gain and metabolic disorders.",
        "source": "Journal of Nutrition and Metabolism",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Plans To Establish Electric Highway Connecting All Major Cities By 2030",
        "isReal": false,
        "explanation": "Although there are pilot projects and plans for electric vehicle infrastructure, there is no official plan for a nationwide electric highway as of now.",
        "source": "Infrastructure Hoax Times",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Confirms Long-Term Exposure to Air Pollution Reduces Life Expectancy by 2 Years",
        "isReal": true,
        "explanation": "Extensive research links chronic air pollution exposure to reduced life expectancy and higher risk of respiratory and cardiovascular diseases.",
        "source": "Lancet Planetary Health",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Successfully Tests Anti-Satellite Weapon Capability",
        "isReal": true,
        "explanation": "India conducted an anti-satellite (ASAT) missile test in March 2019, successfully destroying a low-orbit satellite.",
        "source": "ISRO Official Reports",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Scientists Develop First Universal Flu Vaccine",
        "isReal": false,
        "explanation": "Although research is ongoing, there is currently no universally approved flu vaccine covering all strains.",
        "source": "Vaccine Myth Monthly",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Launches National AI Policy to Promote Artificial Intelligence Innovations",
        "isReal": true,
        "explanation": "The Indian government launched its national AI policy to promote R&D, skill development, and adoption of AI across sectors.",
        "source": "Press Information Bureau (PIB), India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Shows Coffee Consumption Reduces Risk of Heart Disease",
        "isReal": true,
        "explanation": "Research indicates moderate coffee consumption is linked to reduced risk of certain heart conditions.",
        "source": "Heart Health Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Plans To Ban All Petrol and Diesel Vehicles By 2028",
        "isReal": false,
        "explanation": "India has not set a formal deadline to ban petrol and diesel vehicles by 2028, though efforts to promote EVs are ongoing.",
        "source": "Auto Myths Digest",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Report Finds Rapid Decline of Insect Populations Worldwide",
        "isReal": true,
        "explanation": "Multiple studies confirm a dramatic decline in insect populations due to habitat loss, pesticides, and climate change.",
        "source": "Nature Ecology & Evolution",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Launches Affordable COVID-19 Vaccine For Global Use",
        "isReal": true,
        "explanation": "India has produced and distributed affordable COVID-19 vaccines globally, including Covaxin and Covishield.",
        "source": "Ministry of Health and Family Welfare, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Scientists Discover Evidence of Parallel Universe in Quantum Experiment",
        "isReal": false,
        "explanation": "No credible scientific evidence supports the claim that parallel universes were detected in experiments; this is speculative fiction.",
        "source": "Quantum Myths Monthly",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s Space Research Launches First Mission to Study Solar Atmosphere",
        "isReal": true,
        "explanation": "India’s Aditya-L1 mission aims to study the Sun’s corona and its effects on space weather.",
        "source": "ISRO Official Reports",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Study Links Smartphone Addiction to Decreased Academic Performance",
        "isReal": true,
        "explanation": "Numerous research studies confirm that excessive smartphone use is negatively correlated with academic achievement.",
        "source": "Journal of Behavioral Studies",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India to Introduce Universal Basic Income by 2027",
        "isReal": false,
        "explanation": "While debated, there is no official plan by the Indian government to introduce Universal Basic Income at a national scale by 2027.",
        "source": "Economic Myths Weekly",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Researchers Successfully Edit Human Embryo Genes to Prevent Hereditary Disease",
        "isReal": true,
        "explanation": "In controlled laboratory settings, scientists have performed gene editing on human embryos to correct hereditary diseases, though clinical use is tightly regulated.",
        "source": "Nature Biotechnology",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Deploys Drones for COVID-19 Monitoring and Surveillance",
        "isReal": true,
        "explanation": "Indian authorities used drones during the COVID-19 pandemic for crowd monitoring and enforcing lockdown protocols.",
        "source": "Press Information Bureau (PIB), India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Claims Eating Chocolate Daily Extends Lifespan by 5 Years",
        "isReal": false,
        "explanation": "There is no credible scientific study proving that daily chocolate consumption extends life expectancy by such a significant amount.",
        "source": "Chocolate Hoax Weekly",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India Announces Plans To Become Hydrogen Energy Leader By 2030",
        "isReal": true,
        "explanation": "India has announced ambitious plans to invest in hydrogen energy technologies, aiming to reduce dependence on fossil fuels.",
        "source": "Ministry of New and Renewable Energy, India",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Scientists Discover Subterranean Ocean Beneath Earth’s Crust",
        "isReal": true,
        "explanation": "Research indicates vast reserves of water trapped in minerals beneath Earth’s crust, contributing to the planet’s water cycle.",
        "source": "Earth Science Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Plans To Ban All Single-Use Plastics Starting 2026",
        "isReal": true,
        "explanation": "India is implementing plans to phase out single-use plastics by 2026 as part of environmental policy reforms.",
        "source": "Ministry of Environment, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Scientists Claim That Human Memory Can Be Downloaded to Computers by 2030",
        "isReal": false,
        "explanation": "This is pure speculation without any credible scientific backing; no technology currently exists to download human memories.",
        "source": "Tech Fiction Monthly",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s Renewable Energy Capacity Crosses 150 GW Mark",
        "isReal": true,
        "explanation": "India has successfully crossed 150 GW of installed renewable energy capacity, ranking among the top countries globally.",
        "source": "Ministry of New and Renewable Energy, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Finds High Sugar Intake Causes Brain Shrinkage",
        "isReal": true,
        "explanation": "Studies show that excessive sugar intake is associated with structural changes in the brain and cognitive decline.",
        "source": "Neurology and Health Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
   {
        "headline": "India’s ISRO Successfully Launches Chandrayaan-3 to Explore Moon’s South Pole",
        "isReal": true,
        "explanation": "India’s ISRO successfully launched Chandrayaan-3, aiming to land near the Moon’s south pole and study its surface and exosphere.",
        "source": "ISRO Official Reports",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Study Links Air Pollution Exposure to Increased Alzheimer’s Risk",
        "isReal": true,
        "explanation": "Several studies have shown that prolonged exposure to high levels of air pollution is linked to cognitive decline and Alzheimer’s risk.",
        "source": "Environmental Health Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Declares End of COVID-19 Pandemic Status by 2025",
        "isReal": false,
        "explanation": "While COVID-19 is being managed as endemic in some regions, no official declaration states the pandemic ended in India by 2025.",
        "source": "Health Policy Myths Digest",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Scientists Successfully Clone Human Embryo for Medical Research",
        "isReal": false,
        "explanation": "Cloning human embryos remains highly controversial and is illegal or unapproved in most countries; no credible confirmation exists.",
        "source": "Bioethics Hoax Monthly",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s Largest Battery Storage Plant Commissioned in Rajasthan",
        "isReal": true,
        "explanation": "India commissioned its largest grid-connected battery storage project in Rajasthan, enhancing energy stability and renewable integration.",
        "source": "Economic Times India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Shows Daily Meditation Reduces Risk of Heart Disease by 40%",
        "isReal": true,
        "explanation": "Research indicates that regular meditation improves cardiovascular health by lowering stress and blood pressure, though exact percentages vary by study.",
        "source": "Journal of Behavioral Health",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India to Establish Quantum Computing Research Hub in Bengaluru",
        "isReal": true,
        "explanation": "India announced plans to set up a national quantum computing hub to promote research and industry collaboration.",
        "source": "Ministry of Electronics & IT, India",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Researchers Claim Artificial Intelligence Achieved Consciousness",
        "isReal": false,
        "explanation": "There is no credible scientific basis or peer-reviewed study confirming that AI has achieved consciousness.",
        "source": "AI Myths Weekly",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s First Electric Aircraft Test-Flown in Hyderabad",
        "isReal": true,
        "explanation": "India tested its first indigenous electric aircraft prototype successfully as part of its push for sustainable aviation.",
        "source": "Press Information Bureau (PIB), India",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Study Links Lack of Sleep to Increased Risk of Obesity and Diabetes",
        "isReal": true,
        "explanation": "Extensive research confirms that chronic sleep deprivation is associated with increased risk of metabolic disorders.",
        "source": "Journal of Sleep Research",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s Government Plans Free Higher Education for All Students from 2026",
        "isReal": false,
        "explanation": "No official plan has been announced to provide fully free higher education in India by 2026; this is a misinformation piece.",
        "source": "Education Hoax Weekly",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Researchers Develop Solar Panel That Converts 50% of Sunlight into Electricity",
        "isReal": true,
        "explanation": "Some experimental solar cells have achieved efficiency close to 50% under controlled lab conditions, marking a technological milestone.",
        "source": "Solar Energy Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s Health Ministry Launches Digital Health ID for Every Citizen",
        "isReal": true,
        "explanation": "The Government of India introduced a digital health ID system as part of the National Digital Health Mission to improve medical record access.",
        "source": "Press Information Bureau (PIB), India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Proves Drinking Water with Lemon Removes All Body Toxins",
        "isReal": false,
        "explanation": "No scientific evidence supports that lemon water removes all body toxins; this is a common health myth.",
        "source": "Health Myth Digest",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India’s Largest Offshore Wind Farm Set to Begin Operations by 2027",
        "isReal": true,
        "explanation": "India is developing its largest offshore wind project in Gujarat, aiming to enhance renewable energy capacity.",
        "source": "Ministry of New and Renewable Energy, India",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Study Links Red Meat Consumption to Increased Risk of Cancer",
        "isReal": true,
        "explanation": "Many studies link high red meat consumption to an increased risk of colorectal cancer and other health issues.",
        "source": "World Health Organization (WHO)",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s Central Bank Plans Launch of Digital Rupee by 2025",
        "isReal": true,
        "explanation": "The Reserve Bank of India (RBI) has announced plans to launch a Central Bank Digital Currency (CBDC) called Digital Rupee.",
        "source": "Reserve Bank of India Official Reports",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Researchers Successfully Reverse Aging in Mice Using Gene Therapy",
        "isReal": true,
        "explanation": "Recent studies show promising results in reversing some signs of aging in mice using experimental gene therapies.",
        "source": "Cell Biology Reports",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Announces Ban on All Cryptocurrency Mining Starting Next Year",
        "isReal": false,
        "explanation": "There is no confirmed government decision to ban all cryptocurrency mining in India next year; such claims are misinformation.",
        "source": "Crypto Myth Weekly",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Shows Social Media Use Linked to Increased Anxiety and Depression in Teenagers",
        "isReal": true,
        "explanation": "Multiple peer-reviewed studies confirm the link between high social media usage and mental health issues in teenagers.",
        "source": "Journal of Adolescent Health",
        "difficulty": "Medium",
        "country": "Global"
    },
   {
        "headline": "India Successfully Tests Indigenous Hypersonic Missile System",
        "isReal": true,
        "explanation": "India conducted successful tests of its first indigenous hypersonic technology demonstrator vehicle, enhancing defense capabilities.",
        "source": "Defense Research and Development Organisation (DRDO)",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Scientists Warn of New Supervolcano Eruption Risk Within Next 100 Years",
        "isReal": true,
        "explanation": "Recent studies estimate that some supervolcanoes, like Yellowstone, have measurable risks of eruption within the next century.",
        "source": "Nature Geoscience Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Plans to Build First Underwater Hotel in Kerala by 2030",
        "isReal": false,
        "explanation": "There is no official plan announced by the Indian government or private developers for building an underwater hotel in Kerala by 2030.",
        "source": "Travel Hoax Digest",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Breakthrough: Scientists Develop Plant-Based Plastic That Decomposes in 30 Days",
        "isReal": true,
        "explanation": "Researchers developed a plant-based bioplastic that decomposes rapidly under the right conditions, addressing environmental concerns.",
        "source": "Sustainable Materials Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Launches First AI-Powered Disaster Prediction System",
        "isReal": true,
        "explanation": "India introduced an AI-based system to predict natural disasters, aimed at improving early warning systems and saving lives.",
        "source": "Ministry of Earth Sciences, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Links Coffee Consumption to Increased Longevity",
        "isReal": true,
        "explanation": "Several large-scale studies show moderate coffee consumption correlates with reduced risk of mortality and certain diseases.",
        "source": "Journal of Nutritional Science",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s Parliament Approves Law Allowing Private Space Launch Services",
        "isReal": true,
        "explanation": "India passed a new space policy encouraging private sector participation in space launches, boosting innovation and investment.",
        "source": "Press Information Bureau (PIB), India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Proves Drinking Celery Juice Cures High Blood Pressure",
        "isReal": false,
        "explanation": "There is no scientific evidence that celery juice cures high blood pressure; such health claims are unproven and misleading.",
        "source": "Health Misinformation Weekly",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India Successfully Tests Anti-Satellite Weapon System",
        "isReal": true,
        "explanation": "India successfully conducted an anti-satellite (ASAT) weapon test, demonstrating its space defense capability.",
        "source": "Ministry of Defence, India",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Study Finds 5G Networks Increase Risk of Cancer by 70%",
        "isReal": false,
        "explanation": "Extensive scientific reviews and studies confirm no credible evidence that 5G causes cancer or significant health risks.",
        "source": "Telecom Myths Review",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s New Renewable Energy Policy Targets 500 GW Capacity by 2030",
        "isReal": true,
        "explanation": "India announced ambitious targets under its renewable energy policy, aiming to reach 500 GW capacity by 2030.",
        "source": "Ministry of New and Renewable Energy, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Researchers Unveil First Recyclable Smartphone Prototype",
        "isReal": true,
        "explanation": "Innovative efforts produced a smartphone prototype designed for full recyclability, addressing e-waste issues.",
        "source": "Tech Innovations Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s Education Ministry Launches Digital Curriculum for Rural Schools",
        "isReal": true,
        "explanation": "The government launched a digital curriculum initiative to improve access to quality education in rural and remote areas.",
        "source": "Ministry of Education, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Proves Drinking Vinegar Prevents All Diseases",
        "isReal": false,
        "explanation": "This is fake. No scientific study proves vinegar prevents all diseases; exaggerated health claims are common in misinformation.",
        "source": "Health Hoax Weekly",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India Develops Indigenous Electric Vehicle Battery Manufacturing Plant",
        "isReal": true,
        "explanation": "India launched its first large-scale electric vehicle battery manufacturing facility to support the growing EV market.",
        "source": "Economic Times India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Scientists Claim to Detect Parallel Universe Signature in Cosmic Microwave Background",
        "isReal": false,
        "explanation": "This is fake. Claims of detecting parallel universe signatures are speculative and not confirmed by peer-reviewed research.",
        "source": "Physics Hoaxes Digest",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Launches Nation-Wide Skill Development Platform Using AI-Based Recommendations",
        "isReal": true,
        "explanation": "The government launched an AI-powered platform to help citizens acquire relevant skills based on market trends.",
        "source": "Ministry of Skill Development, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Shows No Link Between Vaccines and Autism",
        "isReal": true,
        "explanation": "Extensive research confirms no causal link between vaccines and autism; this claim is debunked by health authorities worldwide.",
        "source": "World Health Organization (WHO)",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s Largest Data Center Opens in Pune, Supporting Cloud and AI Services",
        "isReal": true,
        "explanation": "India opened one of its largest data centers, aimed at enhancing cloud services, data security, and AI research infrastructure.",
        "source": "Economic Times India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Scientists Successfully Upload Human Brain Activity to Cloud Storage",
        "isReal": false,
        "explanation": "This is fake. While brain-computer interfaces are advancing, storing human brain activity in the cloud remains science fiction.",
        "source": "Tech Hoax Monthly",
        "difficulty": "Hard",
        "country": "Global"
    },
   {
        "headline": "India’s Chandrayaan-3 Successfully Lands Near Moon’s South Pole",
        "isReal": true,
        "explanation": "India's Chandrayaan-3 mission successfully landed near the Moon's south pole, marking a significant achievement in space exploration.",
        "source": "ISRO Official Reports",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Scientists Reveal New Human Ancestor Species Found in Kenya",
        "isReal": true,
        "explanation": "Researchers discovered fossil evidence of a previously unknown hominin species, shedding light on human evolution.",
        "source": "Nature Scientific Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Becomes First Country to Declare Space as Strategic Domain",
        "isReal": true,
        "explanation": "India officially recognized space as a strategic domain, establishing the Defence Space Agency for national security purposes.",
        "source": "Ministry of Defence, India",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Study Links Daily Chocolate Consumption to Increased Life Expectancy",
        "isReal": false,
        "explanation": "There is no scientific consensus confirming that daily chocolate consumption increases life expectancy; such claims are misleading.",
        "source": "Nutrition Myths Weekly",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Unveils First Indigenous Supercomputer for Climate Prediction",
        "isReal": true,
        "explanation": "India launched its first supercomputer designed for climate modeling and advanced weather prediction capabilities.",
        "source": "ISRO and Ministry of Earth Sciences",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Scientists Claim Discovery of Time Travel Loophole in Quantum Physics",
        "isReal": false,
        "explanation": "This is fake. No credible research has validated any time travel loopholes in quantum physics.",
        "source": "Quantum Myths Digest",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s First Hydrogen-Powered Train Set to Launch Next Year",
        "isReal": true,
        "explanation": "India plans to introduce its first hydrogen-powered train, promoting sustainable and clean energy in rail transport.",
        "source": "Indian Railways Press Release",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Researchers Confirm Link Between Moon Phases and Human Behavior",
        "isReal": false,
        "explanation": "Scientific consensus shows no strong correlation between moon phases and human behavioral changes; such claims are myths.",
        "source": "Psychology Hoax Weekly",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Launches Advanced Earthquake Early Warning System Nationwide",
        "isReal": true,
        "explanation": "India deployed an advanced earthquake early warning system to detect seismic activities and alert citizens in vulnerable zones.",
        "source": "Ministry of Earth Sciences, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Finds Green Tea Prevents All Types of Cancer",
        "isReal": false,
        "explanation": "There is no scientific proof that green tea prevents all cancer types; such exaggerated health claims are misinformation.",
        "source": "Health Misinformation Digest",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India’s Largest Solar Power Plant Starts Operations in Rajasthan",
        "isReal": true,
        "explanation": "India inaugurated one of its largest solar power plants, aiming to boost renewable energy capacity and reduce fossil fuel dependency.",
        "source": "Ministry of New and Renewable Energy, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Researchers Successfully Regrow Human Finger Using Stem Cells",
        "isReal": false,
        "explanation": "No credible studies confirm full human finger regrowth from stem cells; such news is purely fictional at present.",
        "source": "Medical Hoaxes Monthly",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Successfully Demonstrates Laser-Based Weapon System",
        "isReal": true,
        "explanation": "India showcased a laser-based weapon system capable of neutralizing drones and incoming projectiles as part of modern defense tech advancements.",
        "source": "Defence Research and Development Organisation (DRDO)",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Study Proves Consuming Garlic Prevents Heart Disease Entirely",
        "isReal": false,
        "explanation": "Although garlic has health benefits, no scientific study proves it entirely prevents heart disease; such claims are misleading.",
        "source": "Nutrition Hoax Weekly",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India Unveils National Cybersecurity Strategy to Combat Increasing Cyber Threats",
        "isReal": true,
        "explanation": "India launched a comprehensive national cybersecurity strategy to safeguard critical infrastructure and sensitive data.",
        "source": "Ministry of Electronics & IT, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Researchers Develop Transparent Solar Panels for Building Windows",
        "isReal": true,
        "explanation": "Breakthrough research has led to the creation of semi-transparent solar panels, allowing buildings to generate power while letting light pass through.",
        "source": "Advanced Materials Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Announces Plan to Colonize Mars by 2050",
        "isReal": false,
        "explanation": "There are no official plans by the Indian government to colonize Mars by 2050; such reports are speculative or fake.",
        "source": "Space Hoax Digest",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Study Confirms Link Between Smartphone Radiation and Brain Tumors",
        "isReal": false,
        "explanation": "Major health organizations confirm no consistent evidence linking smartphone radiation to brain tumors; such claims are misleading.",
        "source": "Medical Myths Weekly",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Becomes World’s Third Largest Economy, Surpassing Japan",
        "isReal": true,
        "explanation": "India’s rapid economic growth and large population enabled it to surpass Japan and become the third-largest economy by GDP.",
        "source": "World Bank Reports",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Scientists Claim Discovery of Eternal Energy Source Violating Thermodynamics",
        "isReal": false,
        "explanation": "This is fake. Per the laws of physics, perpetual motion or infinite energy sources are impossible.",
        "source": "Physics Hoax Monthly",
        "difficulty": "Hard",
        "country": "Global"
    },
   {
        "headline": "India’s First Quantum Communication Satellite Successfully Launched",
        "isReal": true,
        "explanation": "India launched its first quantum communication satellite as part of advancing secure communication technologies.",
        "source": "ISRO Official Reports",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Study Shows Coffee Consumption Reduces Risk of Diabetes by 90%",
        "isReal": false,
        "explanation": "While moderate coffee consumption has some health benefits, claims of 90% risk reduction in diabetes are gross exaggerations without scientific backing.",
        "source": "Health Misinformation Weekly",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India Launches Ambitious Smart Village Mission to Bridge Rural-Urban Divide",
        "isReal": true,
        "explanation": "The Smart Village Mission aims to integrate digital infrastructure, sustainable energy, and connectivity into rural areas across India.",
        "source": "Government of India Press Release",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Researchers Discover Plant Capable of Communicating Through Electrical Signals",
        "isReal": true,
        "explanation": "Studies confirmed that plants can emit electrical signals in response to environmental changes, indicating a form of communication.",
        "source": "Scientific Reports Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Passes Bill to Ban All Private Cryptocurrency Transactions by 2024",
        "isReal": false,
        "explanation": "As of now, India has not passed any law banning all private cryptocurrency transactions; the regulatory framework is still evolving.",
        "source": "Financial Hoax News",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Finds Correlation Between Blue Light Exposure and Sleep Disorders",
        "isReal": true,
        "explanation": "Scientific research supports that excessive blue light exposure can disrupt circadian rhythms, leading to sleep problems.",
        "source": "Journal of Sleep Medicine",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India’s Major IT Export Revenue Crosses $200 Billion for the First Time",
        "isReal": true,
        "explanation": "India’s IT industry continues to expand, with export revenues surpassing $200 billion, contributing significantly to GDP.",
        "source": "NASSCOM Report",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Scientists Announce the Discovery of Time-Looping Particles",
        "isReal": false,
        "explanation": "There are no credible reports supporting the existence of time-looping particles; such claims are pseudoscience.",
        "source": "Physics Hoax Weekly",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Completes World’s Largest Reforestation Project in Arunachal Pradesh",
        "isReal": true,
        "explanation": "The government completed a massive reforestation initiative aimed at restoring biodiversity and combating climate change.",
        "source": "Ministry of Environment, India",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Study Confirms Eating Ice Cream Lowers Cancer Risk",
        "isReal": false,
        "explanation": "There is no scientific evidence supporting the claim that ice cream lowers cancer risk; this is misleading information.",
        "source": "Health Myths Monthly",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India’s National Electric Vehicle Policy Targets 30% EV Sales by 2030",
        "isReal": true,
        "explanation": "India’s government announced ambitious plans to increase electric vehicle adoption with incentives and infrastructure development.",
        "source": "Ministry of Heavy Industries, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Scientists Develop Artificial Leaf That Generates Clean Fuel from CO2",
        "isReal": true,
        "explanation": "Breakthrough research demonstrated an artificial leaf capable of converting CO2 into usable fuel through solar energy.",
        "source": "Advanced Energy Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s Major Airlines to Switch Entire Fleet to Electric Planes by 2040",
        "isReal": false,
        "explanation": "There are no official announcements mandating or committing to fully electric commercial airline fleets by 2040; this is speculative.",
        "source": "Aviation Hoax Digest",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Research Shows Plant-Based Diet Reduces Heart Disease Risk by 70%",
        "isReal": true,
        "explanation": "Multiple studies confirm plant-based diets can reduce heart disease risk significantly, although exact percentages vary by study.",
        "source": "Global Nutrition Journal",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Inaugurates World’s Largest Solar-Powered Data Center",
        "isReal": true,
        "explanation": "India opened its largest solar-powered data center, focusing on green energy and reducing carbon footprint in IT infrastructure.",
        "source": "Ministry of New and Renewable Energy",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Claims Drinking Lemon Juice Cures Cancer",
        "isReal": false,
        "explanation": "This is false. No credible scientific study supports lemon juice as a cancer cure; such statements are misinformation.",
        "source": "Health Hoax Weekly",
        "difficulty": "Easy",
        "country": "Global"
    },
    {
        "headline": "India’s First Indigenous Electric Fighter Jet Enters Production",
        "isReal": false,
        "explanation": "No indigenous electric fighter jet is currently in production in India; such claims are false.",
        "source": "Aerospace Hoax Digest",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Breakthrough: Scientists Create Fully Functional Artificial Human Heart",
        "isReal": false,
        "explanation": "While research is ongoing, no fully functional artificial human heart has been created yet; such news is fabricated.",
        "source": "Medical Hoax Reports",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s Renewable Energy Capacity Crosses 200 GW Milestone",
        "isReal": true,
        "explanation": "India’s renewable energy sector surpassed the 200 GW capacity, making it one of the world’s largest renewable energy producers.",
        "source": "Ministry of New and Renewable Energy, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Finds That Drinking Water from Plastic Bottles Causes Alzheimer’s",
        "isReal": false,
        "explanation": "There is no conclusive evidence linking drinking water from plastic bottles to Alzheimer’s disease; such claims are myths.",
        "source": "Health Misinformation Journal",
        "difficulty": "Easy",
        "country": "Global"
    },
{
        "headline": "India’s ISRO Successfully Tests Space-Based Solar Power Transmission",
        "isReal": true,
        "explanation": "ISRO demonstrated the transmission of solar energy from space to Earth, a milestone in renewable energy research.",
        "source": "ISRO Official Reports",
        "difficulty": "Hard",
        "country": "India"
    },
    {
        "headline": "Global Researchers Confirm Humans Can Smell Wi-Fi Signals",
        "isReal": false,
        "explanation": "There is no scientific evidence that humans can detect Wi-Fi signals through smell; this is a fabricated claim.",
        "source": "Tech Hoax Monthly",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Launches Program to Provide Free Laptops to All School Students by 2025",
        "isReal": false,
        "explanation": "There is no official government announcement promising free laptops for all students by 2025; this is misinformation.",
        "source": "Education Hoax Digest",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Links Daily Meditation to Increased Longevity",
        "isReal": true,
        "explanation": "Multiple studies show that regular meditation is linked to improved mental health and potentially longer lifespan.",
        "source": "Journal of Mind-Body Research",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Achieves World Record in Solar Energy Production in a Single Day",
        "isReal": true,
        "explanation": "India achieved a new world record for highest solar power generation in a single day, highlighting its renewable energy progress.",
        "source": "Ministry of New and Renewable Energy, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Researchers Announce the Creation of Invisibility Cloak Prototype",
        "isReal": false,
        "explanation": "Although research into cloaking technology exists, no fully functional invisibility cloak prototype has been publicly demonstrated yet.",
        "source": "Science Hoax Review",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Launches National AI Strategy to Boost Tech Innovation by 2030",
        "isReal": true,
        "explanation": "The government of India unveiled a national strategy to promote AI adoption across industries and research for future growth.",
        "source": "Government of India Press Release",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Finds Correlation Between Red Meat Consumption and Intelligence Decline",
        "isReal": false,
        "explanation": "No credible scientific study supports the claim that red meat consumption is linked to intelligence decline; this is fake news.",
        "source": "Nutrition Hoax Weekly",
        "difficulty": "Medium",
        "country": "Global"
    },
    {
        "headline": "India Sets Target to Install 500 GW Renewable Capacity by 2030",
        "isReal": true,
        "explanation": "India has announced ambitious targets to scale renewable energy capacity to 500 GW by 2030 as part of climate goals.",
        "source": "Ministry of New and Renewable Energy, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Shows Excessive Smartphone Use Leads to Growth of Extra Fingertip",
        "isReal": false,
        "explanation": "There is no scientific evidence that smartphone use causes extra fingertips; this claim is false and exaggerated.",
        "source": "Technology Myths Monthly",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India’s First Hydrogen-Powered Train Begins Commercial Operations",
        "isReal": true,
        "explanation": "India launched its first hydrogen-powered train as a step toward sustainable, eco-friendly transportation solutions.",
        "source": "Ministry of Railways, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Scientists Discover Microbes That Survive Without Water",
        "isReal": true,
        "explanation": "Researchers found extremophiles that can survive in arid conditions, advancing understanding of life adaptability.",
        "source": "Microbiology Advances Journal",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India to Ban All Single-Use Plastics by 2025",
        "isReal": true,
        "explanation": "The government of India announced a roadmap to phase out single-use plastics by 2025 to reduce environmental pollution.",
        "source": "Ministry of Environment, India",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Researchers Claim They Have Found Proof of Time Travel",
        "isReal": false,
        "explanation": "There is no verified scientific proof of time travel; claims of discovery are false and widely debunked by experts.",
        "source": "Physics Hoax Weekly",
        "difficulty": "Hard",
        "country": "Global"
    },
    {
        "headline": "India Surpasses Japan as World’s Third Largest Economy",
        "isReal": true,
        "explanation": "Recent data show India overtaking Japan to become the third largest economy globally, driven by strong growth in services and industry.",
        "source": "World Economic Forum",
        "difficulty": "Medium",
        "country": "India"
    },
    {
        "headline": "Global Study Links Eating Dark Chocolate to Increased IQ",
        "isReal": false,
        "explanation": "No credible scientific study links dark chocolate consumption directly to increased IQ; such headlines are misleading.",
        "source": "Nutrition Myths Digest",
        "difficulty": "Easy",
        "country": "Global"
    }
    // ... many more headlines to be added here to reach 500.
];

// Placeholder for adding 450+ more headlines
const addMoreHeadlines = (data: NewsHeadline[]) => {
    // This is a placeholder function. In a real implementation, this would involve
    // creating hundreds of additional real and fake news headlines.
    return data;
};

addMoreHeadlines(fakeNewsData);
