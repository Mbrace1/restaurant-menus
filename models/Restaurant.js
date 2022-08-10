const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Restaurant = db.define('restaurant', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cuisine: {
        type: DataTypes.STRING,
    }
})

async function main() {
    await Restaurant.sync({force: true})

    await Restaurant.create({
        name: "nandos",
        location: "London",
        cuisine: "English"
    })
}

// main()

module.exports = {Restaurant};