const {Pessoa} = require('/models')

exports.createPessoa = async(req, res) => {
    try{
        const {Nome, Cpf, Telefone} = req.body
        const novaPessoa = await Pessoa.create({
            Nome, 
            Cpf,
            Telefone
        })

        res.status(201).json(novaPessoa)
    } catch(e){
        res.status(500).json({e: 'Erro ao criar pessoa', details: e.message})
    }
}

exports.getAllPessoas = async(req, res) => {
    try{
        const pessoas = await Pessoa.findAll()
        res.status(200).json(pessoas)
    } catch(e){
        res.status(500).json({e: 'Erro ao buscar pessoas', details: e.message})
    }
}

exports.getPessoaByCpf = async(req, res) => {
    try{
        const {Cpf} = req.params
        const pessoa = await Pessoa.findByPk(Cpf)
        if(!pessoa){
            return res.status(404).json({e: 'Pessoa não encontrada'})
        }

        res.status(200).json(pessoa)
    } catch(e){
        res.status(500).json({e: 'Erro ao buscar pessoa', details: e.message})
    }
}

exports.updatePessoa = async(req, res) => {
    try{
        const {Cpf} = req.params
        const {Nome, Telefone} = req.body

        const pessoa = await Pessoa.findByPk(Cpf) //where sql
        if(!pessoa){
            return res.status(404).json({e: 'Pessoa não encontrada'})
        }

        pessoa.Nome = Nome
        pessoa.Telefone = Telefone

        await pessoa.save()

        res.status(200).json(pessoa)

    } catch(e){
        req.status(500).json({e: 'Erro ao atualizar pessoa', details: e.message})
    }
}

exports.deletePessoa = async(req, res) => {
    try{
        const {Cpf} = req.params
        const pessoa = await Pessoa.findByPk(Cpf)
        if(!pessoa){
            return res.status(404).json({e: 'Pessoa não encontrada'})
        }
        await pessoa.destroy()
        res.status(204).send()

    } catch(e){
        res.status(500).json({e: 'Erro ao deletar pessoa', details: e.message})
    }
}
