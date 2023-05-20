const mongoose = require("mongoose");

const MessageSchenma = new mongoose.Schema(
  {
    message: {
      text: { type: String, required: true },
    },
    users: Array,
    sender:{
        type:String,
        required:true
    }
    // sender: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Messages", MessageSchenma);
