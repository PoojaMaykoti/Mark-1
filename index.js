// // // ex1
console.log("Pooja Maykoti");
// // 
// // // ex2

var readlineSync=require('readline-sync');
var userName=readlineSync.question('give me  your name?');

 console.log(userName);
// //ex3

var WelcomeMessage="welcome " +userName;
console.log(WelcomeMessage);


// // // ex5
var readlineSync = require('readline-sync');

var Myage=readlineSync.question("I am  older than 25?");

if(Myage === "yes")
{
  console.log("You are right!");
}
else
{
  console.log("You are wrong!");
}

// // Ex6
var readlineSync=require('readline-sync');

  var score = 0;

  var userAnswerAge=readlineSync.question(" I am older than 25!");

  console.log("you entered" + userAnswerAge);

  if(userAnswerAge==="yes")
  {
    console.log("you are right!");
    score=score+1;

    console.log("score is:" + score)
  }
  else
  {
     console.log("you are wrong!");
     score=score-1;

     console.log("score is:" + score);
  }



// // // ex7
function add(numberOne,numberTwo)
{
  var sum=numberOne+numberTwo
  return sum;
}

var result=add(5,4)
 
 console.log("The sum of 5 & 4 is: "+result);

var result1=add(6,7)

console.log("The sum of 6 & 7 is: "+result1);

// // ex8

var readlineSync=require("readline-sync");

var score=0;

function play(question,answer)
{
  var userAnswer=readlineSync.question(question);

  if(userAnswer===answer)
  {
     console.log("you are right");

     score=score+1;

  }

  else
  {
    console.log("you are wrong");
     score=score-1;
  }
}

play("where do I learn?","solapur");

play("where do I live","Solapur");

console.log("you score is"+score);

// // ex9

for(var i=0; i<5; i++)
{
   console.log("Pooja Maykoti");
}


// // // ex10

var groceryList=["milk","eggs","vada pav","samosa","flowers"];
console.log(groceryList[0]);
console.log(groceryList[2]);
console.log(groceryList[4]);

// ex11/

var groceryList=["milk","wheat","vada pav","samosa","flowers"]
for(var i=0; i<groceryList.length; i++)
{
console.log(groceryList[i]);

}

// // ex12

var superman=
{
  name:"superman",
  power:"flight",
  costumeColor:"blue",
  strength:10000,
  steath:0,
  intelligence:100,
}
var batman=
{
   name:"batman",
   power:"martial arts",
   costumeColor:"blue",
   strength:100,
   steath:10,
   intelligence:1000,
}

console.log(superman.strength);
console.log(batman.strength);
console.log(superman.strength>batman.strength);


// // ex13
var readlineSync=require('readline-sync');

var score=0;
var userName=readlineSync.question("what's your name?");

console.log("welcome " + userName + " Do you know pooja");


function play(question,answer)
{
    var userAnswer=readlineSync.question(question);

    if(userAnswer===answer)
    {
       console.log("right");
       score=score+1;
    }
    else
    {
       console.log("wrong");
       score=score-1;
    }
    console.log("current score:"+score);
    console.log("____");
}

var questions=
[{
  question:"where do I live?",
  answer:"Solapur"
  },
  {
    question:"My favourite superhero would be?",answer:"varun"
  },


  {
    question:"What is my favourite sweet",answer:"Kajukatri"
  },
  

   {
    question:"Who is my favourite singer?",answer:"Arijit Singh"
  }
  
  ];












for(var i=0; i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
 console.log("YAY ! You SCORED :"+score)
