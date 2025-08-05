import { readFile } from 'node:fs'
import http from 'node:http'
const server = http.createServer((req ,res)
if (req.url == "/init"){readFile('/src/init.html', (err , data)=>{
    if(err){res.statusCode(500)
}else{
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.statusCode(200)
    res.end(data)
}})}else(req.url){res.statusCode(404)})