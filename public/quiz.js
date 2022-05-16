
const quiz=[
    {
        question:"Q1 What Is The Full Form of HTML?",
        a:"Hey Text Markup Language",
        b:"HyperText Makeup Language",
        c:"HyperTest Markup Language",
        d:"HyperText Markup Language",
       
        ans:"ans4"
    },

    {
        question:"Q2 What Is The Full Form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cartoon Style Sheets",
        c:"Cascading Style Sheep",
        d:"Cascading Super Sheets",
       
        ans:"ans1"
    },
    {
        question:"Q3 What Is The Full Form of HTTP?",
        a:"Hey Text Transfer Protocol",
        b:"HyperText Protocol",
        c:"Hey Transfer Text Protocol",
        d:"HyperText Transfer Protocol",
       
        ans:"ans4"
    },
    {
        question:"Q4 Do you Like The App",
        a:"Yes",
        b:"Its Amazing",
        c:"obviously",
        d:"No",
       
        ans:"ans1"
    },
];
var index=0;
var ques=document.querySelector('.head');
var butt=document.getElementById('btn');
var option1=document.getElementById('op1');
var option2=document.getElementById('op2');
var option3=document.getElementById('op3');
var option4=document.getElementById('op4');


var answers=document.querySelectorAll('.answer');
console.log(answers);
var score=0;
    var ans=document.getElementById("ans");
   answers.forEach((curr)=>{ 
    
       curr.addEventListener('click',(e)=>{
       
            
        if(curr.checked){
            if( curr.name==curr.id){
score++;
            }
           
           
        }
      
    
       })

    })
       
       

   
   
   







butt.addEventListener('click', (e)=>{
   
        alert(`you score "${score}" out of 4`);
    score=0;
    window.location.reload();
   
   

    


});

