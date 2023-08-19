const { Sequelize } = require('sequelize');

module.exports = {
  up: (queryInterface) => {
    return queryInterface.createTable('MenuCategory', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('MenuCategory');
  },
};