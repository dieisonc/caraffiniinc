import sendgrid from '@sendgrid/mail'
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'})
  const {to,subject,text,html}=req.body||{}
  if(!to||!subject) return res.status(400).json({error:'Missing fields'})
  try{
    await sendgrid.send({to,from:process.env.SENDGRID_FROM_EMAIL||'no-reply@caraffini.com.br',subject,text,html})
    res.status(200).json({ok:true})
  }catch(e){res.status(500).json({error:e.message})}
}