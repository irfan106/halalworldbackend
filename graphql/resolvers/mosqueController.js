const Mosque = require('../../models/mosque');

module.exports = {
    mosques: async ({ country, prefectures, limit, offset }) => {
        try {
            let query = { country };
            if (prefectures && prefectures.length > 0) {
                query.prefecture = { $in: prefectures };
            }
            const mosques = await Mosque.find(query).skip(offset).limit(limit);
            return mosques.map(mosque => ({
                ...mosque._doc,
                _id: mosque.id,
            }));
        } catch (err) {
            throw err;
        }
    },
    allMosques: async ({ country}) => {
        try {
            const mosques = await Mosque.find({ country })
            return mosques.map(mosque => ({
                ...mosque._doc,
                _id: mosque.id,
            }));
        } catch (err) {
            throw err;
        }
    },
    createMosque: async ({ mosqueInput }) => {
        const {
            name,
            location,
            prefecture,
            country,
            contact,
            officialPageLink
        } = mosqueInput;

        const mosque = new Mosque({
            name,
            location,
            prefecture,
            country,
            contact,
            officialPageLink
        });

        try {
            const savedMosque = await mosque.save();
            return {
                ...savedMosque._doc,
                _id: savedMosque.id,
            };
        } catch (err) {
            throw err;
        }
    }
};
