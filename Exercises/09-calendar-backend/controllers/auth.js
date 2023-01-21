
const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs')




const createUser = async(req,resp = response) => {

    const { email, password} = req.body;

    
    try {
       
       
        let usuario = await Usuario.findOne({ email })
         if(usuario){
            return resp.status(400).json({
                ok: false,
                msg: 'Un usuario ya existe'
            })
        }

        usuario = new Usuario(req.body);

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt)

        await usuario.save();
    
        resp.status(201).json({
            ok: true,
            msg: 'registro',
        })

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin'
        })
    }
}


const userLogin = async(req,resp = response) => {

    const { email, password} = req.body;


    try {
        
        const usuario = await Usuario.findOne({ email })
        
        if(!usuario){
           return resp.status(400).json({
               ok: false,
               msg: 'El usuario no existe con ese email'
           })
       }

       // Confirmar los passwords
       const validPassword = bcrypt.compareSync(password, usuario.password)

       if(!validPassword){
        return resp.status(400).json({
            ok: false,
            msg: 'Password incorrecto'
        });
       }

       // Generar nuestro Json Web Token

       resp.json({
        ok: true,
        uid: usuario.id,
        name: usuario.name
       })



    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin'
        })
    }

}


const revalidateToken = (req,resp = response) => {

    resp.json({
        ok: true,
        msg: 'renew'
    })
}


module.exports = {
    createUser,
    userLogin,
    revalidateToken
}