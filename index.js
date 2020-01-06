const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const axios = require('axios');
const pdf = require('html-pdf');


const writeFileAsync = util.promisify(fs.writeFile);
// const geoLocKey = 'AIzaSyCz-3UyaGsNnEDYqgwjByEofuVmaWSuoFs';


////////////////// Main Function ///////////////////////
async function main() {
  try {
    const userInput = await promptUser();
    console.log('user Input: ' + JSON.stringify(userInput));

    const res = await githubAxiosProfile(userInput.username);
    const githubData = {
      url: res.data.html_url,
      pic: res.data.avatar_url,
      repos: res.data.public_repos,
      followers: res.data.followers,
      following: res.data.following,
      location: res.data.location,
      company: res.data.company,
    };
    console.log(githubData);
    
    const html = await generateHTML(userInput, githubData);
    writeFileAsync('index.html', html, 'utf8');
        
    const pdf = await pdfGen(html, userInput);
  
  } catch (err) {
    console.log(err);
  }

}



////////////// Write HTML to PDF /////////////////
async function pdfGen(html) {
  
  // const html = fs.readFileSync('./index.html', 'utf8');
  const options = { format: 'Letter', orientation: 'Landscape', };
   
  pdf.create(html, options).toFile('./profile.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/profile.pdf' }
  });
}




////////////////// Prompt User ///////////////////////
async function promptUser() {
  try {
  //  const responses = await inquirer.prompt([
  //   {
  //     name: 'name',
  //     type: 'input',
  //     message: 'What is your first and last name?',
  //   },
  //   {
  //     name: 'username',
  //     type: 'input',
  //     message: 'What is your GitHub username?',
  //   },
  //   {
  //     name: 'company',
  //     type: 'input',
  //     message: 'What company do you currently work for?',
  //   },
  //   {
  //     name: 'color',
  //     type: 'input',
  //     message: 'What is your favorite color?',
  //   },
  // ])
// return responses;

// bypass user prompt: Comment out above and uncomment line below
return {name:'Adam Sabet',username:'ajrsabet',company: 'TransArc Design',color:'orange',};
  
} catch (err) {
    console.log(err);
  }
};


////////////////// Github Profile ///////////////////////
function githubAxiosProfile(username) {
  const queryUrl = `https://api.github.com/users/${username}`;
  return axios.get(queryUrl)
}


////////////////// Geolocation ///////////////////////
// axios
//   .get(`https://www.googleapis.com/geolocation/v1/geolocate?key=${geoLocKey}`)
//   .then(function(res) {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err)                     //Axios entire error message
//     console.log(err.response.data.error) //Google API error message 
//   });


////////////////// Write HTML ///////////////////////  
async function generateHTML(userInput, githubData) {
  try {    const html = 
  `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <title>Developer Profile</title>
</head>
<style>
    .card {
			background-color: ${userInput.color};
			width: 90%; 
			margin: 25px auto;
    }
    .jumbotron {
      border-style: solid;
      border-color: ${userInput.color};
      padding: 30px;
    }
    img {
      margin: 30px auto;
      border-style: solid;
      border-color: ${userInput.color};
      border-width: 5px;
      border-radius: 100px;
      width: 90%
    }
</style>
<body>
  <div class="container">
    <div class="jumbotron">
    <h1 class="display-4">${userInput.name}'s Developer Profile</h1>
    <hr>
      <div class="row">
        <div class="col-6">
          <img src="${githubData.pic}" alt="">
        </div>
        <div class="col-3" style="padding: 30px 0;">
        <h3>Company:</h3>
        <h5>${userInput.company}</h5>
        <br> 
        <h3>Location:</h3>
        <h5><a href="https://www.google.com/maps/place/${githubData.location}/">${githubData.location}</a></h5>
        <br> 
        <h3>Company:</h3>
        <h5>${githubData.company}</h5>
                  
        </div>
        <div class="col-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Public Repositories</h5>
              <h6 class="card-subtitle mb-2 text-muted">${githubData.repos}</h6>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">GitHub</h5>
              <h6 class="card-subtitle mb-2 text-muted">${githubData.url}</h6>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Followers</h5>
              <h6 class="card-subtitle mb-2 text-muted">${githubData.followers}</h6>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Following</h5>
              <h6 class="card-subtitle mb-2 text-muted">${githubData.following}</h6>
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
return html;
  } catch (err) {
    console.log(err);
  }
};





main();