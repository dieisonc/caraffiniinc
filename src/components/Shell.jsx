import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { signOut } from '../lib/supabase'
const links=[{to:'/',label:'Dashboard'},{to:'/negocios',label:'Negócios'},{to:'/pedidos',label:'Pedidos'},{to:'/lojas',label:'Lojas'}]
export default function Shell(){ const navigate=useNavigate(); return (<div className='min-h-screen bg-slate-50'>
  <aside className='fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 p-4'>
    <div className='flex items-center gap-2 mb-6'><span className='font-semibold text-slate-800'>Caraffini</span></div>
    <nav className='space-y-1'>{links.map(l=>(<NavLink key={l.to} to={l.to} end className={({isActive})=>'block px-3 py-2 rounded-xl '+(isActive?'bg-slate-100 text-slate-900':'text-slate-600 hover:bg-slate-50')}>{l.label}</NavLink>))}</nav>
    <button onClick={async()=>{await signOut(); navigate('/login')}} className='mt-6 w-full btn btn-outline'>Sair</button>
  </aside>
  <main className='pl-64 p-8'><Outlet/></main>
</div>) }