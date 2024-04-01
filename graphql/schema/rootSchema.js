const { buildSchema } = require('graphql');
const { typeDefs: restaurantTypeDefs } = require('./restaurantSchema');
const { typeDefs: mosqueTypeDefs } = require('./mosqueSchema');
const { typeDefs: eNumberTypeDefs } = require('./eNumberSchema');

const mainSchema = `
    ${restaurantTypeDefs}
    ${mosqueTypeDefs}
    ${eNumberTypeDefs}

    type Query {
        restaurants(country: String!, prefectures: [String!], limit: Int!, offset: Int!): [Restaurant]
        allrestaurant(country:String!): [Restaurant]
        mosques(country: String!, prefectures: [String!], limit: Int!, offset: Int!): [Mosque]
        allMosques(country:String!): [Restaurant]
        enumbers: [ENumber!]!
    }

    type Mutation {
        createRestaurant(restaurantInput: RestaurantInput): Restaurant
        createMosque(mosqueInput: MosqueInput): Mosque
        createENumber(input: ENumberInput!): ENumber
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;

module.exports = buildSchema(mainSchema);
