const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://balimandira.firebaseio.com'
})

// const settings = { timestampsInSnapshots: true }
const db = admin.firestore()

// db.settings(settings)
module.exports = { db }
