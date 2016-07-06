var mongoose = require('mongoose');
var Schema = mongoose.Schema;

UserSchema = new Schema({
	firstname:String,
	lastname:String,
	username:{
		type:String,
		unique: true
	},
	password:String,
	email:String,
	zipcode:String
})