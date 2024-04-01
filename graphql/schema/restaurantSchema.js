module.exports = {
    typeDefs: `
        scalar TotalSeats

        type Restaurant {
            _id: ID!
            name: String!
            description: String
            location: String
            access: String
            halalCertification: String
            pork: String
            alcohol: String
            prayerRoom: String
            muslimMenu: String
            operatingHours: [OperatingHours]
            prefecture: String
            country: String!
            officialPage: String!
            imgUrl: String
            totalSeats: TotalSeats
            createdAt: String
            updatedAt: String
        }
        
        type OperatingHours {
            day: String!
            time: String
        }

        input OperatingHoursInput {
            day: String!
            time: String
        }

        input RestaurantInput {
            name: String!
            description: String
            location: String
            access: String
            halalCertification: String
            pork: String
            alcohol: String
            prayerRoom: String
            muslimMenu: String
            operatingHours: [OperatingHoursInput]
            prefecture: String
            officialPage: String
            totalSeats: TotalSeats
            country: String!
            imgUrl: String
        }
    `
};
