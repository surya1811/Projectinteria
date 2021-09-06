const express=require('express');
var app=express();
var http=require('http');
var path=require('path');
const mysql=require('mysql');
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const db=mysql.createConnection({
host:'localhost',
user:'root',
password:'Suryastar1@',
port:3306,
database:'joininteria'
});
app.use(express.static('css'));
app.use(express.static('images'));
app.use(express.static('js'));
app.get('/',function(req,res){
res.sendFile(path.join(__dirname+'/form.html'));
});
app.post('/submit',function(req,res){
console.log(req.body.urname);
var name=req.body.urname;
var email=req.body.urEmail;
var phone=req.body.mobile_number;
var code=req.body.postal_code;
var addr=req.body.address;
var files=req.body.resume;
var sug=req.body.suggestions;
db.connect((err)=>{
if(err) throw err;
console.log('connected to database created table');
var sql="INSERT INTO joininteria.applicants(applicant_name,applicant_email,applicant_contact,applicant_postalcode,applicant_address,applicant_resumefile,applicant_suggestion) VALUES('"+name+"','"+email+"','"+phone+"','"+code+"','"+addr+"','"+files+"','"+sug+"')";
db.query(sql,(err,result)=>{
if(err) throw err;
console.log('done');
});
});
res.redirect('http://localhost:8080');
//res.redirect('career.html');
res.end();
});
app.listen(8080);
console.log("running at port 8080");
