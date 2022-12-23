const mongoose = require('mongoose')
const { Schema } = mongoose

const Scheme = new Schema({
	name: String,
	phone: String,
	mark: String,
	model: String,
	year: String,
	color: String,
	price: String,
	descr: String,
	photoUrl: String,
	datetime: String,
	mail: String,
	distance: String,
})

module.exports = mongoose.model('Item', Scheme)
