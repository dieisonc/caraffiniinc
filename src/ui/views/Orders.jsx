export default function Orders(){
  const stages=['Aguardando Revisão','Plano de Corte','Em Produção','Liberado p/ Carregamento','Finalizado']
  return (<div><div className='header'><h1>Pedidos de Produção</h1><button className='card'>+ Novo Pedido</button></div>
  <div className='kanban'>{stages.map((s,i)=>(<div key={i} className='card'><b>{s}</b><div style={{opacity:.6,marginTop:8}}>Arraste pedidos aqui</div></div>))}</div></div>)
}