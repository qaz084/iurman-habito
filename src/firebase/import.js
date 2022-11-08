//--------IMPORTANTE-------
//-----------------------
/* Este archivo, junto con el config.js y serviceAccount.json requiere los JSON con la información que se va a subir a FIRESTORE, para hacerlo de manera automática, sin tener que cargar uno por uno los datos a mano.
 */

const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./config.js');
const serviceAccount = require('./serviceAccount.json');
// Import JSON to Firestore
const jsonToFirestore = async () => {
try {
console.log('Initializing Firebase');
var admin = require("firebase-admin");
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: firebaseConfig.databaseURL
});
console.log('Firebase initialized');
await firestoreService.restore('./products.json');
console.log('Upload Success');
}
catch (error) {
console.log(error);
}
};
jsonToFirestore();
