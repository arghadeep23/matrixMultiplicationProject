const express=require('express');
const app=express();
var path = require('path');
app.use(express.static(path.join(__dirname,'public')));

var cons = require('consolidate');
// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/Home',(req,res)=>{
    res.render('Home.ejs');
})
app.get('/Test',(req,res)=>{
    const {q}=req.query;
    res.render('Test.ejs',{q});
})
app.listen(3000,()=>{
    console.log('Listening on port 3000');
});