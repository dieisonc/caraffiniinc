import { createClient } from '@supabase/supabase-js'
const url = import.meta.env.VITE_SUPABASE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY
export const supabase = createClient(url, anon)
export async function signIn({ email, password }) { const { data, error } = await supabase.auth.signInWithPassword({ email, password }); if (error) throw error; return data }
export async function signUp({ email, password }) { const { data, error } = await supabase.auth.signUp({ email, password }); if (error) throw error; return data }
export async function signOut() { await supabase.auth.signOut() }
