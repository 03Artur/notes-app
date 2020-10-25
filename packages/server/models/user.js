const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
const { saltRounds } = require('../config');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    comparePassword(value) {
      return bcrypt.compare(value, this.getDataValue('password'));
    }

    static associate({ RefreshToken, Note }) {
      this.hasOne(RefreshToken, {
        foreignKey: 'userId',
      });
      this.hasMany(Note, {
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          isEmail: true,
        },
      },
      password: {
        allowNull: false,
        field: 'passwordHash',
        type: DataTypes.TEXT,
        validate: {
          notNull: true,
        },
        set(value) {
          this.setDataValue('password', bcrypt.hashSync(value, saltRounds));
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
