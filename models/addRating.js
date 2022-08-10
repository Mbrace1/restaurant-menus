const {Restaurant} = require('./Restaurant')
const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');
const queryInterface = db.getQueryInterface();

async function main() {
    await Restaurant.sync({force: true})

    await queryInterface.addColumn(
        'restaurants', 'rating', { type: DataTypes.INTEGER, allowNull: true}
    );
}

main()

module.exports = {Restaurant};