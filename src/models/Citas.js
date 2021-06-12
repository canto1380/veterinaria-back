import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const citasSchema = new Schema ({
    
    sintomas: {
        type: String,
        trim: true,
        required: true,
        maxLength:100
    },
    fecha: {
        type: String,
        trim: true,
        required: true
    },
    hora: {
        type: String,
        trim: true,
        required: true
    },
    diagnostico: {
        type: String,
        trim: true,
        default:"---",
        maxLength:100
    },
    estado: {
        type: String,
        trim: true,
        default: "No atendida"
    },
    idPaciente: {
        type: Schema.Types.ObjectId,
        ref: "Paciente",
        required: true
    }
}, {timestamps:true})

module.exports = mongoose.model("Citas", citasSchema)