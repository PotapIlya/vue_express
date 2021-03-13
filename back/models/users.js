// const db = require('./../core/Db');
const config = require('./../config/db');





const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
    }
);


class User extends Model {}

User.init({
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true










exports.all =  (cb) => {
    cb(null, connect());
    // db.get().collection('artists').find().toArray(function (err, docs) {
    //     cb(err, docs);
    // })
};
