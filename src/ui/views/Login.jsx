import React,{useState} from 'react'
import { signInWithEmail, signInWithGoogle, signUpWithEmail } from '../../utils/auth'
export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('')
  return (<div className='login-wrap'><div className='card login-card'>
    <div className='logo'><img src='/assets/logo.png' width='56'/> Caraffini</div>
    <h2>Entrar</h2>
    <div style={{display:'grid',gap:8}}>
      <input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
      <input placeholder='Senha' type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
      <button onClick={async()=>{await signInWithEmail(email,password)}} style={{background:'var(--brand)',color:'#fff',padding:'10px 12px',borderRadius:10,border:0}}>Entrar</button>
      <button onClick={async()=>{await signUpWithEmail(email,password)}} style={{padding:'10px 12px',borderRadius:10}}>Criar conta</button>
      <button onClick={async()=>{await signInWithGoogle()}} style={{padding:'10px 12px',borderRadius:10}}>Entrar com Google</button>
    </div>
  </div></div>)
}