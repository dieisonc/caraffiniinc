import { supabase } from './supabase'
export const onAuthStateChange = (cb)=> supabase.auth.onAuthStateChange(cb)
export const signInWithEmail = async (email,password)=>{ const {data,error}=await supabase.auth.signInWithPassword({email,password}); if(error) alert(error.message); return data }
export const signUpWithEmail = async (email,password)=>{ const {data,error}=await supabase.auth.signUp({email,password}); if(error) alert(error.message); return data }
export const signOut = async()=> supabase.auth.signOut()
export const signInWithGoogle = async()=>{ const {data,error}=await supabase.auth.signInWithOAuth({provider:'google'}); if(error) alert(error.message); return data }