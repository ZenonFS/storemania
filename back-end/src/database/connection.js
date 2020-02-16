const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI || 'mongodb://localhost/storemania';

// Requerimientos para el correcto Funcionamiento de la Conexión.
mongoose.connect(URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once('open', () => {
	console.log('MongoDB Connect!');
});
