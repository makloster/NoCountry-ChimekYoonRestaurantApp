const mongoose = require('mongoose')

const categoriesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
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

const categoryCreated = mongoose.model('Category', categoriesSchema)

export default categoryCreated
