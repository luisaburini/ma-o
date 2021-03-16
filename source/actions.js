let cards = document.querySelectorAll(".carta");  
let isShuffling = true;

let start = Date.now(); // remember start time

const totalTime = 1500;


let timer = setInterval(function() {
  // how much time passed from the start?
  let timePassed = Date.now() - start;

  if (timePassed >= totalTime) {
    //clearInterval(timer); // finish the animation after 2 seconds
    start = Date.now();
    timePassed = 0;
  }

  // draw the animation at the moment timePassed
  draw(timePassed);
 

}, -1);

// as timePassed goes from 0 to 2000
// left gets values from 0px to 400px
function draw(timePassed) {
  if(isShuffling)
  {
    var i = parseInt(Math.random()*cards.length, 10);
    //console.log("Var i=" + i)
    //console.log("TimePassed=" + timePassed)
    //console.log("totalTime=" + totalTime)
  
    if(timePassed < totalTime/2)
    {
      cards[i].style.left = timePassed / 12 + parseInt(Math.random(), 10) + 'px';
      cards[i].style.top = timePassed / 12 + parseInt(Math.random(), 10)+ 'px';
    }
    else
    {
      cards[i].style.left = totalTime/2-timePassed/1.5 + 'px';
      cards[i].style.top = totalTime/2-timePassed/1.5 + 'px';
    }
    var zIndex = (parseInt(Math.random()*cards.length, 10));
    cards[i].style.zIndex = zIndex.toString();
  }
  else
  {
    cards.forEach(returnToOriginalPosition)
  }

}

function returnToOriginalPosition(element, index, array)
{
  element.style.left = "15%";
  element.style.top = "10%";
}

function toggleShuffle()
{
  isShuffling = !isShuffling;
  console.log("TOGGLE SHUFFLE")
}

