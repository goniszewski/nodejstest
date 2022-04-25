var express = require('express')
var router = express.Router()
var users = require('../models/users')

router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.get('/:user_id', function (req, res, next) {
  var user_id = parseInt(req.params.user_id, 10) || 0
  console.log('user_id:', user_id)
  if (user_id === 1) {
    console.log(users.get);
    const user = users.get(user_id);
    console.log({user})
    res.send('user info for user: \n' + JSON.stringify(user, null, 2))
  } else {
    res.send('Invalid user id.')
  }
})

module.exports = router
