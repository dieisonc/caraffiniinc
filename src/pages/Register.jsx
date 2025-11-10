import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signUp } from '../lib/supabase'
export default function Register(){ const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [err,setErr]=useState(''); const [ok,setOk]=useState(false);
  return (<div className='min-h-screen grid md:grid-cols-2'>
    <div className='hidden md:block bg-gradient-to-br from-fuchsia-600 via-violet-600 to-rose-500 text-white p-12'><div className='max-w-md'><h1 className='text-4xl font-extrabold leading-tight'>Crie sua conta</h1><p className='mt-4 text-white/90'>Sua conta ficará pendente até aprovação da indústria.</p></div></div>
    <div className='flex items-center justify-center p-8'>
      <form onSubmit={async(e)=>{e.preventDefault(); setErr(''); try{ await signUp({email,password}); setOk(true)}catch(e){ setErr(e.message)} }} className='w-full max-w-sm'>
        <h2 className='text-2xl font-semibold mb-6'>Criar conta</h2>
        {ok ? <div className='text-green-700 bg-green-50 border border-green-200 rounded-xl p-3'>Conta criada! Verifique seu e-mail e aguarde aprovação.</div> : <>
          {err && <div className='mb-3 text-sm text-red-600'>{err}</div>}
          <label className='block text-sm text-slate-600'>E-mail</label>
          <input className='w-full mt-1 mb-3 rounded-xl border border-slate-300 px-3 py-2' value={email} onChange={e=>setEmail(e.target.value)} />
          <label className='block text-sm text-slate-600'>Senha</label>
          <input type='password' className='w-full mt-1 mb-6 rounded-xl border border-slate-300 px-3 py-2' value={password} onChange={e=>setPassword(e.target.value)} />
          <button className='btn btn-primary w-full'>Criar minha conta</button>
          <Link to='/login' className='block text-center mt-4 text-slate-600 hover:underline'>Voltar para login</Link>
        </>}
      </form>
    </div>
  </div>) }