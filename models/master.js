const { sequelize } = require('../config/dbconfig');
const { DataTypes } = require("sequelize");
const Master = sequelize.define('master', {
    depname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accountno: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    branch: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    kyc: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false

    }
})
try {
    Master.sync({ force: false });    
    console.log("The table for the User model was just (re)created!");
} catch (error) {
    console.log("Some problem Occured");    
}
 
module.exports=Master;