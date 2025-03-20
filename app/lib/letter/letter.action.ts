'use server'

import { createClient } from '@/utils/supabase/server';

export async function insertLetter(content: string) {
  const supabase = await createClient('service');
  const { data, error } = await supabase
    .from('letter')
    .insert([{ status: 'pending', content: content }])
    .select();
  if (error) {
    console.error(error);
    return null;
  }
  return data[0];
}

export async function replyLetter(id: number,reply:string) {
  const supabase = await createClient('service');
  const { data, error } = await supabase
    .from('letter')
    .update({ status: 'replied', reply:reply})
    .eq('id', id)
    .select();
  if (error) {
    console.error(error);
    return null;
  }
  return data[0];
}