const CustomersModel = require('../models/customers')
const { crypto } = require('../helpers/password')



function index(req, res) {
    res.render('register', {
        title: 'Cadastro'
    })
}

async function add(req, res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto =  await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })

    register.save()
    res.render('register', {
        title:  'Cadastro',
        message: 'Cadastro realizado com sucesso!',
        modalClass: 'showToast',
    })
}

async function list(req, res) {
    const users = await CustomersModel.find()

    res.render('list', {
        title: 'Lista de usuários',
        users,
        message: 'Não há nenhum cliente cadastrado',
    })
}

async function formEdit(req, res) {
    const { id } = req.query

    const user = await CustomersModel.findById(id)

    res.render('edit', {
        title: 'Editar Usuário',
        user,
    })
}

async function edit(req, res) {
    const {
        name,
        age,
        email,
    } = req.body

    const { id } = req.params

    const user = await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.redirect('/list')
}

async function remove(req, res) {
    const { id } = req.params

    const remove = await CustomersModel.deleteOne({ _id: id })


    res.redirect('/list')
}

module.exports = {
    index,
    add,
    list,
    formEdit,
    edit,
    remove,
}