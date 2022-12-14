'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profiles)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: {
        msg: "Username Already Taken"
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: "Email Already Taken"
      }
    }
  }, {
    hooks: {
      beforeCreate(instance,option){
        instance.role = 'user'
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(instance.password, salt);


        instance.password = hash
      }
    },
    sequelize,
    modelName: 'User',
  })


  return User;
};