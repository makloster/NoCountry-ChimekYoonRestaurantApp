const Order = require('./orders.model')

const getOrders = async (req, res) => {
  try {
    const orderList = await Order.find().populate('items')
    res.json(orderList)
  } catch (error) {
    console.log(error)
  }
}

// ToDo
const newOrder = async (req, res) => {
  const { orderID } = req.body
  const newOrder = await Order.findById(orderID)
  const order = new Order({
    books: book._id
  })
  order.comprador = req.usuario._id
  try {
    const orderAlmacenada = await order.save()
    book.order = book.order.concat(orderAlmacenada._id)
    await book.save()
    res.status(201).json(orderAlmacenada);
  } catch (error) {
    console.log(error)
  }
}

// ToDo
const detailOrder = async (req, res) => {
  try {
    const { id } = req.params
    const order = await Order.findById({ _id: id }).populate("books").populate("comprador")

    if (!order) {
      const error = new Error('No se encontró la orden')
      return res.status(404).json({ msg: error.message })
    }

    res.json(order)
  } catch (error) {
    console.log(error)
  }
}

const updateOrder = async (req, res) => {
  res.json({ msg: 'funciona' })
}

const deleteOrder = async (req, res) => {
  try {
    const ID = req.params.id
    const order = await Order.findOneAndDelete({ _id: ID })
    res.json({ order })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getOrders,
  newOrder,
  detailOrder,
  updateOrder,
  deleteOrder
}
