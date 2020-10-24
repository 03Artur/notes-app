const { Model } = require('sequelize');
const isAfter = require('date-fns/isAfter');

module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
    notExpired() {
      return isAfter(new Date(this.getDataValue('expirationTime')), new Date());
    }

    static associate({ User }) {
      this.belongsTo(User, {
        foreignKey: 'userId',
      });
    }
  }
  RefreshToken.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        validate: {
          notNull: true,
        },
      },
      token: {
        allowNull: false,
        unique: true,
        type: DataTypes.UUID,
        validate: {
          notNull: true,
        },
      },
      expirationTime: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: true,
          isAfterCurrentTime(value) {
            return isAfter(new Date(value), new Date());
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'RefreshToken',
    },
  );
  return RefreshToken;
};
