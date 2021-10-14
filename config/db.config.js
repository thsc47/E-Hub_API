const mongoose = require("mongoose");

class dbConnect{
    async execute(){
        const connection = await mongoose.connect(process.env.ATLAS_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log(`DB connected: ${connection.connections[0].name}`)
    }
}

module.exports = new dbConnect();