const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();
const port = 3000;

const schema = buildSchema(`
	type Query {
		hello: String
	}
`);

const root = {
	hello: () => {
		return 'Hello world!';
	}
};

app.get('/', (req, res) => {
	res.send('Hello jubilant!');
});

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true
}));

app.listen(port, () => {
	console.log(`Started listening on port ${port}`);
});
