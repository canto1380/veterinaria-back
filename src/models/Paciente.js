import mongoose, {Schema} from 'mongoose'

const pacienteSchema = new Schema ({
    nombrePaciente: {
        type: String,
        trim: true,          //Elimina los espacios en blanco innecesarios
        require: true
    },
    tipo:{
        type: String,
        require: true
    },
    nombre_propietario: {
        type: String,
        trim: true,
        require:true
    },
    apellido_propietario: {
        type: String,
        trim: true,
        require:true
    },
    telefono:{
        type: String,
        trim: true,
        minLength:10,
        maxLength:10
    },
    direccion:{
        type: String,
        trim: true
    }
}, { timestamps: true} 
);

module.exports = mongoose.model('Paciente', pacienteSchema)
// const Paciente = mongoose.model('Paciente', pacienteSchema)
// export default Paciente