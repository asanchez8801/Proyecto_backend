import { Schema, Types, model } from "mongoose";

const esquemaUsuario = new Schema(
{
    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    correo: {type: String, required: true},
    contrasena: {type: String, required: true},
    confirmarContrasena: {type: String, required: true},
    edad: {type: Number, required: true},
    telefono: {type: Number, required: true},
    nomContactoEmergencia: {type: String, required: true},
    numContactoEmergencia: {type: Number, required: true},
    parentezcoContacto: {type: String, required: true},
    direccion: {type: String, required: true},
    fechaNacimiento: {type: Date, required: true},
    genero: {type: String, required: true},
    pais: {type: String, required: true},
    ciudad: {type: String, required: true},
    nivEscolar: {type: String},
    profesion: {type: String},
})

export default model("Usuario", esquemaUsuario);