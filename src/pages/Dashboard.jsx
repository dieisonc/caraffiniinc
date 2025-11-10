export default function Dashboard(){
  return (<div>
    <h1 className='text-4xl font-extrabold tracking-tight'>Dashboard</h1>
    <div className='grid md:grid-cols-4 gap-4 mt-6'>
      <div className='card p-5'><div className='text-slate-500 text-sm'>Total de Negócios</div><div className='text-2xl font-semibold'>0</div></div>
      <div className='card p-5'><div className='text-slate-500 text-sm'>Pedidos em Produção</div><div className='text-2xl font-semibold'>0</div></div>
      <div className='card p-5'><div className='text-slate-500 text-sm'>Clientes</div><div className='text-2xl font-semibold'>0</div></div>
      <div className='card p-5'><div className='text-slate-500 text-sm'>Lojas</div><div className='text-2xl font-semibold'>0</div></div>
    </div>
  </div>) }