const mongoose = require('mongoose')

const waitersSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const waiterCreated = mongoose.model('Waiter', waitersSchema)

module.exports = { waiterCreated }
