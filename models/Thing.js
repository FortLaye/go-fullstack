const mongoose = require('mongoose');

const chingShema = mongoose.Schema({
	title: {type: String, require: true},
	description: {type: String, require: true},
	imageUlr: {type: String, require: true},
	userId: {type: String, require: true},
	price: {type: Number, require: true}
})

module.exports = mongoose.model('Ching', chingShema);