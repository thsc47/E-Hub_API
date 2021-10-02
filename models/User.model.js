const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    CPF: { type: Number, required: true },
    photo: { type: String },
    street: { type: String, required: true },
    number: { type: Number, required: true },
    district: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: Number, required: true },
    wishlist: [
      {
        anuncioID: { type: String, required: true },
      },
    ],
    AdvertisementID: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
