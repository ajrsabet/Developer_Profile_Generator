const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios")
const writeFileAsync = util.promisify(fs.writeFile);
const geoKey = "AIzaSyCz-3UyaGsNnEDYqgwjByEofuVmaWSuoFs";



// axios
//   .get(`https://www.googleapis.com/geolocation/v1/geolocate?key=${geoKey}`)
//   .then(function(res) {
//     console.log(res.data);
//   });

async function githubAxiosProfile(userName) {
  const queryUrl = `https://api.github.com/users/${userName}`;
  return axios.get(queryUrl)
  return 
}

async function promptUser() {
	try {
		const userInput = await	inquirer.prompt([{
					type: "input",
					message: "Enter your GitHub username:",
					name: "username"
				},
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
			])
			console.log(userInput);
			console.log(userInput.username);

      githubAxiosProfile(userInput.username);
  
//       const html = `<!doctype html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//     integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//   <title>Hello, world!</title>
// </head>
// <style>
//     .card {
// 			background-color: ${userInput.color};
// 			width: 90%; 
// 			margin: 25px auto;
//     }
//     </style>
// <body>
//   <div class="container">
//     <div class="jumbotron">
//       <div class="row">
//         <div class="col-9">
//           <img src="https://www.fillmurray.com/640/360" alt="">
//           <h1 class="display-4">Hello! My name is ${userInput.name}!</h1>
//           <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
//             to featured content or information.</p>        
//           <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>         
//         </div>
//         <div class="col-3">
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">Public Repositories</h5>
//               <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//             </div>
//           </div>
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">GitHub</h5>
//               <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//             </div>
//           </div>
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">Followers</h5>
//               <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//             </div>
//           </div>
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">Following</h5>
//               <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//     integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
//   </script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
//     integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
//   </script>
//   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
//     integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
//   </script>
// </body>
// </html>`
// 		writeFileAsync("index.html", html, "utf8")
	} catch (err) {
		console.log(err)
	}


}
promptUser();