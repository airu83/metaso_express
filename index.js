const express = require('express')
const app = express()
const port = 3000

/*
app.all()
특정 경로에 대한 미들웨어 추가 용도로 기재
*/
app.all('/api/*', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

/*
route & router
별도 router 분리
*/
const routeUser = require("./routes/user");
app.use("/api/routeUser", routeUser);

const infoStr = `
<br /><br />
This is info<br /><br />
use skill list:<br />
nvm, node, express, route, Router()
`;
app.route('/info')
  .get((req, res) => {
    res.send("route get!" + infoStr);
  })
  .post((req, res) => {
    res.send("route post!" + infoStr);
  })
  .put((req, res) => {
    res.send("route put!" + infoStr);
  })

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})