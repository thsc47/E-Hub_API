const { Schema, model } = require("mongoose");

const salesAdSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  status: [
    {
      pending: { type: Date, default: null },
      finished: { type: Date, default: null },
    },
  ],
  title: { type: String, required: true },
  categorie: {
    enum: [
      "Real Estate",
      "Autos & Parts",
      "For your home",
      "Electronics and Mobiles",
      "Music & Hobbies",
      "Sports and Leisure",
      "Children's goods",
      "Pets & Animals",
      "Fashion and beauty",
      "Agro and industry",
      "Trade and office",
      "Services",
      "Jobs",
    ],
    type: String,
    maxItems: 6
  },
  value: { type: Number },
  description: { type: String, min: 80, max: 9000 },
  photos: [{ photo: { type: String } }],
  
  manufacturer: { type: String },
  useed: false,
});

module.exports = model("salesAD", salesAdSchema);
