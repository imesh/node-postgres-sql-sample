'use strict';
module.exports = function (sequelize, DataTypes) {
    var MerchantBranch = sequelize.define('MerchantBranch', {
        address: DataTypes.STRING,
        location: DataTypes.STRING,
        rating: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
                MerchantBranch.belongsTo(models.Merchant, { foreignKey: "merchantId" });
            }
        }
    });
    return MerchantBranch;
};