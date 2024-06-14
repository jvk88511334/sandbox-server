const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/database');

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    dialectOptions: dbConfig.dialectOptions
});

const Utilisateur = sequelize.define('Utilisateur', {
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true
    },
    identifiant_utilisateur: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    stylo_bille: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    }
});

module.exports = Utilisateur;