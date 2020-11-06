var stage = document.querySelector(".stage");
var eight = document.querySelector(".eight");
var span = document.querySelectorAll("span");
var h1 = document.getElementsByTagName("h1")[0];
var ball = document.querySelector(".ball");

var countArray = []
var responses = ["As I see it, yes.", "Ask again later." , "Better not tell you now.", " Cannot predict now.", "Concentrate and ask again.", "Don’t count on it.", " It is certain.", "It is decidedly so.", " Most likely.", "My reply is no." , "My sources say no." , " Outlook not so good." , "Outlook good." , "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.", "Yes.", "Yes – definitely." , "You may rely on it."];

// ball shake event
stage.addEventListener("click",function(){
var randomMessage = Math.round(Math.random()*20);

// removes "click me" message from HTML
h1.remove();

// checks to see if there are more than 2 spans elements inside <figure class = 'ball'> the HTML and removes them
if(countArray.includes("remove")){
   document.querySelector(".triangle").remove();
   document.querySelector(".message").remove();
   countArray = [];
}

// triggers shake css animation
stage.style.animation = "shake 1s ease-out";
eight.innerHTML = "";
eight.classList.add("message-circle");
document.querySelector(".message-circle").style.animation = "opacity .4s";

// loop which pushes span classes in countArray. Once two classes are added it triggers creation of two span tags with one with triangle class and the other with a message class
for (var i = 0; i < span.length; i++) {
    countArray.push(span[i].getAttribute("class"));

    if(countArray.length == 2){

      var createTriangle = document.createElement("span");
      createTriangle.classList.add("triangle");
      ball.appendChild(createTriangle);

      var createMessage = document.createElement("span");
      createMessage.classList.add("message");
      createMessage.innerHTML = responses[randomMessage];
      ball.appendChild(createMessage);

      countArray.push("remove");
    }
}

// removes classes created from css shake animation after 1 second
setTimeout(function(){
  stage.style.animation = "";
  },1000);
});

// mobile screenwidth message
if(screen.width < "769"){
  h1.innerHTML = "Tap me";
}
