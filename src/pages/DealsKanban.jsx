export default function DealsKanban(){
  return (<div>
    <h1 className='text-3xl font-bold'>Negócios</h1>
    <p className='text-slate-500 mt-2'>Kanban placeholder — colunas virão da configuração da loja.</p>
    <div className='grid grid-cols-6 gap-4 mt-6'>
      {['Novo Lead','Interessado','Projeto/Orçamento','Enviar Proposta','Andamento','Fechado'].map(c=>(
        <div key={c} className='card p-4 min-h-[320px]'><div className='font-medium'>{c}</div><div className='text-slate-400 text-sm'>Arraste negócios aqui</div></div>
      ))}
    </div>
  </div>) }