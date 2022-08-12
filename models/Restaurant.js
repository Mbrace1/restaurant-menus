const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');
const queryInterface = db.getQueryInterface();

const Restaurant = db.define('restaurants', {
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
        cuisine: "English",
    })

    await Restaurant.create({
        name: "kfc",
        location: "London",
        cuisine: "American",
    })
    await queryInterface.addColumn(
        'restaurants', 'rating', { type: DataTypes.INTEGER, allowNull: true}
    );
}

// main()

module.exports = {Restaurant};