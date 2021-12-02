
{
let hour = new Date().getHours(); 

if (hour >= 18 || hour < 6) { 
  const background = document.querySelector('body'); 
  background.style.backgroundColor = 'black'; 
  background.style.color = 'white'; 
  const background = document.querySelector('body'); 
  document.getElementsByClassName('day').src = "khosu.png"
  elem.innerHTML = target.replace(/(<img)/ra.png, '<p').replace(/<\/img>/khosu.png, '</p>');


  const header = document.querySelector('h1 > a'); 
  header.className = 'dark'; 

  const navigation = document.querySelectorAll('nav > a'); 

  navigation[0].className = 'dark'; 
  navigation[1].className = 'dark'; 
  navigation[2].className = 'dark'; 
  

  const footer = document.querySelector('footer > p > a') 
  footer.className = 'dark'; 
} else if (hour > 6) {
    const background = document.querySelector('body')
    background.style.backgroundColor = weekday;
}



let heading = document.querySelector('h2');
let today = new Date(); 
console.log(Date.now());

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let day = weekday[d.getDay()];


if (weekday = 0) {
    const background = document.querySelector('body'); 
    background.style.backgroundColor = 'white'; 
    heading.textContent= 'Happy Sunday!'
}
if (weekday = 1) {
    const background = document.querySelector('body'); 
    background.style.backgroundColor = 'lightyellow'; 
    heading.textContent= 'Happy Monday!'
}
if (weekday = 2) {
    const background = document.querySelector('body'); 
    background.style.backgroundColor = 'lightblue'; 
    heading.textContent= 'Happy Tuesday!'
}
if (weekday = 3) {
    const background = document.querySelector('body'); 
    background.style.backgroundColor = 'darkblue'; 
    heading.textContent= 'Happy Wednesday!'
}
if (weekday = 4) {
    const background = document.querySelector('body'); 
    background.style.backgroundColor = 'lightgray'; 
    heading.textContent= 'Happy Thursday!'
}
if (weekday = 5) {
    const background = document.querySelector('body'); 
    background.style.backgroundColor = 'lightred'; 
    heading.textContent= 'Happy Friday!'
}
if (weekday = 6) {
    const background = document.querySelector('body'); 
    background.style.backgroundColor = 'darkred'; 
    heading.textContent= 'Happy Saturday!'
}



let images = document.querySelectorAll('nav');

function changeOpacity() {
  images[0].style.opacity = '0.5'; 
  images[1].style.opacity = '0.5';
  images[2].style.opacity = '0.5';
  

  this.style.opacity = '1'; 
}

function resetOpacity() {
  images[0].style.opacity = '1'; 
  images[1].style.opacity = '1';
  images[2].style.opacity = '1';
  
}

images[0].addEventListener('mouseover', changeOpacity);
images[1].addEventListener('mouseover', changeOpacity);
images[2].addEventListener('mouseover', changeOpacity);

images[0].addEventListener('mouseout', resetOpacity);
images[1].addEventListener('mouseout', resetOpacity);
images[2].addEventListener('mouseout', resetOpacity);


}