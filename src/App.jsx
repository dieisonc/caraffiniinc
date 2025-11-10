import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import OrdersKanban from './pages/OrdersKanban.jsx'
import DealsKanban from './pages/DealsKanban.jsx'
import Stores from './pages/Stores.jsx'
import Shell from './components/Shell.jsx'
import { useAuth } from './lib/authStore'
function PrivateRoute({ children }){ const { user, loading } = useAuth(); if (loading) return <div className='p-8'>Carregando...</div>; if (!user) return <Navigate to='/login' replace/>; return children }
export default function App(){ return (<Routes>
  <Route path='/login' element={<Login/>} />
  <Route path='/register' element={<Register/>} />
  <Route path='/' element={<PrivateRoute><Shell/></PrivateRoute>}>
    <Route index element={<Dashboard/>} />
    <Route path='pedidos' element={<OrdersKanban/>} />
    <Route path='negocios' element={<DealsKanban/>} />
    <Route path='lojas' element={<Stores/>} />
  </Route>
  <Route path='*' element={<Navigate to='/'/>} />
</Routes>) }
