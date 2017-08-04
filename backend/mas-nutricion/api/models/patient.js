// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//
// var patient = new Schema({
//    name: String,
//     lastName: String,
//     diets: Number,
//
// });
//
// module.exports = mongoose.model('Patient', patient);


module.exports = {
  name: String,
  lastName: String,
  email: String,
  age: Number,
  weight: Number,
  password: String
};
