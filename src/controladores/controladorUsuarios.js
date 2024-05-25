const ControladorUsuarios = {

    crearUsuario: async (solicitud , respuesta)=>{
    try {
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
                                                                     
    respuesta.json({mensaje: "Crear Usuario Works!"})   
    } catch (error) {
        respuesta.json({error: true, mensaje: "Ocurrió un error al crear usuario"})
        console.log(error);
    }},
    
    /* ----------------------------------------------------- */ 
       leerUsuario: async (solicitud , respuesta)=>{
       try {
        console.log(solicitud.params.id)
        respuesta.json({mensaje: "leer Usuario Works!"})
       } catch (error) {
        respuesta.json({error: true, mensaje: "Ocurrió un error al leer usuario"})
        console.log(error);
       }
       },
       
    /* ----------------------------------------------------- */ 
       leerUsuarios: async (solicitud , respuesta)=>{
       try {
        respuesta.json({mensaje: "Leer todos los Usuarios Works!"})
       } catch (error) {
        respuesta.json({error: true, mensaje: "Ocurrió un error al leer todos los usuarios"})
        console.log(error);
       }
       },
    /* ----------------------------------------------------- */    
       actualizarUsuario: async (solicitud , respuesta)=>{
        try {
            console.log(solicitud.params.id)
            console.log("solicitud: ", solicitud.body);
        
            respuesta.json({mensaje: "Actualizar Usuario Works!"});
        } catch  {
            respuesta.json({error: true, mensaje: "Ocurrió un error al actualizar el usuario"})
        console.log(error);
        }
       },
    /* ----------------------------------------------------- */    
       eliminarUsuario: async (solicitud , respuesta)=>{
         try {
        console.log(solicitud.params.id)
        respuesta.json({mensaje: "Eliminar Usuario Works!"})
       } catch (error) {
        respuesta.json({error: true, mensaje: "Ocurrió un error al eliminar el usuario"})
        console.log(error);
       }
       },
}

export default ControladorUsuarios;

/* const usuario={
    nombres: "Albeiro",
    apellidos: "Sánchez",
    correo: "jasanchez8801@gmail.com",
    contrasena: "12345",
    confirmarContrasena: "12345",
    edad: "36",
    telefono: "3003150482",
    nomContactoEmergencia: "Carolina Amarillo",
    numContactoEmergencia:"3118992100",
    parentezcoContacto: "esposa",
    direccion: "tv 49 # 59c-73",
    fechaNacimiento: "28-01-1988",
    genero: "Masculino",
    pais: "Colombia",
    ciudad: "Bogotá",
    nivEscolar: "Profesional Universitario",
    profesion: "Ingeniero Sistemas"
}
 */