import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import './database'

import userRoutes from './routes/user.routes'
import userPacientes from './routes/paciente.routes'
import citasRoutes from './routes/citas.routes'

/*** CONFIGURACIONES ***/
/* Instancia de express */
const app = express();

/* Instancia para variables env */
dotenv.config({path:".env"})

/* Creacion de puerto */
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), ()=>{
    console.log(`Desde el puerto ${app.get('port')}`)
})

/* Herramientas extras - Middlewares*/
app.use(cors())  
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'../public')))
app.use(bodyParser.json())
// app.use('../public', express.static(`${__dirname}/storage/img`))

/* Rutas */
app.use('/user', userRoutes)
app.use('/pacientes', userPacientes)
app.use('/citas', citasRoutes)

module.exports = app
