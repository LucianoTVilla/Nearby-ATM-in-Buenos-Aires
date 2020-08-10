const express = require('express');
const geolib = require('geolib');

const db = require('../server/config');
const router = express.Router();

router.get('/cajeros/:red', (req, res, next) => {

  let allBanks = [];
  db.query(`SELECT * FROM cajeros_automaticos WHERE red='${req.params.red}';`, (err, result) => {
    if (err) {
      console.log(err);
    }
    result.map((bank) => {
      let newBank = {}
      newBank.latitude  = bank.lat;
      newBank.longitude = bank.long;
      newBank.address = bank.ubicacion;
      newBank.name = bank.banco;
      allBanks.push(newBank)
    })
    let nearbyBanks = geolib.orderByDistance({latitude: req.body.latitude, longitude: req.body.longitude}, allBanks);
    res.json(nearbyBanks.slice(0,3));
  });
});
  

module.exports = router;