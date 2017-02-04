const express = require('express');
const router = express.Router();
const models = require("../../models/index");


// HTTP GET - All merchantBranchBranches
router.get('/api/v1/merchants/:merchantId/branches/', (req, res, next) => {

    const merchantId = req.params.merchantId;
    models.MerchantBranch.findAll({
        where: {
            merchantId: merchantId
        }
    }).then(function (merchantBranchBranches) {
        return res.json(merchantBranchBranches);
    });
});

// HTTP GET - Get merchantBranch
router.get('/api/v1/merchants/:merchantId/branches/:merchantBranchId/', (req, res, next) => {

    const merchantBranchId = req.params.merchantBranchId;
    models.MerchantBranch.find({
        where: {
            id: merchantBranchId
        }
    }).then(function (merchantBranch) {
        if(merchantBranch == undefined) {
            return res.status(404).json();
        } else {
            return res.json(merchantBranch);
        }
    });
});

// HTTP POST - Add merchantBranch
router.post('/api/v1/merchants/:merchantId/branches/', (req, res, next) => {

    const merchantId = req.params.merchantId;
    const address = req.body.address;
    models.MerchantBranch.find({
        where: {
            address: address
        }
    }).then(function (merchantBranch) {
        if(merchantBranch != undefined) {
            var error = { message: "Merchant branch with address " + address + " already exists!" };
            return res.status(400).json(error);
        } else {
            models.MerchantBranch.create({
                merchantId: merchantId,
                address: req.body.address,
                location: req.body.location,
                rating: req.body.rating
            }).then(function(merchantBranch) {
                return res.status(200).json(merchantBranch);
            });
        }
    });
});

// HTTP PUT - Update merchantBranch
router.put('/api/v1/merchants/:merchantId/branches/:merchantBranchId/', (req, res, next) => {

    const merchantBranchId = req.params.merchantBranchId;
    models.MerchantBranch.find({
        where: {
            id: merchantBranchId
        }
    }).then(function (merchantBranch) {
        if(merchantBranch == undefined) {
            return res.status(404).json();
        } else {
            merchantBranch.updateAttributes({
                address: req.body.address,
                location: req.body.location,
                rating: req.body.rating
            }).then(function (merchantBranch) {
                return res.status(200).json(merchantBranch);
            });
        }
    });
});

// HTTP DELETE - Delete merchantBranch
router.delete('/api/v1/merchants/:merchantId/branches/:merchantBranchId/', (req, res, next) => {

    const merchantBranchId = req.params.merchantBranchId;
    models.MerchantBranch.find({
        where: {
            id: merchantBranchId
        }
    }).then(function (merchantBranch) {
        if(merchantBranch == undefined) {
            return res.status(404).json();
        } else {
            models.MerchantBranch.destroy({
                where: {
                    id: merchantBranchId
                }
            }).then(function (merchantBranch) {
                return res.status(200).json();
            });
        }
    });
});

module.exports = router;
