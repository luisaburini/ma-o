let cards = document.querySelectorAll(".carta");  
let isShuffling = false;

let start = Date.now(); // remember start time

marqueeInit({
	uniqueid: 'mycrawler',
	style: {
    'color': 'darkblue',
    'font-family': 'Arial, Helvetica, sans-serif',
    'font-size': '15vh',
    'line-height': '17vh'
	},
	inc: 5, //speed - pixel increment for each iteration of this marquee's movement
	mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
	moveatleast: 2,
	neutral: 150,
	persist: true,
	savedirection: true
});

const totalTime = 1500;

startAnimation();





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
    // GET request to 
    getRequest()
    
  
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

function getRequest()
{
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "GPS=1; YSC=M66LAlHPbvc; VISITOR_INFO1_LIVE=quoNIzV88Ps");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://www.youtube.com/results?search_query=bolsonaro", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function startAnimation() {
  
}