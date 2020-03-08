let buttonElement =document.querySelector('button');
let jobTitle = document.querySelector('input').value;
const key = "824d3b8d4699a27c0fb39f0d2b1d1427b1c4e4163ef28f1ae9f7b568b83ba491";


 // https://cors-anywhere.herokuapp.com
buttonElement.addEventListener('click', function getJob()=> {
  fetch(`http://api.dataatwork.org/v1/spec/skills-api.json/jobs/apikey=${key}&q=${jobTitle}&location=default`)
  .then(response => {

  	console.log(response.results.forEach((el) => {
      document.querySelector("#result0name").innerHTML = el[0].name
      document.querySelector("#result1name").innerHTML = el[1].name
      document.querySelector("#result2name").innerHTML = el[2].name
      document.querySelector("#result3name").innerHTML = el[3].name
      document.querySelector("#result0loca").innerHTML = el[0].location.name
      document.querySelector("#result1loca").innerHTML = el[1].location.name
      document.querySelector("#result2loca").innerHTML = el[2].location.name
      document.querySelector("#result3loca").innerHTML = el[3].location.name
      document.querySelector("#result0link").href = el[0].refs.landing_page
      document.querySelector("#result1link").href = el[1].refs.landing_page
      document.querySelector("#result2link").href = el[2].refs.landing_page
      document.querySelector("#result3link").href = el[3].refs.landing_page

    });
  })
  .catch(err => {
  	console.log(err);
  });
})
