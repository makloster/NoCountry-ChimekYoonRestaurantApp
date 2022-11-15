const express = require("express")
const { viewsRouter } = require("../apiServices/views/views.routes")



const router = express.Router()

//Endpoints



// for rendering the public folder
router.use("/", viewsRouter)


module.exports = { router }