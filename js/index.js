const svgRect = document.getElementsByClassName('svg-rect-wrapper')[0];
const menuCloser = document.getElementsByClassName('menu-closer')[0];
const shape = document.getElementsByClassName('rect-shape')[0];
const menu = document.getElementsByClassName('menu-container')[0];


//firebase
var database = firebase.database();

// writeUserData('techcrunch@gmail.com');
function writeUserData(email) {
    var postsRef = database.ref().child("emailIDs");
    var newPostRef = postsRef.push();
    newPostRef.set({
      
      email: email,
    });
  }
svgRect.addEventListener("click",()=>{
    // menu.classList.remove('menu-closed');
   
    // menu.style.height = "60vh";

    console.log('cool');
    anime({
        targets: '.menu-container',
        height: ['0vh','60vh']
    });
});
menuCloser.addEventListener("click",()=>{
    // document.getElementsByClassName('svg-rect-wrapper')[0].style.visibility = "visible";
    // menu.classList.add('menu-closed');
    // alert('Hey');
    anime({
        targets: '.menu-container',
        height: ['60vh','0vh']
    });
});
document.getElementsByClassName('shape')[0].addEventListener('click', ()=>{
    anime({
        targets: '.text',
        color: '#F7153D'
      });
    
});
document.getElementsByClassName('svg-wrapper')[0].addEventListener('click',()=>{
    anime({
        targets: '.emailPopper',
        top: ['100vh','65vh'],
        height: ['0','35vh']
       
    });
    
});


document.getElementById('submit-L').addEventListener('click', ()=>{
    const emailID = document.getElementById('value-L').value;
    // alert(document.getElementById('value-L').value);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailID == "") {
        alert("EMAIL must be filled out");
        }
        else if(reg.test(emailID) == false){
            {
                alert('Invalid Email Address');
                
            }
     }
    else{
    
        writeUserData(emailID);
        anime({
            targets: '.menu-container',
            height: ['60vh','0vh']
        });
    }
});
document.getElementById('submit').addEventListener('click', ()=>{
    // alert(document.getElementById('value-L').value);
   

    const emailID = document.getElementById('value').value;
  
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailID == "") {
        alert("EMAIL must be filled out");
        }
        else if(reg.test(emailID) == false){
            {
                alert('Invalid Email Address');
                
            }
    
        }
    else{
        writeUserData(emailID);
        anime({
            targets: '.emailPopper',
            top: ['65vh','100vh']
           
        });
    document.getElementById('text').innerText = "NOTIFIED";
    }
});



var countDownDate = new Date("Feb 5, 2019 10:30:00").getTime();


var x = setInterval(function() {


    var now = new Date().getTime();

    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("days1").innerHTML = days;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;
    document.getElementById("days1").innerHTML = days;
    document.getElementById("days-L").innerHTML = days;
    document.getElementById("hours-L").innerHTML = hours;
    document.getElementById("min-L").innerHTML = minutes;
    document.getElementById("sec-L").innerHTML = seconds;

    
  }, 1000);
  
  var typed = new Typed('.demoTyper', {
    strings: ["We will not start without you.. ", "It is going to be lit!"],
    typeSpeed: 120,
    loop: true,
    loopCount: Infinity
  });
