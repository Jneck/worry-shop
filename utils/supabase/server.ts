import { Database } from "@/database.types";

export async function createClient(type: "anon" | "service") {
  const { createClient } = await import("@supabase/supabase-js");

  const key =
    type === "anon"
      ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      : process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (process.env.SUPABASE_URL && key) {
    const supabase = createClient<Database>(process.env.SUPABASE_URL, key);
    return supabase;
  }

  throw new Error("No Supabase credentials found");
}
