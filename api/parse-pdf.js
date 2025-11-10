import formidable from 'formidable'
import fs from 'fs'
import pdf from 'pdf-parse'
export const config = { api: { bodyParser: false } }
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'})
  const form = formidable({ multiples:false })
  form.parse(req, async (err, fields, files)=>{
    if(err) return res.status(400).json({error:'Upload failed'})
    const file = files.file
    const dataBuffer = fs.readFileSync(file.filepath)
    const doc = await pdf(dataBuffer)
    const lines = doc.text.split('\n').map(s=>s.trim()).filter(Boolean)
    const items=[]; const rx=/^([A-Z0-9\.\-_/]+)\s+(.+?)\s+(\d+[\.,]?\d*)\s+(UN|M|M2|L|KG)$/i
    for(const line of lines){ const m=line.match(rx); if(m){ items.push({code:m[1], description:m[2], quantity:parseFloat(m[3].replace(',','.')), unit:m[4].toUpperCase()}) } }
    res.status(200).json({items})
  })
}