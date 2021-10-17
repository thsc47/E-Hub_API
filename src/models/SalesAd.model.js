const { Schema, model } = require('mongoose')

const salesAdSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: [
    {
      pending: { type: Date, default: null },
      finished: { type: Date, default: null }
    }
  ],
  title: { type: String, required: true },
  category: String,
  value: { type: Number },
  description: { type: String, min: 80, max: 9000 },
  photos: [{ photo: { type: String } }],

  manufacturer: { type: String },
  used: false
})

module.exports = model('salesAD', salesAdSchema)
