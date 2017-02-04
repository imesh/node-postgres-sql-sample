const express = require('express');
const router = express.Router();
const models = require("../../models/index");


// HTTP GET - All merchants
router.get('/api/v1/merchants/', (req, res, next) => {

    models.Merchant.findAll({}).then(function (merchants) {
        return res.json(merchants);
    });
});

// HTTP GET - Get merchant
router.get('/api/v1/merchants/:merchantId/', (req, res, next) => {

    const merchantId = req.params.merchantId;
    models.Merchant.find({
        where: {
            id: merchantId
        }
    }).then(function (merchant) {
        if(merchant == undefined) {
            return res.status(404).json();
        } else {
            return res.json(merchant);
        }
    });
});

// HTTP POST - Add merchant
router.post('/api/v1/merchants/', (req, res, next) => {

    const name = req.body.name;
    models.Merchant.find({
        where: {
            name: name
        }
    }).then(function (merchant) {
        if(merchant != undefined) {
            var error = { message: "Merchant with name " + name + " already exists!" };
            return res.status(400).json(error);
        } else {
            models.Merchant.create({
                name: req.body.name,
                rating: req.body.rating
            }).then(function(merchant) {
                return res.status(200).json(merchant);
            });
        }
    });
});

// HTTP PUT - Update merchant
router.put('/api/v1/merchants/:merchantId/', (req, res, next) => {

    const merchantId = req.params.merchantId;
    models.Merchant.find({
        where: {
            id: merchantId
        }
    }).then(function (merchant) {
        if(merchant == undefined) {
            return res.status(404).json();
        } else {
            merchant.updateAttributes({
                name: req.body.name,
                rating: req.body.rating
            }).then(function (merchant) {
                return res.status(200).json(merchant);
            });
        }
    });
});

// HTTP DELETE - Delete merchant
router.delete('/api/v1/merchants/:merchantId/', (req, res, next) => {

    const merchantId = req.params.merchantId;
    models.Merchant.find({
        where: {
            id: merchantId
        }
    }).then(function (merchant) {
        if(merchant == undefined) {
            return res.status(404).json();
        } else {
            models.Merchant.destroy({
                where: {
                    id: merchantId
                }
            }).then(function (merchant) {
                return res.status(200).json();
            });
        }
    });
});

module.exports = router;
