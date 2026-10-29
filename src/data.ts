export type Title = {
  id: string;
  name: string;
  year: number;
  rating: string;
  duration: string;
  genres: string[];
  imdb: number;
  desc: string;
  poster: string;
  backdrop: string;
  included: boolean;
  seasons?: number;
};

const B = [
  "https://images.pexels.com/photos/23384428/pexels-photo-23384428.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
  "https://images.pexels.com/photos/3379932/pexels-photo-3379932.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
  "https://images.pexels.com/photos/13812463/pexels-photo-13812463.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
  "https://images.pexels.com/photos/30057593/pexels-photo-30057593.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
  "https://images.pexels.com/photos/8263360/pexels-photo-8263360.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
  "https://images.pexels.com/photos/21336126/pexels-photo-21336126.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
  "https://images.pexels.com/photos/39587241/pexels-photo-39587241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
  "https://images.pexels.com/photos/39541017/pexels-photo-39541017.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
  "https://images.pexels.com/photos/8271461/pexels-photo-8271461.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
  "https://images.pexels.com/photos/13448629/pexels-photo-13448629.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
];

const P = [
  "https://images.pexels.com/photos/35219288/pexels-photo-35219288.png?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
  "https://images.pexels.com/photos/29263907/pexels-photo-29263907.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
  "https://images.pexels.com/photos/36390527/pexels-photo-36390527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
  "https://images.pexels.com/photos/10118506/pexels-photo-10118506.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
  "https://images.pexels.com/photos/33219739/pexels-photo-33219739.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
  "https://images.pexels.com/photos/4272685/pexels-photo-4272685.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
  "https://images.pexels.com/photos/30340885/pexels-photo-30340885.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
  "https://images.pexels.com/photos/7991307/pexels-photo-7991307.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
  "https://images.pexels.com/photos/8656991/pexels-photo-8656991.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
  "https://images.pexels.com/photos/36100733/pexels-photo-36100733.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600",
];

const raw: [string, number, string, string[], number, string, boolean, number?][] = [
  ["The Hollow Crown", 2025, "16+", ["Drama", "Thriller"], 8.4, "A disgraced detective returns to the city that destroyed him, chasing a case everyone else buried.", true, 2],
  ["Neon Harbour", 2024, "18+", ["Crime", "Action"], 7.9, "Two rival smugglers are forced into an uneasy alliance when the port's power structure collapses overnight.", true],
  ["Last Light Over Oslo", 2023, "13+", ["Drama"], 7.2, "A violinist loses her hearing weeks before the performance of her life.", true],
  ["Dust & Signal", 2025, "16+", ["Sci-Fi", "Mystery"], 8.8, "A radio engineer in the Nevada desert picks up a transmission that hasn't been sent yet.", false, 1],
  ["Ironwake", 2022, "18+", ["Action"], 7.0, "An ex-marine hunts the syndicate that framed her, one safehouse at a time.", true],
  ["The Quiet Hour", 2024, "16+", ["Horror"], 6.8, "A village agrees never to speak between dusk and dawn. One night, someone does.", true],
  ["Paper Kingdoms", 2023, "13+", ["Comedy", "Drama"], 7.6, "Three siblings inherit a failing newspaper and absolutely no talent for journalism.", false, 3],
  ["Verdict", 2025, "16+", ["Legal", "Drama"], 8.1, "A defence lawyer realises her client is innocent of this crime — and guilty of a worse one.", true, 2],
  ["Saltwater Boys", 2021, "13+", ["Drama", "Sport"], 7.4, "A coastal swim team trains for nationals while their town slowly washes away.", true],
  ["Midnight Frequency", 2024, "16+", ["Thriller"], 8.0, "A late-night radio host's caller describes a murder that hasn't happened yet.", false],
  ["Glass Mountain", 2022, "13+", ["Adventure"], 7.1, "Five climbers. One summit nobody has returned from.", true],
  ["Ash Republic", 2025, "18+", ["Political", "Drama"], 8.6, "In a nation rebuilt from ruins, the architect of peace becomes its biggest threat.", true, 1],
  ["Soft Static", 2023, "16+", ["Romance", "Drama"], 7.3, "Two strangers keep meeting in the same power cut.", true],
  ["Bone Orchard", 2024, "18+", ["Horror", "Mystery"], 7.8, "An orchard grows beautifully over ground that should be barren.", false],
  ["Downshift", 2021, "13+", ["Action", "Sport"], 6.9, "A street racer trades the night circuit for a legitimate team, and hates every second.", true],
  ["The Longest Winter", 2025, "16+", ["Drama", "History"], 8.3, "A frontier settlement survives on one impossible promise.", true, 4],
  ["Cold Open", 2023, "16+", ["Comedy"], 7.5, "Backstage at a sketch show that is thirty seconds from being cancelled.", true],
  ["Gravewater", 2024, "18+", ["Thriller", "Crime"], 7.7, "A diver recovering sunken cars finds one that was never reported missing.", false],
];

export const titles: Title[] = raw.map(([name, year, rating, genres, imdb, desc, included, seasons], i) => ({
  id: "t" + i,
  name,
  year,
  rating,
  genres,
  imdb,
  desc,
  included,
  seasons,
  duration: seasons ? `${seasons} season${seasons > 1 ? "s" : ""}` : `${95 + ((i * 13) % 55)} min`,
  poster: P[i % P.length],
  backdrop: B[i % B.length],
}));

export const rows: { title: string; ids: string[] }[] = [
  { title: "Top picks for you", ids: [0, 3, 7, 11, 15, 9, 13, 2].map((i) => "t" + i) },
  { title: "Prime Originals", ids: [11, 0, 7, 15, 5, 16, 1, 12].map((i) => "t" + i) },
  { title: "Trending now", ids: [9, 13, 17, 4, 6, 10, 14, 8].map((i) => "t" + i) },
  { title: "Included with Prime", ids: titles.filter((t) => t.included).map((t) => t.id) },
  { title: "Award-winning drama", ids: [2, 8, 12, 15, 0, 7, 11, 16].map((i) => "t" + i) },
];

export const hero = ["t0", "t11", "t3", "t7"];
