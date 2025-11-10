import { create } from 'zustand'
import { supabase } from '../lib/supabase'
export const useAuth = create((set) => ({
  user: null, loading: true, setUser: (user) => set({ user }),
  init: async () => { const { data: { session } } = await supabase.auth.getSession(); set({ user: session?.user ?? null, loading: false }); supabase.auth.onAuthStateChange((_e, s) => set({ user: s?.user ?? null })) }
}))