/*********  Cursor ************/

const cursor = document.querySelector(".cursor")

// move cursor as mouse move
document.addEventListener("mousemove", (e) => {
   cursor.style.left = e.pageX + 'px'
   cursor.style.top = e.pageY + 'px'
})

// add different classes on events
const links = document.querySelectorAll("a")
links.forEach((link) => {
   link.addEventListener("mouseover", () => {
      cursor.classList.add('link');
   })
   link.addEventListener("mouseout", () => {
      cursor.classList.remove('link');
   })
})

/************** Sphere *************/

const myTags = [
   'JavaScript', 'CSS', 'HTML',
   'Python', 'Java', 'git', 'npm', '🐈‍⬛', 
   'Node.js', 'MySQL', 'Wordpress',
   'PHP', 'Symphony', 'Photoshop',
   'Illustrator', 'InDesign', 'Adobe XD'
];

var tagCloud = TagCloud('.content', myTags,{

 // radius in px
radius: 195,

 // animation speed
 // slow, normal, fast
 maxSpeed: 'fast',
 initSpeed: 'fast',

 // 0 = top
 // 90 = left
 // 135 = right-bottom
 direction: 135,
 
 // interact with cursor move on mouse out
 keep: true
 
});

//To change the color of text randomly
var colors = ['#a20404', '#6D7CAF', '#fff', '#2043b3', '#027c02', '#e7c500'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;

/********** Burger menu **************/

function myFunction() {
   var x = document.getElementById("myNavigation");
   if (x.className === "menunavigationcontainer") {
     x.className += "-responsive";
   } else {
     x.className = "menunavigationcontainer";
   }
 }

/************* Langue **********/

/* Mail */


