const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios")
const writeFileAsync = util.promisify(fs.writeFile);
const mapsApiKey = "AIzaSyCz-3UyaGsNnEDYqgwjByEofuVmaWSuoFs";

axios
  .get(`https://www.googleapis.com/geolocation/v1/geolocate?key=${mapsApiKey}`)
  .then(function(res) {
    console.log(res.data);
  });
// $.ajax({
// 	url: `https://www.googleapis.com/geolocation/v1/geolocate?key=${mapsApiKey}`,
// 	method: "GET"
// }).then(function(response) {
// 	console.log(response);
// });


async function promptUser() {
	try {
		let userImput = await 
		
		inquirer.prompt([
			{
				type: "input",
				name: "color",
				message: "What is your favorite color?"
			},
			{
				type: "input",
				name: "name",
				message: "What is your name?"
			},
			{
				type: "input",
				name: "city",
				message: "Where are you from?"
			},
			{
				type: "input",
				name: "",
				message: "?"
			},
			{
				type: "input",
				name: "",
				message: "?"
			},
			{
				type: "input",
				name: "",
				message: "?"
			},
		]);
		console.log(userImput)
		// let data = JSON.stringify(userImput);
		const html = `<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <title>Hello, world!</title>
</head>

<body>
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-9">

          <img src="https://www.fillmurray.com/640/360" alt="">
          <h1 class="display-4">Hello! My name is ${userImput.name}!</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
            to featured content or information.</p>
          
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          
        </div>

        <div class="col-3">
          <div class="card" style="width: 90%; margin: 25px auto;">
            <div class="card-body">
              <h5 class="card-title">Public Repositories</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
          </div>
          <div class="card" style="width: 90%; margin: 25px auto;">
            <div class="card-body">
              <h5 class="card-title">GitHub</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
          </div>
          <div class="card" style="width: 90%; margin: 25px auto;">
            <div class="card-body">
              <h5 class="card-title">Followers</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
          </div>
          <div class="card" style="width: 90%; margin: 25px auto;">
            <div class="card-body">
              <h5 class="card-title">Following</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
  </script>
</body>

</html>`
		writeFileAsync("index.html", html, "utf8")
	} catch (err) {
		console.log(err)
	}

	
}
// promptUser();