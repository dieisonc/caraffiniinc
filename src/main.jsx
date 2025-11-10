import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'
import { useAuth } from './lib/authStore'
function Init(){ const init = useAuth((s)=>s.init); React.useEffect(()=>{ init() }, []); return <App/> }
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><Init/></BrowserRouter></React.StrictMode>)
