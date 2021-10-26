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
  price: { type: Number },
  description: { type: String, min: 80, max: 9000 },
  files: [{  type: String  }],
  manufacturer: { type: String },
  used: {type: Boolean, default: false},
  email: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number, required: true },
},
{
  timestamps: true
})

module.exports = model('salesAD', salesAdSchema)
