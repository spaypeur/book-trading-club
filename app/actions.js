'use server';
import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function updateProfile(formData) {
  const full_name = formData.get('full_name');
  const city = formData.get('city');
  const state = formData.get('state');

  const { data, error } = await supabase
    .from('profiles')
    .upsert({ full_name, city, state }, { onConflict: 'id' });

  if (error) {
    console.error("Profile update error:", error);
    return { error: error.message };
  }

  revalidatePath('/profile');
  return { success: true };
}

export async function addBook(formData) {
  const title = formData.get('title');
  const author = formData.get('author');

  const { data, error } = await supabase
    .from('books')
    .insert([{ title, author }]);

  if (error) {
    console.error("Add book error:", error);
    return { error: error.message };
  }

  revalidatePath('/');
  revalidatePath('/my-books');
  return { success: true };
}
