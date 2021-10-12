const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    cpf: { type: Number, required: true },
    photo: { type: String, default: null },
    street: { type: String, required: true },
    number: { type: Number, required: true },
    district: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: Number, required: true },
    wishlist: [{ type: String, default: null }],
    SalesID: { type: Schema.Types.ObjectId, ref: 'salesAD', default: null },
  },
  {
    timestamps: true,
  }
)

module.exports = model('user', userSchema)
