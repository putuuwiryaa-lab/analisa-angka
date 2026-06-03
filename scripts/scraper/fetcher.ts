export async function fetchSourceHtml(url: string) {
  const userAgent = process.env.SCRAPER_USER_AGENT || "AnalisaAngkaBot/1.0";
  const response = await fetch(url, {
    headers: {
      "user-agent": userAgent,
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Fetch failed ${response.status} ${response.statusText} for ${url}`);
  }

  return response.text();
}
