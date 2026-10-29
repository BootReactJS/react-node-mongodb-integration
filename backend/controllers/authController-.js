const { insertData, checkUser } = require("../model/authModel")

const { registerUser, loginUser } = require("../model/userModel")

const jwt = require("jsonwebtoken");
const secret_key = "hjgjhbgkjdxfdzbnbjb"

function signupController(request, response){
    insertData(request.body)
    .then( (data)=>{
        response.send( {ok: true, message: "Created account", data: data} );
    }).catch( (error) => {
        response.send( {ok: false, message: "failed to create account"} );
    });

}

function signinController(request, response){
    const data = request.body;
    const requestEmail = data.email;
   console.log(data.password)
    checkUser( requestEmail )
    .then( ( user )=>{
        
            if( data.password === user.password){
                let token;
                jwt.sign({ email: user.email }, secret_key, (error, token) => {
                if (error) {
                    res.send({
                    ok: false,
                    message: "failed to create token",
                    statusCode: 403,
                    });
                } else {
                    response.status(200).send({
                    ok: true,
                    message: "valid user.......................................................................",
                    data: user,
                    token: token,
                    });
                }
            });

           // response.status(200).send( {ok:true,   statusCode: 200,message: "user is valid", data: user} )
        }else{
           response.status(401).send( {ok:false,  statusCode: 401, message: "password is incorrect"} )
        }
    })
    .catch( (error)=>{
      //  console.log(error)
        console.log("user is ==== invalid")
        response.status(401).send( {ok:false, statusCode: 401, message: "user is ==== invalid"} )
    })
    }

    function loginController(request, response){
    //registerUser(request, response)
    const data = request.body;
    const requestEmail = data.email;
    loginUser( request, response )
    .then( ( user )=>{
        
            if( data.password === user.password){
                let token;
                jwt.sign({ email: user.email }, secret_key, (error, token) => {
                if (error) {
                   return response.status(403).send({
                        ok: false,
                        message: "failed to create token",
                         statusCode: 403,
                     });
                }
                return response.status(200).send({
                    ok: true,
                    message: "valid user",
                    data: user,
                    token: token,
                });
            })
            }
        })
        .catch( (error)=>{
      console.log(error)
        console.log("loginController : user is ==== invalid")
        response.status(401).send( {ok:false, statusCode: 401, message: "user is ==== invalid"} )
    })
}



module.exports = {signupController, signinController, loginController} ;