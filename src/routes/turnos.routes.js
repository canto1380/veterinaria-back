const express = require('express')
const router = express.Router()
const turnosController = require('../controllers/turnos.controller')

module.exports = function (){
    router.post('/addTurno',
        turnosController.nuevoTurno
    )

    router.get('/listTurnos',
        turnosController.listarTurnos
    )
    
    /** ELIMINAR UN TURNO POR UN ID **/
    router.delete('/removeTurno/:id',
        turnosController.eliminarTurno
    )
    return router;
}