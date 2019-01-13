const svgRect = document.getElementsByClassName('svg-rect-wrapper')[0];
const menuCloser = document.getElementsByClassName('menu-closer')[0];
const shape = document.getElementsByClassName('rect-shape')[0];
const menu = document.getElementsByClassName('menu-container')[0];

svgRect.addEventListener("click",()=>{
    menu.classList.remove('menu-closed');
    // menu.classList.add('openAnimation');
    menu.style.height = "60vh";

    console.log('cool');
});
menuCloser.addEventListener("click",()=>{
    // menu.classList.add('openAnimation');
    menu.classList.add('menu-closed');
});
function ani(){
    document.getElementById('text').className ='animationClass';
  }


  var countDownDate = new Date("Feb 5, 2019 10:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;
    // If the count down is finished, write some text 
    
  }, 1000);
  var typed = new Typed('.demoTyper', {
    strings: ["We will not start without you.. ", "It is going to be lit!"],
    typeSpeed: 120,
    loop: true,
    loopCount: Infinity
  });
