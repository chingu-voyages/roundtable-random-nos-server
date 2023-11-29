const express = require('express')
const { getRandomValues } = require('../controllers/getRandomValues')


const router = express.Router()

router.route('/getRandomValues')
    .get(getRandomValues)

module.exports = router