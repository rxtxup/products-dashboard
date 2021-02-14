var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');



router.get('/', function (req, res, next) {

  if (req.session.user && req.session.password) {
    return res.render('index', { title: 'Express', user: req.session.user });
  }
  res.redirect('/login');
  // console.log(req.session.cookie);

});

router.get('/logout', function (req, res) {
  req.session.destroy(function () {
    res.redirect('/login');
  });
});

router.post('/createuser', function (req, res) {
  if (req.session.user && req.session.password) {

    if (req.body.name && req.body.login && req.body.password) {
      req.db.query(`INSERT INTO users (name, login, password) VALUES ('${req.body.name}', '${req.body.login}', '${req.body.password}')`,
        (error, results) => {
          if (error) {
            throw error
          }
          console.log(results);
          // res.status(200);
          return res.redirect('/');
        });
    }
  }
});

module.exports = router;
