import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../dbConfig';

class MenuCategory extends Model {}

MenuCategory.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {
    timestamps: true,
    sequelize
  }
);

module.exports = MenuCategory;