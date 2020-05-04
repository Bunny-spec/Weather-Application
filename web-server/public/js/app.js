console.log("Client side javascript file is loaded!");

fetch("http://localhost:3000/weather?address=solapur").then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});

const WeatherForm = document.querySelector("form");
const search = document.querySelector("input");
WeatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  console.log(location);
});
