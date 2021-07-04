const mongoose = require ('mongoose')
const schema = mongoose.Schema;

const turnosSchema = schema (
    {
        hora:{
            type: String,
            trim: true
        }
    }
)

module.exports = mongoose.model("Turnos", turnosSchema)