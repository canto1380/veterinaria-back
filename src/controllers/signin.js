import User from '../models/Users'
import jwt from 'jsonwebtoken'

const signinController = {}

signinController.signin = async (req, res) => {
    const email = req.body.email;
    const clave = req.body.clave;
    try {
        await User.findOne({ email }, function (err, user) {
            if (user) {
                user.comparePassword(clave, function (err, isMatch) {
                    if (isMatch) {
                        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: 60*60*24 })
                        res.cookie(token)
                        const {_id, nombre, apellido, email, admin } = user
                        res.status(201).json({
                            token, user: {_id, email, nombre, apellido, admin }
                        })
                        console.log('contrasena correcta')
                    } else {
                        return res.status(401).json({
                            mensaje: "Error en la clave"
                        })
                    }
                })
            } else {
                if (err) return err;
                res.status(401).json({ mensaje: "El usuario no esta registrado" })
            }
        })
    } catch (error) {
        console.log(error)
    }
}
export default signinController