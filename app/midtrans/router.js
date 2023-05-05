var express = require('express');
var router = express.Router();
const { generateProduct,payment ,cobabayar,callbackPayement} = require('./controller');
// /* GET home page. */
// const { isLoginAdmin } = require('../middleware/auth')

// router.use(isLoginAdmin)
router.post('/payment', payment);
router.get('/callbackPayement', callbackPayement);

module.exports = router;
