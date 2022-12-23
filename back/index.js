const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000
const jsonParser = bodyParser.json()
const ItemModel = require('./itemScheme')

app.use(cors())
app.use(jsonParser)

app.get('/list', async (req, res) => {
	const list = await ItemModel.find().exec()
	res.send(list)
})

app.post('/add', async (req, res) => {
	const newItem = new ItemModel(req.body)
	const date = new Date()
	newItem.datetime = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
	await newItem.save()
	res.status(201)
})

app.listen(port, async () => {
	await mongoose.connect(
		'mongodb+srv://root1:root1@cluster0.ztlaq.mongodb.net/revi'
	)
	console.log(`Example app listening on port ${port}`)
})
