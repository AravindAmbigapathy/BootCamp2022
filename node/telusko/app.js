const http=require('http')

http.createServer((rec,res=>{
    res.rawListeners('welcome To Node JS')
})).listen(3000)






