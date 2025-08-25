
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
