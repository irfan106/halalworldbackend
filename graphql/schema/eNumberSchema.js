module.exports = {
    typeDefs: `
      type ENumber {
          _id: ID!
          Number: String!
          Name: String
          HalalStatusFirst: String
          HalalStatusSecond: String
          Tag: String
          Type: String
      }  
  
      input ENumberInput {
          Number: String!
          Name: String
          HalalStatusFirst: String
          HalalStatusSecond: String
          Tag: String
          Type: String
      }
    `
  };
  