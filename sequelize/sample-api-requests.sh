#!/bin/bash

set -e
api_endpoint="http://localhost:3000/api/v1"

echo "Adding orders..."
curl -v -H "Content-Type: application/json" -d '{"desc": "Order 1"}' $api_endpoint/orders
curl -v -H "Content-Type: application/json" -d '{"desc": "Order 2"}' $api_endpoint/orders

curl -v $api_endpoint/orders

echo "Adding order items..."
curl -v -H "Content-Type: application/json" -d '{"orderId": 1, "desc": "Order Item 1"}' $api_endpoint/orders/1/items/

curl -v $api_endpoint/orders/items
