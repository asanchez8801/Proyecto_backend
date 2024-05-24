const ControladorUsuarios = {

    crearUsuario: (solicitud , respuesta)=>{
        respuesta.json({
        mensaje: "POST Usuario Works!"
        })
       },
       
       leerUsuario: (solicitud , respuesta)=>{
        respuesta.json({
        mensaje: "GET Usuario Works!"
        })
       },
       
       leerUsuarios: (solicitud , respuesta)=>{
        respuesta.json({
        mensaje: "GET Usuarios Works!"
        })
       },
       
       actualizarUsuario: (solicitud , respuesta)=>{
        respuesta.json({
        mensaje: "PUT Usuario Works!"
        })
       },
       
       eliminarUsuario: (solicitud , respuesta)=>{
        respuesta.json({
        mensaje: "DELETE Usuario Works!"
        })
       },
}

export default ControladorUsuarios;
