

setInterval(times,1000)
let clock=document.querySelector(".clock")
function times(){
let time=new Date()
let gtime=time.getTime()
let fully=new Date(time.getFullYear(),11,25)
let total=fully.getTime()-time.getTime()
let seconds=Math.floor(total/1000);
let minutes=Math.floor(seconds/60);
let hours=Math.floor(minutes/60);
let day=Math.floor(hours/24);
hours%=24
minutes%=60
seconds%=60
// clock.innerHTML=seconds
// document.querySelector(".th1").innerHTML=seconds
let thead=document.querySelectorAll("th")
console.log(thead)
thead[0].innerHTML=day
thead[1].innerHTML=hours
thead[2].innerHTML= minutes
thead[3].innerHTML=seconds
if(day==0){
    alert("Evant Start")
}
}
let heading=document.createElement("h1")
heading.textContent="Event Clock";
document.querySelector('.clock').append(heading)

let ul1=document.getElementById("ul")
let con=document.querySelector(".con")
con.addEventListener('click',add1)
function add1(){
    ul1.classList.toggle("toggl")
}