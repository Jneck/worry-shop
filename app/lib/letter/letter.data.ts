"use server";

import { createClient } from "@/utils/supabase/server";
import { Tables } from "@/database.types";

export async function getLetters(): Promise<Tables<'letter'>[]> {
  const supabase = await createClient("service");
  const lettersResponse = await supabase
    .from("letter")
    .select("*")
    .order("createdAt", { ascending: false })
    .range(0, 10);

  if (lettersResponse.error !== null) {
    console.error(lettersResponse.error);
  }
  if (lettersResponse.data === null) {
    return [];
  }
  return lettersResponse.data;
}

export async function getLetter(id: number): Promise<Tables<'letter'>> {
  const supabase = await createClient("service");
  const lettersResponse = await supabase
    .from("letter")
    .select()
    .order("createdAt", { ascending: false })
    .range(0, 1);

  if (lettersResponse.error !== null) {
    console.error(lettersResponse.error);
  }
  if (!lettersResponse.data || lettersResponse.data.length === 0) {
    throw new Error('no data');
  }
  return lettersResponse.data[0];
}
