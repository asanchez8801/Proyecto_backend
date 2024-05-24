import express from "express";
import enrutadorUsuarios from "./rutas/rutaUsuarios.js";

 const servidor = express();
 
 servidor.use("/usuarios", enrutadorUsuarios);
 
 //ruta raiz 
 servidor.get("/", (solicitud , respuesta)=>{
  respuesta.status(404).send(
  "No Encontrado"
  );
 });
 
 //exportar el archivo 
 export default servidor;