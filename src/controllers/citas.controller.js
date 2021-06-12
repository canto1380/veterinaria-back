const Citas = require('../models/Citas');
const citasController ={}

/** Agregar nueva cita **/
citasController.nuevaCita = async (req,res,next) => {
    try {
        const cita = new Citas(req.body);
        await cita.save();
        res.status(201).json({mensaje: 'Cita agregada con exito'})
    } catch (error) {
        res.status(500).json({mensaje:"No se pudo agregar la cita"})
        next();
    }
}

/** OBTENER TODAS LAS CITAS **/
citasController.obtenerCitas = async(req, res) => {
    let order = req.query.order ? req.query.order : 'desc'
    let sortBy = req.query.sortBy ? req.query.sortBy : 'createdAt'
    try {
        await Citas.find()
        .sort([[sortBy, order]])
        .populate({path:'idPaciente'})
        .exec((err, cita)=>{
            if(err){
                res.status(404).json({mensaje:"Error al listar las citas 1"})        
            } else{
                res.json(cita)
            }
        })
    } catch (error) {
        res.status(404).json({mensaje:"Error al listar las citas"})
    }
}

/** OBTENER UN ID **/
citasController.obtenerID = async (req, res, next) => {
    try {
        const cita = await Citas.findById(req.params.id)
        .populate({path:"idPaciente"})
        .exec((err, cita)=>{
            if(err){
                res.status(404).json({mensaje:"Error al buscar una cita"})
            } else {
                res.status(200).json(cita)
            }
        })
    } catch (error) {
        res.status(404).json({mensaje:"Error al buscar una cita"})
        next();
    }
}
/** ACTUALIZAR REGISTRO POR UN ID **/
citasController.actualizarCita = async (req, res, next) => {
    try {
        await Citas.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensaje:"Cita actualizada con exito"})
    } catch (error) {
        res.status(404).json({mensaje:"No se pudo actualizar"})
    }
}
/** ELIMINAR CITA **/
citasController.eliminarCita = async (req, res, next) => {
    try {
        await Citas.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje:"Cita eliminada"})
    } catch (error) {
        res.status(500).json({mensaje:"No se pudo eliminar"})
        next();
    }
}
export default citasController