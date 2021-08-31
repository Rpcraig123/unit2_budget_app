const { Schema } = require('mongoose')

const Payment = new Schema(
  {
    year: { type: String, required: true },
    month: { type: String, required: true },
    description: { type: String, required: true },
    ammount: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Payment