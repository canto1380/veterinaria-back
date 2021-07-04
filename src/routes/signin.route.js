import {Router} from 'express'
import signinController from '../controllers/signin'

const router = Router()
/* Ruta para autenticar usuario */
router.post('/signin', signinController.signin)

export default router;