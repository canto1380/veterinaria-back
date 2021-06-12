import {Router} from 'express'
import pacienteController from '../controllers/paciente.controller';

const router = Router()


    /** AGREGAR NUEVOS CLIENTES **/
    router.post('/addPaciente',
        pacienteController.nuevoCliente
    )

    /** OBTENER LOS REGISTROS DE LA DB **/
    router.get('/listPaciente',
        pacienteController.obtenerPacientes
    )

    /** OBTENER UN PACIENTE ESPECIFICO POR ID */
    router.get('/paciente/:id',
        pacienteController.obtenerID
    )

    /** ACTUALIZAR UN REGISTRO CON UN ID ESPECIFICO **/
    router.put('/updatePaciente/:id',
        pacienteController.actualizarPaciente
    )

    /** ELIMINAR REGISTRO POR UN ID **/
    router.delete('/removePaciente/:id',
        pacienteController.eliminarPaciente
    )

    export default router
