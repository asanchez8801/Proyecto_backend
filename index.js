"use strict";
 const express = require("express");
 
 const servidor = express();
 
 servidor.get("/", (solicitud , respuesta)=>{
  respuesta.json({
  saludo: "Hola Albeiro"
  })
 });
  
 servidor.listen(3000);
 console.log("corriendo servidor");