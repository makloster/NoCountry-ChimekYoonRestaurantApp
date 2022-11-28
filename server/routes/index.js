const express = require("express")
const { viewsRouter } = require("../apiServices/views/views.routes")
const { userRouter } = require('../apiServices/users/users.routes')
const { orderRouter } = require('../apiServices/orders/orders.routes')

const router = express.Router()

//Endpoints
router.use('/auth', userRouter)
router.use('/orders', orderRouter)


// for rendering the public folder
router.use("/", viewsRouter)


module.exports = { router }
