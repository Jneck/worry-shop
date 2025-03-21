'use server'

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function insertLetter(content: string) {
  const supabase = await createClient('service');
  try {
    await supabase
    .from('letter')
    .insert([{ status: 'pending', content: content }])} catch(e) {
      console.error(e);
    }
  
  revalidatePath('/');
  redirect('/');
}

export async function replyLetter(id: number,reply:string) {
  const supabase = await createClient('service');
  try {
    await supabase
    .from('letter')
    .update({ status: 'replied', reply:reply})
    .eq('id', id)
  } catch(e) {
    console.error(e)
  }
  revalidatePath('/');
  revalidatePath(`/post/${id}`);
  redirect(`/post/${id}`);
}