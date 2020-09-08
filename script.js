let button = document.querySelector("button");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");


let quotes = [`"The world does not need more christian literature. What it needs is more Christians writing good literature."`,`"It is a good rule after reading a new book, never to allow yourself another new one till you have read an old one in between."`, `"A children's story that can only be enjoyed by children is not a good children's story in the slightest."`, `"Fairy tales do not tell children that dragons exist. Children already know that dragons exist. Fairy tales tell children that dragons can be killed."`, `"People without hope not only don't write novels, but what is more to the point, they don't read them."`, `"A book too, can be a star, a living fire to light in darkness, leading out to the expanding universe."`, `"There are no synonyms. Find the right word, and use it."`]

let authors = ["C.S. Lewis", "G.K. Chesterton", "Flannery O'Conner", "Madeleine L'Engle", "Unknown"]


button.addEventListener('click', () => {
  var randomQuotes = Math.floor(Math.random() * 7);
switch(randomQuotes) {
    case 0:
    quote.innerText = quotes[0]
    author.innerText = authors[0]
    break;
    case 1:
    quote.innerText = quotes[1]
    author.innerText = authors[0]
    break;
    case 2:
    quote.innerText = quotes[2]
    author.innerText = authors[0]
    break;
    case 3:
    quote.innerText = quotes[3]
    author.innerText = authors[1]
    break;
    case 4:
    quote.innerText = quotes[4]
    author.innerText = authors[2]
    break;
    case 5:
    quote.innerText = quotes[5]
    author.innerText = authors[3]
    break;
    case 6:
    quote.innerText = quotes[6]
    author.innerText = authors[4]
    break;
}
});
