const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');

module.exports = db => {
    const User = db.define('users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        email: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true
        },
        firstName: {
            allowNull: false,
            type: Sequelize.STRING
        },
        lastName: {
            allowNull: false,
            type: Sequelize.STRING
        },
        password: {
            allowNull: false,
            type: Sequelize.INTEGER(60),
        },
        pid: {
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        }
    });
}
