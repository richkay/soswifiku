const express = require('express')
const { db } = require('../../module/firebase/init')

const route = express.Router()

route.get('/venues', async (req, res) => {
  const DataVenues = await db.collection('venues').get()
  let venue = ''
  DataVenues.forEach((datavenue) => {
    venue = datavenue.data()
  })
  res.status(200).json(venue).end()
})

route.get('/venue/:mac', async (req, res) => {
  const DataVenues = await db.collection('venues').where('mac', '=', req.params.mac).get()
  let venue = ''
  DataVenues.forEach((datavenue) => {
    venue = datavenue.data()
  })
  res.status(200).json(venue).end()
})

route.get('/venue/splash/:mac', async (req, res) => {
  const DataVenues = await db.collection('venues').where('mac', '=', req.params.mac).get()

  DataVenues.forEach((datavenue) => {
    const splash = datavenue.id
    const name = datavenue.data().name
    db.collection('loginpage').where('venue', '=', splash).get().then((ressplash) => {
      ressplash.forEach((datasplash) => {
        const data = datasplash.data()
        data.name = name
        res.status(200).json(data).end()
      })
    })
  })
})

// eslint-disable-next-line new-cap
module.exports = route
