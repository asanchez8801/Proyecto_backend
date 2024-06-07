import express from "express";
import morgan from "morgan";
import enrutadorUsuarios from "./src/rutas/rutaUsuarios.js";
import enrutadorInicioSesion from "./src/rutas/rutaInicioSesion.js";


 const servidor = express();
 
 servidor.use(morgan("dev"));
 servidor.use(express.json());
 servidor.use("/usuarios", enrutadorUsuarios);
 servidor.use("/inicio-sesion", enrutadorInicioSesion);
 
 //ruta raiz 
 servidor.get("/", (solicitud , respuesta)=>{
  respuesta.status(404).send(
  "No Encontrado"
  );
 });
 
 //exportar el archivo 
 export default servidor;