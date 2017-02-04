#!/bin/bash

set -e
api_endpoint="http://localhost:3000/api/v1"

echo "Adding merchants..."
curl -v -H "Content-Type: application/json" -d '{"name": "Cricket Club", "rating": 1}' $api_endpoint/merchants
curl -v -H "Content-Type: application/json" -d '{"name": "Coffee Bean", "rating": 1}' $api_endpoint/merchants

curl -v $api_endpoint/merchants

echo "Adding merchant branches..."

curl -v -H "Content-Type: application/json" -d '{"merchantId": 1, "address": "New Hampshire", "location": "8.12 8.10", "rating": 1}' $api_endpoint/merchants/1/branches/

curl -v $api_endpoint/merchants/branches
