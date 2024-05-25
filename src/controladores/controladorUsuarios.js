const ControladorUsuarios = {

    crearUsuario: async (solicitud , respuesta)=>{
    try {
    console.log("solicitud: ", solicitud.body);
    
    if (solicitud.body.nombre === "") throw new Error("Faltan el campo Nombres")
    if (solicitud.body.apellidos === "") throw new Error("Faltan el campo Apellidos")
    if (solicitud.correo === "") throw new Error("Faltan el campo Correo")
    if (solicitud.body.contrasena === "") throw new Error("Faltan el campo contraseña")
    if (solicitud.body.confirmarContrasena === "") throw new Error("Faltan el campo confirmar Contraseña")
    if (solicitud.body.edad === "") throw new Error("Faltan el campo edad")
    if (solicitud.body.telefono === "") throw new Error("Faltan el campo telefono")
    if (solicitud.body.nomContactoEmergencia === "") throw new Error("Faltan el campo Nombre contacto emergencia")
    if (solicitud.body.numContactoEmergencia === "") throw new Error("Faltan el campo Numero contacto emergencia")
    if (solicitud.body.parentezcoContacto === "") throw new Error("Faltan el campo parentezco contacto emergencia")
    if (solicitud.body.direccion === "") throw new Error("Faltan el campo dirección")
    if (solicitud.body.fechaNacimiento === "") throw new Error("Faltan el campo fecha de Nacimiento")
    if (solicitud.body.genero === "") throw new Error("Faltan el campo género")
    if (solicitud.body.pais === "") throw new Error("Faltan el campo país")
    if (solicitud.body.ciudad === "") throw new Error("Faltan el campo ciudad")
    if (solicitud.body.nivEscolar === "") throw new Error("Faltan el campo Nivel Escolar")
    if (solicitud.body.profesion === "") throw new Error("Faltan el campo profesión")
                                                                        
    respuesta.json({mensaje: "POST Usuario Works!"})
        
    } catch (error) {
        respuesta.json({error: true, mensaje: "Ocurrio un error al crear usuario"})
        console.log(error);
    }},
       
       leerUsuario: (solicitud , respuesta)=>{
        respuesta.json({mensaje: "GET Usuario Works!"})
       },
       
       leerUsuarios: (solicitud , respuesta)=>{
        respuesta.json({mensaje: "GET Usuarios Works!"})
       },
       
       actualizarUsuario: (solicitud , respuesta)=>{
        respuesta.json({mensaje: "PUT Usuario Works!"})
       },
       
       eliminarUsuario: (solicitud , respuesta)=>{
        respuesta.json({mensaje: "DELETE Usuario Works!"})
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