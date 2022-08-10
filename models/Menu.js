const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Menu = db.define('menu', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

async function main() {
    await Menu.sync({force: true})

    await Menu.create({
        title: "chicken",
    })
}

// main()

module.exports = {Menu};