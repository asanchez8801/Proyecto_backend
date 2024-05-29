import express from "express";
import enrutadorUsuarios from "./src/rutas/rutaUsuarios.js";
import morgan from "morgan";

 const servidor = express();
 
 servidor.use(morgan("dev"));
 servidor.use(express.json());
 servidor.use("/usuarios", enrutadorUsuarios);
 
 //ruta raiz 
 servidor.get("/", (solicitud , respuesta)=>{
  respuesta.status(404).send(
  "No Encontrado"
  );
 });
 
 //exportar el archivo 
 export default servidor;