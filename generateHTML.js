// colors for image and profile

const colors = {
  green: {
    wrapperBackground: "#16c710",
    headerBackground: "#11910d",
    headerColor: "white",
    photoBorderColor: "#black"
  },
  purple: {
    wrapperBackground: "#aa05fc",
    headerBackground: "#9a19c2",
    headerColor: "white",
    photoBorderColor: "#purple"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#352f5e"
  },
  pink: {
    wrapperBackground: "#87dbdf",
    headerBackground: "#ff9474",
    headerColor: "white",
    photoBorderColor: "#f8fe4c"
  },
  red: {
    wrapperBackground: "#e30b13",
    headerBackground: "#870303",
    headerColor: "white",
    photoBorderColor: "white"
  },
  orange: {
    wrapperBackground: "#fa6305",
    headerBackground: "#db570f",
    headerColor: "white",
    photoBorderColor: "orange"
  },
  yellow: {
    wrapperBackground: "#fff700",
    headerBackground: "#ffe600",
    headerColor: "white",
    photoBorderColor: "#ffeb12"
  }
};
// function that generates html into a new file
function generateHTML(data, color) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 100%;
         }
         .wrapper {
         background-color: ${colors[color].wrapperBackground};
         padding-top: 100px;
         }
         body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         main {
         background-color: #E9EDEE;
         height: auto;
         padding-top: 30px;
         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 2.5em;
         }
         h3 {
         font-size: 2em;
         }
         h4 {
         font-size: 1.5em;
         }
         h5 {
         font-size: 1.3em;
         }
         h6 {
         font-size: 1.2em;
         }
         .photo-header {
         position: relative;
         margin: 0 auto;
         margin-bottom: -50px;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[color].headerBackground};
         color: ${colors[color].headerColor};
         padding: 10px;
         width: 95%;
         border-radius: 6px;
         }
         .photo-header img {
         width: 250px;
         height: 250px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -75px;
         border: 6px solid ${colors[color].photoBorderColor};
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
         }
         .photo-header h1, .photo-header h2 {
         width: 100%;
         text-align: center;
         }
         .photo-header h1 {
         margin-top: 10px;
         }
         .links-nav {
         width: 100%;
         text-align: center;
         padding: 20px 0;
         font-size: 1.1em;
         }
         .nav-link {
         display: inline-block;
         margin: 5px 10px;
         }
         .workExp-date {
         font-style: italic;
         font-size: .7em;
         text-align: right;
         margin-top: 10px;
         }
         .container {
         padding: 50px;
         padding-left: 100px;
         padding-right: 100px;
         }
         .row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 20px;
           margin-bottom: 20px;
         }
         .card {
           padding: 20px;
           border-radius: 6px;
           background-color: ${colors[color].headerBackground};
           color: ${colors[color].headerColor};
           margin: 20px;
         }
         
         .col {
         flex: 1;
         text-align: center;
         }
         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }
         @media print { 
          body { 
            zoom: .75; 
          } 
         }
      </style>
      <body>
        <div class="main">
         <div class="wrapper">
          <div class="photo-header">
            <img src="${data.avatar_url}">
            <h1>Hi!</h1>
            <h2>My name is ${data.name}!</h2>
            <div class="links-nav">
              <nav>
                <a href="" class="nav-link"> ${data.location} </a>
                <a href="${data.html_url}" class="nav-link">Github</a>
                <a href="${data.blog}" class="nav-link">Portfolio</a>
              </nav>
            </div>
          </div>
          <div class="container">
            <h3>${data.bio}</h3>
            <div class="row">
              <div class="card col">
                <h4>Public Repositories</h4>
                <h5>${data.public_repos}</h5>
              </div>
              <div class="card col">
                <h4>Followers</h4>
                <h5>${data.followers}</h5>
              </div>
            </div>
            <div class="row">
              <div class="card col">
                <h4>GitHub Stars</h4>
                <h5>5</h5>
              </div>
              <div class="card col">
                <h4>Following</h4>
                <h5>${data.following}</h5>
              </div>
            </div>
            
          </div>
         </div>
        </div>
      </body>
      `;
}

module.exports = {
  generateHTML: generateHTML,
  colors: colors
};
