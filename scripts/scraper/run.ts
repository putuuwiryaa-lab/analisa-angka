import { fetchSourceHtml } from "./fetcher";
import { parseFourDigitFromHtml } from "./parser";
import { saveScrapedResult } from "./save";
import { SCRAPER_SOURCES } from "./sources";

async function main() {
  const enabledSources = SCRAPER_SOURCES.filter((source) => source.enabled);

  console.log(`Scraper started. Sources: ${enabledSources.length}`);

  for (const source of enabledSources) {
    try {
      const html = await fetchSourceHtml(source.url);
      const parsed = parseFourDigitFromHtml(source.id, html);

      if (!parsed) {
        console.warn(`[${source.id}] No valid 4D result found`);
        continue;
      }

      const saved = await saveScrapedResult(parsed);
      console.log(`[${source.id}] ${parsed.result}`, saved);
    } catch (error) {
      console.error(`[${source.id}] scrape failed`, error);
    }
  }

  console.log("Scraper finished.");
}

main().catch((error) => {
  console.error("Scraper crashed", error);
  process.exitCode = 1;
});
