const efunction = require("express")
const cors = require("cors")
const AuthRoute = require("./routes/authRoute.js")
const ProductsRoute = require("./routes/productsRoute.js")

const connectDB = require("./config/mongodb.js")
const expressobject = efunction();

expressobject.use(cors());
expressobject.use(efunction.json());
expressobject.use("/api/auth" , AuthRoute );
expressobject.use("/api/products" , ProductsRoute );


expressobject.listen(4936, (req, resp) => {
    console.log("server started on port 4936")
    connectDB();
})