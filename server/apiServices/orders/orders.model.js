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
      enum: ['Cacho', 'Pepe', 'Tito'], // cómo agregamos un array que se pueda cambiar? otro model?
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
        ref: 'Items'
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

const OrderCreated = mongoose.model('Order', orderSchema)
module.exports = { OrderCreated }
