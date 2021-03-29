const express = require('express');

const router = express.Router();

['download', 'upload'].map((route) => {
	router.use(`/${route}`, require(`./${route}`));
});

module.exports = router;