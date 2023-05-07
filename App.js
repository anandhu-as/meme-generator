const BaseUrl = "https://meme-api.com/gimme/wholesomememes";
const generateMemeButton = document.querySelector(".meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");
const memeData = (img, title, author) => {
  memeImage.setAttribute("src", img);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = author;
};
const generateMeme = () => {
  fetch(BaseUrl)
    .then((res) => res.json())
    .then((data) => {
      memeData(data.url, data.title, data.author);
    });
};
generateMemeButton.addEventListener("click", generateMeme);
