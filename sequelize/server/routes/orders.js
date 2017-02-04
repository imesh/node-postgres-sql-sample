const express = require('express');
const router = express.Router();
const models = require("../../models/index");


// HTTP GET - All orders
router.get('/api/v1/orders/', (req, res, next) => {

    models.Order.findAll({}).then(function (orders) {
        return res.json(orders);
    });
});

// HTTP GET - Get order
router.get('/api/v1/orders/:orderId/', (req, res, next) => {

    const orderId = req.params.orderId;
    models.Order.find({
        where: {
            id: orderId
        }
    }).then(function (order) {
        if(order == undefined) {
            return res.status(404).json();
        } else {
            return res.json(order);
        }
    });
});

// HTTP POST - Add order
router.post('/api/v1/orders/', (req, res, next) => {

    const desc = req.body.desc;
    models.Order.find({
        where: {
            desc: desc
        }
    }).then(function (order) {
        if(order != undefined) {
            var error = { message: "Order with desc " + desc + " already exists!" };
            return res.status(400).json(error);
        } else {
            models.Order.create({
                desc: req.body.desc,
            }).then(function(order) {
                return res.status(200).json(order);
            });
        }
    });
});

// HTTP PUT - Update order
router.put('/api/v1/orders/:orderId/', (req, res, next) => {

    const orderId = req.params.orderId;
    models.Order.find({
        where: {
            id: orderId
        }
    }).then(function (order) {
        if(order == undefined) {
            return res.status(404).json();
        } else {
            order.updateAttributes({
                desc: req.body.desc,
            }).then(function (order) {
                return res.status(200).json(order);
            });
        }
    });
});

// HTTP DELETE - Delete order
router.delete('/api/v1/orders/:orderId/', (req, res, next) => {

    const orderId = req.params.orderId;
    models.Order.find({
        where: {
            id: orderId
        }
    }).then(function (order) {
        if(order == undefined) {
            return res.status(404).json();
        } else {
            models.Order.destroy({
                where: {
                    id: orderId
                }
            }).then(function (order) {
                return res.status(200).json();
            });
        }
    });
});

module.exports = router;
