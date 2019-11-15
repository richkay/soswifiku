const express = require('express')
const { db } = require('../../module/firebase/init')

const route = express.Router()

route.get('/privacy', async (req, res) => {
  const Dataprivacy = await db.collection('privacy').get()
  let privacy = ''
  Dataprivacy.forEach((rsDataprivacy) => {
    privacy = rsDataprivacy.data().content
  })
  res.status(200).json(privacy).end()
})

// eslint-disable-next-line new-cap
module.exports = route
