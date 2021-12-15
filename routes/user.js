const express = require('express');
const router = express.Router();

const routerStr = `<br /><br />
This is info<br /><br />
use skill list:<br />
nvm, node, express, router
`;
router.route('/')
  .get((req, res) => {
    res.send("express router() get:" + routerStr);
  })
  .post((req, res) => {
    res.send("express router() post:" + routerStr);
  })
  .put((req, res) => {
    res.send("express router() put:" + routerStr);
  })

module.exports = router;