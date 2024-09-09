'use strict';
//migrate 2 -> vou colocar as coisa na mao, n ta dando certo


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos', {
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
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enderecos')
  }
};
