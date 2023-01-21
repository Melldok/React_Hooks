
// Rutas de Usuarios/Auth
// host + /api/auth

const {Router} = require('express');
const {check} = require('express-validator')
const router = Router()

const { createUser, userLogin, revalidateToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/field-validators');



router.post('/new',
[//middlewares para manejo de errores
    check('name', 'El nombre es obligaorio').not().isEmpty(),
    check('email', 'El email es obligaorio').isEmail(),
    check('password', 'El password debe de ser de al menos 6 caracteres').isLength({min: 6}),
    validarCampos
],
 createUser)

router.post('/', [//middlewares para manejo de errores
    check('email', 'El email es obligaorio').isEmail(),
    check('password', 'El password debe de ser de al menos 6 caracteres').isLength({min: 6}),
    validarCampos
], userLogin )

router.get('/renew', revalidateToken )



module.exports = router;