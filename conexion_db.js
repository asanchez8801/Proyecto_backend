import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_ATLAS_URI).then((dato)=>{
    console.log("conectado a la db");
}).catch((error)=>{
    console.log("error de conexión a la db");
})