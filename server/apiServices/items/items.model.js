const mongoose = require('mongoose')

const itemsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: false,
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
    inMenu: {
      type: Boolean,
      required: true,
      default: false
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true
      }
    ]
  },
  {
    timestamps: true,
  }
)

const itemCreated = mongoose.model('Item', itemsSchema)
export default itemCreated
