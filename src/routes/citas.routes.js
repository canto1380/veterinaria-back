import {Router} from 'express' 
import citasController from '../controllers/citas.controller';

const  router = Router()
    /**Agregar nueva cita **/
    router.post('/addCita',
        citasController.nuevaCita
    )
    /** OBTENER LOS REGISTROS DE LA DB **/
    router.get('/listCita',
        citasController.obtenerCitas
    )

    /** OBTENER UN PACIENTE ESPECIFICO POR ID */
    router.get('/cita/:id',
        citasController.obtenerID
    )

    /** ACTUALIZAR UN REGISTRO CON UN ID ESPECIFICO **/
    router.put('/updateCita/:id',
        citasController.actualizarCita
    )

    /** ELIMINAR REGISTRO POR UN ID **/
    router.delete('/removeCita/:id',
        citasController.eliminarCita
    )

export default router