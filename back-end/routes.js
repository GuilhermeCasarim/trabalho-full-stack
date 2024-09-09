const express = require('express')
const pessoaController = require('./controllers/PessoaController')

const router = express.Router()

router.post('/pessoas', pessoaController.createPessoa)
router.get('/pessoas', pessoaController.getAllPessoas)
router.get('/pessoas/:Cpf', pessoaController.getPessoaByCpf)
router.put('/pessoas/:Cpf', pessoaController.updatePessoa)
router.delete('/pessoas/:Cpf', pessoaController.deletePessoa)