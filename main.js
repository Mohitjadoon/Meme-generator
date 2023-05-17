/*global document*/
//const generateMemebtn = document.querySelector(".meme-generator .generate-meme-btn");same goes for this 
/**always use convention like "img-meme" not like "generator meme" 
 * even .meme-generator .meme-title .meme-author was not defined in html 
 * and i dont know where you wanted to show them and how its works 
 */

let generateMemebtn= document.getElementById("gen-btn");
//const memeImage = document.querySelector(".meme-generator img") tag was not defined in html
const memeImage = document.getElementById("img-meme")
const memetitle = document.querySelector(".meme-generator .meme-title");
const memeauthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url,title,author) => {
    memeImage.setAttribute("src",url)
    memetitle.innerHTML = title;
    memeauthor.innerHTML = author;
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data) => {
        updateDetails (data.url,data.title,data.author);
    });
};

generateMemebtn.addEventListener("click",generateMeme);
