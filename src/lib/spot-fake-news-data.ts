
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
    // Global - Fake
    {
        headline: "Study Finds Chocolate Cures All Diseases",
        isReal: false,
        explanation: "This is fake. While dark chocolate has health benefits, it's not a cure-all. This headline is an exaggeration typical of fake health news.",
        source: "HealthBeat Journal",
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
    // India - Fake
    {
        headline: "Taj Mahal to be Painted Blue for a Month",
        isReal: false,
        explanation: "This is fake. The Taj Mahal is a protected UNESCO World Heritage site and there are no plans to change its iconic white marble color.",
        source: "Heritage Weekly",
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
    // Global - Fake
    {
        headline: "Linguistic Experts Announce Dolphins Have Developed a Written Language Using Sand Patterns",
        isReal: false,
        explanation: "This is fake. While dolphins are highly intelligent and use complex vocalizations, there is no scientific evidence of them using a written language.",
        source: "Marine Linguistics Digest",
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
    // India - Fake
    {
        headline: "Indian Government Approves Plan to Build a High-Speed Rail Network Suspended by Magnetic Fields Over Rivers",
        isReal: false,
        explanation: "This is fake. While India is developing high-speed rail, the technology described (river-based magnetic levitation) is not part of any current, approved project.",
        source: "Future Infra Weekly",
        difficulty: 'Hard',
        country: 'India'
    }
];
