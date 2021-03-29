const express = require('express');
const router = require('./router');

const app = express();

app.use(router);

app.listen(3100, () => {
	console.log('App started');
});
