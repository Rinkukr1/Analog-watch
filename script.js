let hours=document.getElementById('hours');
let min=document.getElementById('min');
let sec=document.getElementById("sec");

function showDate(){
    let date=new Date();

    let hh=date.getHours();
    let mm=date.getMinutes();
    let scc=date.getSeconds();

    let hourRotate=hh*30+mm/2;
    let minRotate=mm*6;
    let secRotate=scc*6;

    hours.style.transform=`rotate(${hourRotate}deg)`;
    min.style.transform=`rotate(${minRotate}deg)`;
    sec.style.transform=`rotate(${secRotate}deg)`

    let audio=new Audio('audio/audio.mp3');
    audio.play();
}

setInterval(showDate,1000);