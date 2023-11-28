const express = require('express')
const { getRandomdata } = require('../controllers/getRandomdata')


const router = express.Router();

router.route('/getRandomdata')
    .get(getRandomdata)

module.exports = router