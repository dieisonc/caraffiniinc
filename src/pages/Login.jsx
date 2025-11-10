import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signIn } from '../lib/supabase'
export default function Login(){ const navigate=useNavigate(); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [err,setErr]=useState(''); const [loading,setLoading]=useState(false);
  return (<div className='min-h-screen grid md:grid-cols-2'>
    <div className='hidden md:block bg-gradient-to-br from-fuchsia-600 via-violet-600 to-rose-500 text-white p-12'>
      <div className='max-w-md'><h1 className='text-4xl font-extrabold leading-tight'>Entre para gerenciar<br/>seus pedidos e negócios</h1><p className='mt-4 text-white/90'>CRM + Produção com estoques e pedidos integrados.</p></div>
    </div>
    <div className='flex items-center justify-center p-8'>
      <form onSubmit={async(e)=>{e.preventDefault(); setErr(''); setLoading(true); try{ await signIn({email,password}); navigate('/')}catch(e){ setErr(e.message)} finally{ setLoading(false)} }} className='w-full max-w-sm'>
        <h2 className='text-2xl font-semibold mb-6'>Login</h2>
        {err && <div className='mb-3 text-sm text-red-600'>{err}</div>}
        <label className='block text-sm text-slate-600'>E-mail</label>
        <input className='w-full mt-1 mb-3 rounded-xl border border-slate-300 px-3 py-2' value={email} onChange={e=>setEmail(e.target.value)} placeholder='email@dominio.com' />
        <label className='block text-sm text-slate-600'>Senha</label>
        <input type='password' className='w-full mt-1 mb-6 rounded-xl border border-slate-300 px-3 py-2' value={password} onChange={e=>setPassword(e.target.value)} placeholder='••••••••' />
        <button className='btn btn-primary w-full' disabled={loading}>{loading?'Entrando...':'Acessar'}</button>
        <Link to='/register' className='block text-center mt-4 text-slate-600 hover:underline'>Criar minha conta</Link>
      </form>
    </div>
  </div>) }