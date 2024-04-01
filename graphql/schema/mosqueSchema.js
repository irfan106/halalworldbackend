module.exports = {
    typeDefs: `
    type Mosque {
        _id: ID!
        name: String!
        location: String
        prefecture: String
        country: String!
        contact: String
        officialPageLink: String
        createdAt: String
        updatedAt: String
    }

    input MosqueInput {
        name: String!
        location: String
        prefecture: String
        country: String!
        contact: String
        officialPageLink: String
    }
    `
};
