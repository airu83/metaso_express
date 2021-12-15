const express = require('express')
const app = express()
const port = 3000

const routes = require("./routes/user");
app.use("/routerUser", routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const infoStr = `<br /><br />
This is info<br /><br />
use skill list:<br />
nvm, node, express, router
`;
app.route('/info')
  .get((req, res) => {
    res.send("route get:" + infoStr);
  })
  .post((req, res) => {
    res.send("route post:" + infoStr);
  })
  .put((req, res) => {
    res.send("route put:" + infoStr);
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})