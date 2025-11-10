import React,{useEffect,useState} from 'react'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import { onAuthStateChange, signOut } from '../utils/auth'
import Dashboard from './views/Dashboard'
import Orders from './views/Orders'
import Inventory from './views/Inventory'
import Stores from './views/Stores'
import Login from './views/Login'

export default function App(){
  const [session, setSession] = useState(null)
  const navigate = useNavigate()
  useEffect(()=>{
    const { data: sub } = onAuthStateChange((event, s)=>{ setSession(s); if(!s) navigate('/login') })
    return ()=> sub?.subscription?.unsubscribe?.()
  },[])
  if(!session){
    return (<Routes><Route path='/login' element={<Login/>} /><Route path='*' element={<Login/>}/></Routes>)
  }
  const role = session.user?.app_metadata?.role || 'lojista'
  return (<div>
    <aside className='sidebar'>
      <div className='logo'><img src='/assets/logo.png' width='28'/> Caraffini</div>
      <nav style={{display:'grid',gap:8, marginTop:16}}>
        <NavLink to='/' end>Dashboard</NavLink>
        <NavLink to='/orders'>Pedidos</NavLink>
        {(role==='industria'||role==='gerente_producao') && <NavLink to='/inventory'>Estoque</NavLink>}
        {(role==='industria') && <NavLink to='/stores'>Lojas & Usuários</NavLink>}
        <button onClick={async()=>{await signOut()}}>Sair</button>
      </nav>
    </aside>
    <main className='main'>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/stores' element={<Stores/>}/>
      </Routes>
    </main>
  </div>)
}