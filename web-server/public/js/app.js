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
const Message1 = document.querySelector("#msg1");
const Message2 = document.querySelector("#msg2");

WeatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  Message1.textContent = " ";
  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          Message1.textContent = data.error;
          
        } else {
          Message1.textContent = data.location;
          Message2.textContent = data.forecast;
        }
      });
    }
  );
});
