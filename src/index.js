import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import jwt, { sign } from 'jsonwebtoken'

import './database'

import userRoutes from './routes/user.routes'
import userPacientes from './routes/paciente.routes'
import citasRoutes from './routes/citas.routes'
import signinRoutes from './routes/signin.route'
import turnosRoutes from './routes/turnos.routes'

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

app.use('/secure',function(req, res, next) {
    let token = req.headers['authorization']
    if (!token) {
      res.status(401).send({
        ok: false,
        message: 'Toket inexistente'
      })
    }
    token = token.replace('Bearer ', '')
    jwt.verify(token, process.env.JWT_SECRET, function(err, tokenn) {
        console.log(err)
      if (err) {
        return res.status(401).send({
          ok: false,
          message: 'Token inválido'
        });
      } else {
        req.token = token
        next()
      }
    });
  });

/* Rutas */
app.use('/signin', signinRoutes)
app.use('/user', userRoutes)

app.use('/secure/user', userRoutes)
app.use('/secure/pacientes', userPacientes)
app.use('/secure/citas', citasRoutes)
app.use('/secure/turnos', turnosRoutes())

module.exports = app
