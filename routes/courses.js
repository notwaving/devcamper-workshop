const express = require('express');
const {
  getCourses
} = require('../controllers/courses');

// Initialise router
const router = express.Router();

router.route('/').get(getCourses);

module.exports = router;