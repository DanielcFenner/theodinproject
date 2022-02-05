const img = document.querySelector("img");
const button = document.querySelector("button");

async function getCats() {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=qEPMKTctNvSVVSzXEmrEQg8raaEz5ffX&s=cats",
    { mode: "cors" }
  );
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}

button.addEventListener("click", () => {
  getCats();
});
