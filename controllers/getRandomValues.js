const asyncHandler = require('express-async-handler')
const crypto = require('crypto')

//
const getRandomValues = (async (req, res) => {
  const length = req.query.length
  const randomValues = crypto.getRandomValues(new Uint8Array(length))
  res.status(200).json({ randomValues: randomValues })
})

exports.getRandomValues = getRandomValues
