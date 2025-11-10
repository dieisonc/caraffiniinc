export default function OrdersKanban(){
  return (<div>
    <h1 className='text-3xl font-bold'>Pedidos de Produção</h1>
    <p className='text-slate-500 mt-2'>Kanban placeholder — integraremos com Supabase (tabela orders) e estágios configuráveis.</p>
    <div className='grid grid-cols-5 gap-4 mt-6'>
      {['Aguardando Revisão','Plano de Corte','Em Produção','Liberado p/ Carregamento','Finalizado'].map(c=>(
        <div key={c} className='card p-4 min-h-[320px]'><div className='font-medium'>{c}</div><div className='text-slate-400 text-sm'>Arraste pedidos aqui</div></div>
      ))}
    </div>
  </div>) }