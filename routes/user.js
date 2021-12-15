const express = require('express');
const router = express.Router();
const appConfig = require('../config/appConfig');

const { UserInfo } = require('../models/User');
router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.route('/')
  .get((req, res) => {
    res.send("express router() get!" + config.infoStr);
  })
  .post((req, res) => {
    res.send("express router() post!" + config.infoStr);
  })
  .put((req, res) => {
    res.send("express router() put!" + config.infoStr);
  })

/*
참고 URL: https://mongoosejs.com/docs/populate.html#saving-refs
*/
router.post('/add', (req, res) => {
    const user = new UserInfo(req.body);
    user.save((err, userSet, next) => {
        if (err) return res.json({ isSuccess: false, err })
        return res.status(200).json({
            isSuccess: true,
            UserInfo: userSet
        })
        next();
    })
})

const tempCondition = {"password": "12345"};
router.get('/find', (req, res) => {
    UserInfo.find(tempCondition,(err, userInfos, next) => {
        if (err) return res.json({ isSuccess: false, err })
        return res.status(200).send({
            isSuccess: true,
            UserInfo: userInfos
        })
        next();
    })
})

module.exports = router;