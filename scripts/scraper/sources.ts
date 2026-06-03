export type ScraperSource = {
  id: string;
  name: string;
  url: string;
  enabled: boolean;
};

export const SCRAPER_SOURCES: ScraperSource[] = [
  // Isi source lama di sini setelah parser lama dicek.
  // Contoh:
  // { id: "market-id", name: "Market Name", url: "https://example.com", enabled: true },
];
