'use strict';
module.exports = function (sequelize, DataTypes) {
    var OrderItem = sequelize.define('OrderItem', {
        desc: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
                OrderItem.belongsTo(models.Order, { foreignKey: "orderId" });
            }
        }
    });
    return OrderItem;
};