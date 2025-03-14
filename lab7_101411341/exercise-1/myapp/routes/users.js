var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// Use body-parser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/user', function(req, res, next) {
  console.log(req.body);
  res.send('POST received!');
});

module.exports = router;
