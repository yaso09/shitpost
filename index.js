const express = require('express');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

let api = "https://api.thedailyshitpost.net/random";

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index");
});

app.get("/shitloop", (req, res) => {
  fetch(api)
    .then(dat => dat.json())
    .then(json => {
      res.render("shitloop", {
        url: json.url
      });
    })
})


app.listen(port, () => {
  // console.log(`Listening on http://localhost:${port}`);
})


