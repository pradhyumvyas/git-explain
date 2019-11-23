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

let newArticle1 = document.createElement('article');
let newHeading1 = document.createElement('h3');
let newParagraph1 = document.createElement('p')

newHeading1.textContent = "Article 005";
newParagraph1.textContent = "Added This Paragraph by the JS in this first i declared elements then with the help of textcontent method i added some details the append data of main method and later on i set a attribute id then finally i declared a one constant of the main class of html file add append this article into that article so they added this artile in the last of all article";


newArticle1.appendChild(newHeading1);
newArticle1.appendChild(newParagraph1);

newArticle1.setAttribute('id', 'art-005');
newArticle1.classList.add('m-2', 'p-2', 'border', 'border-secondary');

main.appendChild(newArticle1);

let newArticle2 = document.createElement('article');
let newParagraph2 = document.createElement('p');
let newHeading2 = document.createElement('h3');

newArticle2.appendChild(newHeading2);
newArticle2.appendChild(newParagraph2);

newArticle2.classList.add('m-2', 'p-2', 'border', 'border-secondary');
newArticle2.setAttribute('id', 'art-005');

newHeading2.textContent = "Article 006";
newParagraph2.textContent = "Added This Paragraph by the JS in this first i declared elements then with the help of textcontent method i added some details the append data of main method and later on i set a attribute id then finally i declared a one constant of the main class of html file add append this article into that article so they added this artile in the last of all article";

main.appendChild(newArticle2);
