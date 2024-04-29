const jwt = require("jsonwebtoken");
const user= require("../models/user");
const config = require("../config");

const requireAuth = async (req, res, next) =>{
    try{
        console.log("header", req.headers);
        const token = req.headers.authorization;
        console.log("token", token);
        //Check if th token exists
        if(!token){
         return res.status(401).json({error: "Unauthorized"});
        }
        //Verify the token
        const decodedToken= await jwt.verify(token, config.jwtSecret);
        console.log("decoded", decodedToken);

            //Find the user by ID from the decoded token
        const user= await user.findById(decodedToken.userId);
        console.log("user", user);
        if(!user){
            return res.status(401).json({error: "Unauthorized"});
        }

        //Attach the user to the request object
        req.user= user;
        next(); //continue to the next middleware/route handler
    } 
    catch(err){
    console.error(error);
    return res.status(401).json({error: "Unauthorized"});
 }
};

module.exports= {requireAuth}