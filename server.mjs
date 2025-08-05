import {createServer} from 'node:http'
import {readFile}from 'node:fs'
const server = createServer((req, res)=>{if(req.url == "/init"){readFile('/src/init.html', (err , data)=>{
    if(err){res.statusCode(500)
}else{
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.statusCode(200)
    res.end(data)
}})}else if(req.url){res.statusCode(404)}})
   
 server.listen(3000)

