import {Router} from 'express'
import userController from '../controllers/user.controller'
import signinController from '../controllers/signin'

const router = Router()

    /* Ruta agregar usuario */
    router.post('/addUser', userController.nuevoUser)
    
    /* Ruta listar usuarios */
    router.get('/listUser',userController.listarUser)
    
    /* Ruta buscar usuario */
    router.get('/user/:id',userController.obtenerID)
    
    /* Ruta eliminar usuario */
    router.delete('/deleteUser/:id', userController.eliminarUser)
    
    /* Ruta actulizar usuario */
    router.put('/updateUser/:id', userController.actualizarUser)

export default router;