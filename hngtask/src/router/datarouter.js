const express = require('express')
const getData = require('../controller/datacontoller')

const router = express.Router()

router.get('/', getData)


module.exports = router