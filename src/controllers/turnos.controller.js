const Turnos = require ('../models/Turnos')

/** Nuevo **/
exports.nuevoTurno = async (req,res, next) =>{
    const turno = new Turnos(req.body);
    try {
        await turno.save();
        res.json({mensaje: "turno guardado con exito"})
    } catch (error) {
        console.log(error)
        next();
    }
}

exports.listarTurnos = async (req, res, next) => {
    try {
        const turnos = await Turnos.find({});
        res.json(turnos)
    } catch (error) {
        console.log(error)
        next();
    }
}
exports.eliminarTurno = async (req, res, next) => {
    try {
        await Turnos.findOneAndDelete({_id: req.params.id});
        res.json({mensaje: 'Turno eliminado'})
    } catch (error) {
        console.log(error)
        next(); 
    }
}