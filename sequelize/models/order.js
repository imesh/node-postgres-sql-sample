'use strict';
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    desc: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          Order.hasMany(models.OrderItem, { foreignKey: "orderId" });
      }
    }
  });
  return Order;
};