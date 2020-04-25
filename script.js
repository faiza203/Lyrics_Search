const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");
const apiURL = "https://api.lyrics.ovh";
function searchSongs(term) {
  fetch(
    `${apiURL}/suggest/${term}` 
      .then((res) => res.json())
      .then((data) => console.log(data)));
      const res = await fetch(`${apiURL}/suggest/${term}`);
      const data = res.json();
      showData(data);
    } 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value.trim();
  if (!searchTerm) {
    alert("Please type  in a  search term.");
  } else {
    searchSongs(searchTerm);
  }
});
