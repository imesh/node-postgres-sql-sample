# Create domain model

node_modules/.bin/sequelize model:create --name Merchant --attributes "name:string, rating:integer" --associations "hasMany:MerchantBranch"
node_modules/.bin/sequelize migration:create --name Merchant --attributes "name:string, rating:integer" --associations "hasMany:MerchantBranch"

node_modules/.bin/sequelize model:create --name MerchantBranch --attributes "address:string, location:string, rating:integer" --associations "belongsTo:Merchant"
node_modules/.bin/sequelize migration:create --name MerchantBranch --attributes "address:string, location:string, rating:integer" --associations "belongsTo:Merchant"

# Create/migrate database
node_modules/.bin/sequelize db:migrate
