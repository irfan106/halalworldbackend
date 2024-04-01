const Restaurant = require('../../models/restaurant');

module.exports = {
    restaurants: async ({ country, prefectures, limit, offset }) => {
        try {
            let query = { country };
            if (prefectures && prefectures.length > 0) {
                query.prefecture = { $in: prefectures };
            }
            if (limit) {
                query = Restaurant.find(query).limit(limit);
            }
            if (offset) {
                query = query.skip(offset);
            }
            const restaurants = await query;
            return restaurants.map(restaurant => ({
                ...restaurant._doc,
                _id: restaurant.id,
                operatingHours: restaurant.operatingHours.map(oh => ({
                    day: oh.day,
                    time: oh.time
                }))
            }));
        } catch (err) {
            throw err;
        }
    },
    allrestaurant: async ({ country}) => {
        try {
            const restaurants = await Restaurant.find({ country })
            return restaurants.map(restaurant => ({
                ...restaurant._doc,
                _id: restaurant.id,
            }));
        } catch (err) {
            throw err;
        }
    },
    restaurant: async ({ id }) => {
        try {
            const restaurant = await Restaurant.findById(id);
            if (!restaurant) {
                throw new Error('Restaurant not found');
            }
            return {
                ...restaurant._doc,
                _id: restaurant.id,
                operatingHours: restaurant.operatingHours.map(oh => ({
                    day: oh.day,
                    time: oh.time
                }))
            };
        } catch (err) {
            throw err;
        }
    },

    createRestaurant: async ({ restaurantInput }) => {
        const {
            name,
            description,
            location,
            access,
            halalCertification,
            pork,
            alcohol,
            prayerRoom,
            muslimMenu,
            operatingHours,
            prefecture,
            officialPage,
            country,
            totalSeats,
            imgUrl
        } = restaurantInput;

        const restaurant = new Restaurant({
            name,
            description,
            location,
            access,
            halalCertification,
            pork,
            alcohol,
            prayerRoom,
            muslimMenu,
            operatingHours,
            prefecture,
            officialPage,
            totalSeats,
            country,
            imgUrl
        });

        try {
            const savedRestaurant = await restaurant.save();
            return {
                ...savedRestaurant._doc,
                _id: savedRestaurant.id,
                operatingHours: savedRestaurant.operatingHours.map(oh => ({
                    day: oh.day,
                    time: oh.time
                }))
            };
        } catch (err) {
            throw err;
        }
    }
};
