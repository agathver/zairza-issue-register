var express = require('express');
var router = express.Router();
var User = require('../models/user');
var router = express.Router();

module.exports = router;

// function authenticateUser(req,res,next){
//   if(req.session){
//     if(req.session.phone && req.session.name && req.session.password){
//       next()
//     }
//     else{
//       res.redirect('/')
//     }
//   }
//   else{
//     res.redirect('/')
//   }
// }

/* GET users listing. */
router.post('/login',function(req,res,next) {
  if(!req.body){
    res.send("Please send some data");
  }
  issueRegister.findone({phone: req.body.phone}, function(err, found_user){
    if(err){
      res.send(err);
    }
    else {
      if(found_user){
        res.send(found_user)
      }
      else {
        var newUser = new User({
          name: req.body.name,
          phone: req.body.phone,
          password: req.body.password
        });
        newUser.save();
        console.log(newUser);
        res.send(newUser)
      }
    }
  });
});

// router.post('/users/dashboard',function(req,res,next) {
//   res.render('dashboard')
// })
//
router.get('/');
module.exports = router;
