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
    },
    rating: {
        type: DataTypes.INTEGER,
    }
})

async function main() {
    await Restaurant.sync({force: true})

    await Restaurant.create({
        name: "nandos",
        location: "London",
        cuisine: "English",
        rating: 4
    })
}

// main()

module.exports = {Restaurant};