# Create domain model

node_modules/.bin/sequelize model:create --name Order --attributes "desc:string" --associations "hasMany:OrderItem"
node_modules/.bin/sequelize migration:create --name Order --attributes "desc:string" --associations "hasMany:OrderItem"

node_modules/.bin/sequelize model:create --name OrderItem --attributes "desc:string" --associations "belongsTo:Order"
node_modules/.bin/sequelize migration:create --name OrderItem --attributes "desc:string" --associations "belongsTo:Order"

# Create/migrate database
node_modules/.bin/sequelize db:migrate
