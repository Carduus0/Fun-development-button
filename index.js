 linkArray = [
    "https://learn.javascript.ru",
    "https://www.w3schools.com",
    "https://github.com",
    "https://sass-guidelin.es/ru/",
    "https://www.code.mu/ru/javascript/book/prime/",
    "https://www.udemy.com",
    "https://image.online-convert.com/ru/convert-to-ico",
    "https://validator.w3.org/",
    "https://grid.layoutit.com",
    "https://fonts.google.com",
    "https://webpack.js.org",
    "https://www.codewars.com",
    "https://rs.school",
    "https://code.visualstudio.com",
    "https://ru.hexlet.io/courses/free"
];



const btn = document.querySelector('.press');
let link = document.querySelector('.link--random');
const player = document.querySelector('.player');
btn.onclick = function(){
    console.log("Click"); 
    link.href = "";
    link.href = getRandomLink(linkArray)
}
function getRandomLink(){
    let randomNum = Math.floor(Math.random() * linkArray.length);
    let randomLink = linkArray[randomNum];
    return randomLink
    };

//focus