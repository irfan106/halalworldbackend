const restaurantResolver = require('./restaurantController')
const mosqueResolver = require('./mosqueController')
const eNumberResolver = require('./eNumberController')

const rootResolver ={
    ...restaurantResolver,
    ...mosqueResolver,
    ...eNumberResolver,
}
module.exports = rootResolver