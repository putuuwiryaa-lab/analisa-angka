import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export type EvaluationMode = "ai" | "ai_parity" | "ai_size" | "bbfs" | "mati" | "jumlah" | "shio";

export type LegacyEvaluationRow = {
  id: string;
  market_id: string;
  mode: EvaluationMode;
  param: number;
  from_result?: string | null;
  new_result?: string | null;
  is_hit?: boolean | null;
  status?: string | null;
  detail?: unknown;
  evaluated_at?: string | null;
  position?: string | null;
  target_pair?: string | null;
  analysis_scope?: string | null;
};

export async function getLegacyEvaluationHistory(params: {
  marketId: string;
  mode: EvaluationMode;
  param: number;
  limit?: number;
}) {
  const supabase = createBrowserSupabaseClient();
  const { data, error } = await supabase
    .from("analysis_evaluations")
    .select("id,market_id,mode,param,from_result,new_result,is_hit,status,detail,evaluated_at,position,target_pair,analysis_scope")
    .eq("market_id", params.marketId)
    .eq("mode", params.mode)
    .eq("param", params.param)
    .order("evaluated_at", { ascending: false })
    .limit(params.limit ?? 15);

  if (error) throw error;
  return (data || []) as LegacyEvaluationRow[];
}
