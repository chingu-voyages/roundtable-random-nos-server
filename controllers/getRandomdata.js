const asyncHandler = require('express-async-handler')

const getRandomdata = asyncHandler(async (req, res) => {
  console.log("I'm now awake")
  res.status(200).json({ status: "Awake" });
})

exports.getRandomdata = getRandomdata
