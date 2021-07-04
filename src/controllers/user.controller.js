import User from '../models/Users'
const userController ={}

userController.nuevoUser = async (req, res, next) => {
    try {
        const usuario = new User(req.body);
        await usuario.save();
        res.status(201).json({mensaje: "Usuario registrado con exito"})
    } catch (error) {
        res.status(500).json({mensaje: "Error al agregar un usuario"})
        next();
    }
}

/** Listar usuarios **/
userController.listarUser = async (req, res, next) => {
    try {
        const usuarios = await User.find({});
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(404).json({mensaje: "Error al listar usuarios"}) 
        next();
    }
}

/** Obtener un usuario por ID **/
userController.obtenerID = async (req,res,next) =>{
    try {
        const usuario = await User.findById(req.params.id)
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({mensaje:"Error al buscar un usuario por ID"})
        next();
    }
}

/** Actualizar registro **/
userController.actualizarUser = async (req, res, next) => {
    try {
        const usuario = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(usuario)   
    } catch (error) {
        res.status(404).json({mensaje:"No se pudo actualizar"})
        next();
    }
}

/**Eliminar usuario **/
userController.eliminarUser = async (req,res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('Eliminado')
    } catch (error) {
        res.status(404).json({mensaje:"No se pudo eliminar"})
        next();
    }
}

export default userController