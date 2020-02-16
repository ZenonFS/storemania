// if (process.env.NODE_ENV !== 'production') {
// Importo las variables de entorno.
require('dotenv').config();
// }

// Include the App Module
const app = require('./app');

// Include the Database Module
require('./database/connection');

let port = app.get('port');

async function main() {
	await app.listen(port);
	console.log(
		`Servidor Iniciado.\n\nServidor alojado en el puerto ${port}\nlocalhost:${port}\n`
	);
}

main();
