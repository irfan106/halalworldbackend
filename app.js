require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const graphQLSchema = require('./graphql/schema/rootSchema');
const graphQLResolvers = require('./graphql/resolvers/rootResolver');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://halal-world.netlify.app',
}));

app.use('/api-graph', graphqlHTTP({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true
}));

app.get('/', (req, res) => {
    res.send("Hello World!!");
});

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.yj6l1gi.mongodb.net/${process.env.MONGO_DB}`)
    .then(() => {
        app.listen(PORT);
        console.log("Database Connected Successfully");
    })
    .catch((err) => {
        console.log("Error in Connecting Database :", err);
    });
