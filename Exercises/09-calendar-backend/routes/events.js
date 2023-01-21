// Event routes
// /api/events

const { validarJWT } = require("../middlewares/validar-jwt");
const { Router} = require("express");
const { eliminarEvento, crearEvento, getEventos, actualizarEvento } = require("../controllers/events");
const { validarCampos } = require('../middlewares/field-validators');
const {check} = require('express-validator');
const { isDate } = require("../helpers/isDate");
const router = Router();




//Todos tiene que pasar con la validacion del JWT
//Aplicar middleware a todo (Cualquier peticion tendra que validar el token)
router.use(validarJWT)

// obtener eventos
router.get('/', getEventos)

// Crear un nuevo evento
router.post('/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'La fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ],
 crearEvento)


// Actualizar evento
router.put('/:id', actualizarEvento)


//borrar evento

router.delete('/:id', eliminarEvento)


module.exports = router;