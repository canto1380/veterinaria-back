import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema(
    {
        nombre: {
            type: String,
            trim: true,
            require: true,
        },
        apellido: {
            type: String,
            trim: true,
            require: true
        },
        dni: {
            type: Number,
            trim: true,
            require: true,
            unique: true,
            minLength:7,
            maxLength:8
          },
          email: {
            type: String,
            trim: true,
            require: true,
            maxlength: 50,
            unique: true
          },
          telefono: {
            type: Number,
            trim: true,
            require: true,
            unique: true,
            
          },
          clave:{
            type: String,
            trim: true,
            require: true,
            minlength: 8,
            maxLength:12
          },
          admin:{
              type: Boolean,
              require: true,
              default: false
          }
    }, { timestamps: true} 
)

userSchema.pre('save', function(next){
    
    bcrypt.genSalt(10).then(salts =>{
        bcrypt.hash(this.clave,salts).then(hash =>{
            this.clave =hash;
            next();
        }).catch(error => next(error))
    }).catch(error => next(error))
})

userSchema.methods.comparePassword = function(clavee, cb) {
    bcrypt.compare(clavee , this.clave, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
     });
 };


const User = mongoose.model('user', userSchema)
export default User