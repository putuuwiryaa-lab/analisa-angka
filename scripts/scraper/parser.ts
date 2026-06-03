import { normalizeFourDigitResult } from "./normalize";

export type ParsedResult = {
  sourceId: string;
  result: string;
  rawText: string;
};

export function parseFourDigitFromHtml(sourceId: string, html: string): ParsedResult | null {
  const result = normalizeFourDigitResult(html);
  if (!result) return null;

  return {
    sourceId,
    result,
    rawText: html.slice(0, 2000),
  };
}
