import ModeloUsuario from "../modelos/modeloUsuario.js"

const ControladorUsuarios = {

    crearUsuario: async (solicitud , respuesta)=>{
    try {
     const nuevoUsuario = new ModeloUsuario(solicitud.body);
     const usuarioCreado = await nuevoUsuario.save();
     
    if(usuarioCreado.id){
    respuesta.json({
    resultado: "bien",
    mensaje: "usuario creado satisfactoriamente",
    id: usuarioCreado._id
    });
    }
    
    console.log("solicitud: ", solicitud.body);
    
    if (solicitud.body.nombre === "") throw new Error("Faltan el campo Nombres")
    if (solicitud.body.apellidos === "") throw new Error("Faltan el campo Apellidos")
    if (solicitud.correo === "") throw new Error("Faltan el campo Correo")
    if (solicitud.body.contrasena === "") throw new Error("Faltan el campo Contraseña")
    if (solicitud.body.confirmarContrasena === "") throw new Error("Faltan el campo confirmar Contraseña")
    if (solicitud.body.edad === "") throw new Error("Faltan el campo Edad")
    if (solicitud.body.telefono === "") throw new Error("Faltan el campo Teléfono")
    if (solicitud.body.nomContactoEmergencia === "") throw new Error("Faltan el campo Nombre Contacto Emergencia")
    if (solicitud.body.numContactoEmergencia === "") throw new Error("Faltan el campo Número Contacto Emergencia")
    if (solicitud.body.parentezcoContacto === "") throw new Error("Faltan el campo parentezco Contacto Emergencia")
    if (solicitud.body.direccion === "") throw new Error("Faltan el campo Dirección")
    if (solicitud.body.fechaNacimiento === "") throw new Error("Faltan el campo fecha de Nacimiento")
    if (solicitud.body.genero === "") throw new Error("Faltan el campo Género")
    if (solicitud.body.pais === "") throw new Error("Faltan el campo País")
    if (solicitud.body.ciudad === "") throw new Error("Faltan el campo Ciudad")
    if (solicitud.body.nivEscolar === "") throw new Error("Faltan el campo Nivel Escolar")
    if (solicitud.body.profesion === "") throw new Error("Faltan el campo Profesión")
                                                                       
    } catch (error) {
        respuesta.json({
            resultado: "mal",
            mensaje: "error al crear el usuario",
            datos: error  
    });
    }
},
    
    /* ----------------------------------------------------- */ 
       leerUsuario: async (solicitud , respuesta)=>{
       try {
        const usuarioEncontrado = await ModeloUsuario.findById(solicitud.params.id)
        if (usuarioEncontrado._id){
        respuesta.json({
        resultado: "bien",
        mensaje: "usuario leído",
        datos: usuarioEncontrado
        });
        }
       } catch (error) {
        respuesta.json({
            resultado: "Mal",
            mensaje: "ocurrio un error al leer el usuario",
            datos: error
            });
       }
       },
       
    /* ----------------------------------------------------- */ 
       leerUsuarios: async (solicitud , respuesta)=>{
       try {
        const todosLosUsuarios = await ModeloUsuario.find();
            respuesta.json({
            resultado: "bien",
            mensaje: "usuarios leídos",
            datos: todosLosUsuarios
            });
            
       } catch (error) {
        respuesta.json({
            resultado: "Mal",
            mensaje: "ocurrio un error al leer todos los usuario",
            datos: error
            });
       }
       },
    /* ----------------------------------------------------- */    
       actualizarUsuario: async (solicitud , respuesta)=>{
        try {
            const usuarioActualizado = await ModeloUsuario.findByIdAndUpdate(solicitud.params.id , solicitud.body);
            if (usuarioActualizado._id) {
            respuesta.json({
                resultado: "bien",
                mensaje: "usuario actualizado",
                datos: usuarioActualizado._id
                });
            }
        } catch  {
            respuesta.json({
                resultado: "Mal",
                mensaje: "ocurrio un error al actualizar el usuario",
                datos: error,
                });
        }
       },
    /* ----------------------------------------------------- */    
       eliminarUsuario: async (solicitud , respuesta)=>{
        try {
            const usuarioEliminado = await ModeloUsuario.findByIdAndDelete(solicitud.params.id)
            if (usuarioEliminado._id){
            respuesta.json({
            resultado: "bien",
            mensaje: "usuario Eliminado",
            datos: null
            });
            }
           } catch (error) {
            respuesta.json({
                resultado: "Mal",
                mensaje: "ocurrio un error al eliminar el usuario",
                datos: error
                });
           }
           },
}

export default ControladorUsuarios;

