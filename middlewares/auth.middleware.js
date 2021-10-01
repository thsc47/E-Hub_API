const jwt = require("jsonwebtoken");
const bcript = require("bcryptjs");

class Auth {
  execute(req, res, next) {
    const auth = req.get("Authorization");
    if(!auth){
        throw new Error("Request without token")
    }
    const [ ,token] = auth.split(" ")
    try {
        
    } catch (error) {
        
    }
  }
}
