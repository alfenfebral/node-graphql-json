const express = require('express');
const graphql = require('express-graphql');
const schema = require('./schema.js');

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use('/graphql', graphql({
  schema: schema,
  graphiql: true
}));

app.get('/', function (req, res) {
  res.send('Its Works');
});

app.use(function (req, res) {
  res.send('Not Found');
})

app.listen(process.env.PORT || 4000, function() {
  console.log('Listen on port ', 4000);
});