const { Schema, model } = require("mongoose");

const chatAsyncSchema = new Schema(
  {
    sender: {type: Schema.Types.ObjectId, ref: "User", required: true},
    reciver: {type: Schema.Types.ObjectId, ref: "User", required: true},
    AdvertisementID: {type: Schema.Types.ObjectId, ref: "salesAD", required: true},
    message: {type: String, required: true, min: 30, max: 2000},
  },
  {
    timestamps: true,
  }
);

module.exports = model("AsyncChat", chatAsyncSchema)