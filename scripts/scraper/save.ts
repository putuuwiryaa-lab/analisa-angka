import type { ParsedResult } from "./parser";

export async function saveScrapedResult(parsed: ParsedResult) {
  // Database write intentionally delayed until legacy schema is verified.
  return {
    sourceId: parsed.sourceId,
    result: parsed.result,
    saved: false,
  };
}
