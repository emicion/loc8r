const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations');
const ctrlOthers - require('../controllers/others');

//Location Pages
router.get('/', cntrlLocations.homelist);
router.get('/location', cntrlLocations.locationInfo);
router.get('/location/review/new', cntrlLocations.addReview);

module.exports = router;
