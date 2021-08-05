const { Router } = require('express');
const router = Router();
const dotenv = require('dotenv');

router.get('/', (req, res) => res.json({ message : 'Hello World on port ' + process.env.PORT }));

module.exports = router;
