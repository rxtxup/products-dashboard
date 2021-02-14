var express = require('express');
var router = express.Router();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

router.get('/', function (req, res, next) {
    // res.send('respond with a resource');
    if (req.session.user && req.session.password) {
        // console.log('hello');
        return res.redirect('/')
    }
    res.render('login');
});

router.post('/', function (req, res, next) {
    if (req.body.user && req.body.password) {
        // console.log(req.body.user);
        req.session.user = req.body.user;
        req.session.password = req.body.password;
        req.session.save(function () {
            return res.redirect('/');
        });
    } else {
        res.render('login');
    }
    
});

module.exports = router;
