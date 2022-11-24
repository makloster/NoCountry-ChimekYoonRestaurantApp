import mongoose from "mongoose"

const categoriesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const categoryCreated = mongoose.model("Category", categoriesSchema)

export default categoryCreated
