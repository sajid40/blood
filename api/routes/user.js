const express = require('express')
const router = express.Router();
const {register, allGet, Log } = require('../controller/user.js');
router.post('/register', register);
router.get('/get', allGet);
router.post('/login', Log);
module.exports = router