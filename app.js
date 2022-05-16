const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'})
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));
const port=process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
});

const db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    console.log("Connected");
});

let quesSchema= new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    a:{
        type:String,
        required:true
    },
    b:{
        type:String,
        required:true
    },
    c:{
        type:String,
        required:true
    },
    d:{
        type:String,
        required:true
    },
    ans:{
        type:String,
        required:true
    }

});

let Quiz=mongoose.model ('Quiz',quesSchema);

app.get('/',(req,res)=>{
    Quiz.find({})
    .then(quizq=>{
        res.render('quiz',{quizq:quizq});
    })
    .catch(err=>{
        console.log(err);
    })
    
})
app.listen(port,()=>{
    console.log("listen to port 3000");
});