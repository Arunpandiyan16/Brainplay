
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
