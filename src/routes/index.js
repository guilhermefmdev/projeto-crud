const router = require('express').Router()

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

/*       ROTAS           */

// listar
router.get('/list', CustomersController.list)

// registro de clientes/usuários
router.get('/register', CustomersController.index)
router.post('/register', CustomersController.add)

// editar clientes/usuários
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

// remover clientes/usuários
router.get('/remove/:id', CustomersController.remove)

module.exports = router