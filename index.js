const express = require('express')
const app = express()
const config = require('./config/appConfig');

/*
참고 URL: https://mongoosejs.com/docs/api/connection.html#connection_Connection
mongoose
*/
const mongoose = require('mongoose');
const { UserInfo } = require('./models/User');
mongoose.connect(config.mongoDBURI)
.then(() => console.log("MongoDB Connection Success!!"))
.catch(err => console.log('mongoose Error: ', err));

/*
app.all()
특정 경로에 대한 미들웨어 추가 용도로 기재
*/
app.all('/api/*', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

/*
참고 URL: https://expressjs.com/ko/guide/routing.html
route & router
별도 router 분리
*/
const routeUser = require("./routes/user");
app.use("/api/routeUser", routeUser);

app.route('/info')
  .get((req, res) => {
    res.send("route get!" + config.infoStr);
  })
  .post((req, res) => {
    res.send("route post!" + config.infoStr);
  })
  .put((req, res) => {
    res.send("route put!" + config.infoStr);
  })

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(config.expressPORT, () => {
  console.log(`Example app listening at http://localhost:${config.expressPORT}`)
})