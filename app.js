const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const app = express();
const Thing = require('./models/Thing');

mongoose.connect('mongodb+srv://Doulaye12:limitaccess12@cluster0.n8dlfgh.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true })
	.then(() => console.log('Connexion à MongoDB réussie !'))
	.catch(() => console.log('Connexion à MongoDB échouée !'));
	
app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next)=>{
	delete(req.body._id);
	const thing = new Thing({
		...req.body
	});
	thing.save()
		.then(()=> res.status(201).json({message: 'Objet créé avec succès !'}))
		.catch(error => res.status(400).json({ error }));
})
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});

app.get('/api/stuff', (req, res, next) => {
	const stuff = [
	  {
		_id: 'oeihfzeoi',
		title: 'Mon premier objet',
		description: 'Les infos de mon premier objet',
		imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
		price: 4900,
		userId: 'qsomihvqios',
	  },
	  {
		_id: 'oeihfzeomoihi',
		title: 'Mon deuxième objet',
		description: 'Les infos de mon deuxième objet',
		imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
		price: 2900,
		userId: 'qsomihvqios',
	  },
	];
	res.status(200).json(stuff);
  });

module.exports = app;