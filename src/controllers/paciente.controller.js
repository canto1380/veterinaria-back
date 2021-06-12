import Paciente from '../models/Paciente';
const pacienteController ={}

/** AGREGAR NUEVO PACIENTE **/
pacienteController.nuevoCliente = async (req, res, next) => {
    const paciente = new Paciente(req.body);    //Nueva instancia de paciente, a la cual se le pasa los datos con req.body
    try {
        await paciente.save();
        res.json({ mensaje: 'Cliente agregado correctamente'});
    } catch (error) {
        res.status(500).json({mensaje: "Error al agregar un paciente nuevo"})
        next();   
    }
}

/** OBTENER LOS PACIENTES **/
pacienteController.obtenerPacientes = async (req, res, next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes)
    } catch (error) {
        res.status(404).json({mensaje: "Error al listar los pacientes"}) 
        next();
    }

}

/** OBTENER UN ID **/
pacienteController.obtenerID = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id)
        res.json(paciente)
    } catch (error) {
        res.status(500).json({mensaje:"Error al buscar un paciente por ID"})
        next()
    }
}
/** ACTUALIZAR REGISTRO POR UN ID **/
pacienteController.actualizarPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });
        res.json(paciente)
    } catch (error) {

        res.status(404).json({mensaje:"No se pudo actualizar"})
        next()
    }
}

pacienteController.eliminarPaciente = async (req, res, next) => {
    try {
        await Paciente.findOneAndDelete({_id: req.params.id});
        res.json({mensaje: 'Paciente eliminado'})
    } catch (error) {
        res.status(404).json({mensaje:"No se pudo eliminar"})
        next(); 
    }
}
export default pacienteController