const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
  {
    table: {
      type: Number,
      require: true,
      trim: true,
    },
    waiter: {
      type: String,
      enum: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Waiter'
      }],
      required: true
    },
    turn: {
      type: String,
      enum: ['Mañana', 'Tarde', 'Noche'], // consultar al cliente
      required: true
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
      }
    ],
    priceTotal: {
      type: Number,
      trim: true,
    },
    notes: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      enum: ['Pendiente', 'Pagado', 'Cancelado'],
      required: true,
      default: 'Pendiente'
    },
  }, {
  timestamps: true,
})

const Order = mongoose.model('Order', orderSchema)
module.exports = { Order }
