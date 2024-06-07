import bcryptjs from "bcryptjs";
import { generarToken } from "../ayudas/funciones.js";
import ModeloUsuario from "../modelos/modeloUsuario.js";

const ControladorInicioSesion = {
    iniciarSesion: async (solicitud, respuesta) => {
      try {
        const { username, password } = solicitud.body;
        const usuarioEncontrado = await ModeloUsuario.findOne({
            correo: username,
            
            /* console log para validar correo y contraseña */
            /* no esta encriptando la contraseña */
            
        });
        const contrasenaValidada = await bcryptjs.compare(
            password,
            usuarioEncontrado.contrasena
        );
        /* console.log(contrasenaValidada); */
            if (contrasenaValidada) {
                const token = await generarToken({
                  id: usuarioEncontrado._id,
                  name: usuarioEncontrado.nombre,
                });
                respuesta.json({
                  resultado: 'bien',
                  mensaje: 'acceso permitido',
                  datos: token,
                });
        } else {
          respuesta.json({
            resultado: 'mal',
            mensaje: 'acceso denegado',
            datos: null,
          });
        }
      } catch (error) {
        respuesta.json({
          resultado: 'mal',
          mensaje: 'ocurrió un error al iniciar sesión',
          datos: error,
        });
      }
    },
  };


export default ControladorInicioSesion;