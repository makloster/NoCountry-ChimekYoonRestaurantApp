const express = require('express')
const {
  getOrders,
  newOrder,
  detailOrder,
  updateOrder,
  deleteOrder
} = require('./orders.controller')
const orderRouter = express.Router()

orderRouter
  .route('/')
  .get(getOrders)
  .post(newOrder)

orderRouter
  .route('/detail/:id')
  .get(detailOrder)
  .patch(updateOrder)
  .delete(deleteOrder)

module.exports = { orderRouter }
