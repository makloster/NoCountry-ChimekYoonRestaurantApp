const mongoose = require('mongoose')

const categoriesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    item: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectID,
          ref: 'Item',
          required: true
        }
      }
    ]
  },
  {
    timestamps: true,
  }
)

const categoryCreated = mongoose.model('Category', categoriesSchema)

module.exports = {categoryCreated}
