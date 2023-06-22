const data = {};
data.employees = require('../model/User.js');

const collection = mongoose.connection.db.collection("User");