// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// UserSchema = new Schema({
// 	firstname:String,
// 	lastname:String,
// 	username:{
// 		type:String,
// 		unique: true
// 	},
// 	password:String,
// 	email:String,
// 	zipcode:String
// });

// mongoose.model('User', UserSchema);

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
});

mongoose.model('User', UserSchema);