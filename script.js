const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = "Changes in DOM";

mainHeading.innerHTML = "<h2>Learn The DOM</h2>";
mainHeading.classList.add("text-center");

let newArticle = document.createElement('article');
let newHeading = document.createElement('h3');
let newParagraph = document.createElement('p');

newHeading.textContent = "Article 004";
newParagraph.textContent = "Added This Paragraph by the JS in this first i declared elements then with the help of textcontent method i added some details the append data of main method and later on i set a attribute id then finally i declared a one constant of the main class of html file add append this article into that article so they added this artile in the last of all article";

newArticle.appendChild(newHeading);
newArticle.appendChild(newParagraph);

newArticle.classList.add('m-2', 'p-2', 'border', 'border-secondary');
newArticle.setAttribute('id', 'art-004');

const main = document.querySelector('main');
main.appendChild(newArticle);