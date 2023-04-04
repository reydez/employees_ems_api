require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

const basename = path.basename(__filename);
const modelDefiners = [];

// We ream all the files from the models folder, we get them and we add to the modelDefiners array
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// We Inject the model connection (sequelize) to all the models
modelDefiners.forEach((model) => model(sequelize));

// We Capitalize the names of the models example: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// In sequelize.models there are all the models imported with their properties
// To make a relation we destructure the object
const { Employee } = sequelize.models;

// here we would to the relations
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // To import the models do this: const { Product, Employee } = require('./db.js');
  conn: sequelize, // To import the connection do this: { conn } = require('./db.js');
};
