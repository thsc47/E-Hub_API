const { Schema, model } = require("mongoose");

const chatAsyncSchema = new Schema(
  {
    userID1: {type: Schema.Types.ObjectId, ref: "User", required: true},
    userID2: {type: Schema.Types.ObjectId, ref: "User", required: true},
    sender: {type: Schema.Types.ObjectId, required: true},
    AdvertisementID: {type: Schema.Types.ObjectId, ref: "salesAD", required: true},
    message: {type: String, required: true, min: 30, max: 2000},
  },
  {
    timestamps: true,
  }
);

module.exports = model("AsyncChat", chatAsyncSchema)