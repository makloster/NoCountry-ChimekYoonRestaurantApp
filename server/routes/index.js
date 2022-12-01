const express = require("express")
const { viewsRouter } = require("../apiServices/views/views.routes")
const { itemRouter } = require("../apiServices/items/items.routes")
const { userRouter } = require('../apiServices/users/users.routes')

const router = express.Router()

//Endpoints
router.use('/auth', userRouter)


// for rendering the public folder
router.use("/", viewsRouter)
router.use("/item", itemRouter)


module.exports = { router }
