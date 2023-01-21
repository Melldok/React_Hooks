
const { response } = require('express')
const { validationResult } = require('express-validator')


const createUser = (req,resp = response) => {

    const { name, email, password} = req.body;

    // Manejo de errores
    const errors =  validationResult(req)
    if(!errors.isEmpty()){
        return resp.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }
    



    resp.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    })
}


const userLogin = (req,resp = response) => {

    // Manejo de errores
    const errors =  validationResult(req)
    if(!errors.isEmpty()){
        return resp.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    const { email, password} = req.body;


    resp.json({
        ok: true,
        ms: 'login',
        email,
        password
    })
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