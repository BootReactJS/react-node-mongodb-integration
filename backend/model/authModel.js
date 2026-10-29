
const CustomerModelClass =  require("../schema/customerSchema.js");
const userSchemaClass =  require("../schema/userSchema.js");

function insertData( newuser ){
    return userSchemaClass.create( newuser )
}


function checkUser( userEmail  ){
    console.log(userEmail)
    var b =  userSchemaClass.findOne( { email: userEmail } )
    return userSchemaClass.findOne( { email: userEmail } )
 }
 
module.exports = {insertData, checkUser} 