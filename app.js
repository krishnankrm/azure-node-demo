const express=require('express')
const app = express();
var port=process.env.PORT||3009
app.get('/',(req,res)=>res.send('1'))
app.listen(port)