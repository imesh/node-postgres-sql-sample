'use strict';
module.exports = function(sequelize, DataTypes) {
  var Merchant = sequelize.define('Merchant', {
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          Merchant.hasMany(models.MerchantBranch, { foreignKey: "merchantId" });
      }
    }
  });
  return Merchant;
};