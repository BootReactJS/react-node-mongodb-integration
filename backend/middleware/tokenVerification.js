const jwt = require("jsonwebtoken");
const secret_key = "hjgjhbgkjdxfdzbnbjb";

function verifyToken(request, response, next){
    //console.log("verifyToken ", request.headers["authorization"])
   // response.send("verifyToken ", request.headers["Authorization"])
   let token
    if (!request.headers["authorization"]) {
        response.send({ ok: false, message: "Token is missing" });
     }else{
        token = request.headers["authorization"].slice(7)
       // console.log(token)
        jwt.verify(token, secret_key, (error, data) =>{
            if(error){
                response.send({ ok: false, message: "invalid Token" });

            }else{
                next();
            }
        })

     }



}

module.exports = verifyToken;