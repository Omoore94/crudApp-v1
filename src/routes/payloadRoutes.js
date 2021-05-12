const express = require('express');
const router = express.Router();
const PayloadCtrl = require('../controllers/payloadController.js');


//POST request to /payloads to create a new data
router.post('/payloads', PayloadCtrl.createNewPayload);

//GET request to /payload to fetch all data
router.get('/payloads', PayloadCtrl.fetchPayloads);

//GET request to /payloads/:id to fetch a single data
router.get('/payloads/:id', PayloadCtrl.fetchSinglePayload);

//PUT request to /payloads/:id to update a single data
router.put('/payloads/:id', PayloadCtrl.updateSinglePayload);

//DELETE request to /payloads/:id to delete a data
router.delete('/payloads/:id', PayloadCtrl.deleteSinglePayload);

module.exports = router;

