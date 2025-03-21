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
  const post = await supabase
    .from("letter")
    .select()
    .match({id})
    .single();

  if (post.error !== null) {
    console.error(post.error);
  }
  if (!post.data) {
    throw new Error('no data');
  }
  return post.data;
}
