const express = require('express');
const router = express.Router();
const models = require("../../models/index");


// HTTP GET - All orderItemitems
router.get('/api/v1/orders/:orderId/items/', (req, res, next) => {

    const orderId = req.params.orderId;
    models.OrderItem.findAll({
        where: {
            orderId: orderId
        }
    }).then(function (orderItemitems) {
        return res.json(orderItemitems);
    });
});

// HTTP GET - Get orderItem
router.get('/api/v1/orders/:orderId/items/:orderItemId/', (req, res, next) => {

    const orderItemId = req.params.orderItemId;
    models.OrderItem.find({
        where: {
            id: orderItemId
        }
    }).then(function (orderItem) {
        if(orderItem == undefined) {
            return res.status(404).json();
        } else {
            return res.json(orderItem);
        }
    });
});

// HTTP POST - Add orderItem
router.post('/api/v1/orders/:orderId/items/', (req, res, next) => {

    const orderId = req.params.orderId;
    const desc = req.body.desc;
    models.OrderItem.find({
        where: {
            desc: desc
        }
    }).then(function (orderItem) {
        if(orderItem != undefined) {
            var error = { message: "Order item with desc " + desc + " already exists!" };
            return res.status(400).json(error);
        } else {
            models.OrderItem.create({
                orderId: orderId,
                desc: req.body.desc,
            }).then(function(orderItem) {
                return res.status(200).json(orderItem);
            });
        }
    });
});

// HTTP PUT - Update orderItem
router.put('/api/v1/orders/:orderId/items/:orderItemId/', (req, res, next) => {

    const orderItemId = req.params.orderItemId;
    models.OrderItem.find({
        where: {
            id: orderItemId
        }
    }).then(function (orderItem) {
        if(orderItem == undefined) {
            return res.status(404).json();
        } else {
            orderItem.updateAttributes({
                desc: req.body.desc,
            }).then(function (orderItem) {
                return res.status(200).json(orderItem);
            });
        }
    });
});

// HTTP DELETE - Delete orderItem
router.delete('/api/v1/orders/:orderId/items/:orderItemId/', (req, res, next) => {

    const orderItemId = req.params.orderItemId;
    models.OrderItem.find({
        where: {
            id: orderItemId
        }
    }).then(function (orderItem) {
        if(orderItem == undefined) {
            return res.status(404).json();
        } else {
            models.OrderItem.destroy({
                where: {
                    id: orderItemId
                }
            }).then(function (orderItem) {
                return res.status(200).json();
            });
        }
    });
});

module.exports = router;
