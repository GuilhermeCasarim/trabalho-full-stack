const { Model, DataTypes } = require('sequelize')

class Pessoa extends Model { }

Pessoa.init({
    Nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Cpf: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    Telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    Sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
    timestamps: true
})

module.exports = Pessoa