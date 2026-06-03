import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export type LegacyMarket = {
  id: string;
  name?: string | null;
  history_data?: string | null;
  updated_at?: string | null;
};

export async function getLegacyMarkets() {
  const supabase = createBrowserSupabaseClient();
  const { data, error } = await supabase
    .from("markets")
    .select("id,name,history_data,updated_at")
    .order("id", { ascending: true });

  if (error) throw error;
  return (data || []) as LegacyMarket[];
}
