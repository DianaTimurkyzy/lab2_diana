const express = require('express');
const { getProcessLog } = require('../utils/logger');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(getProcessLog('Server shutdown initiated'));
    process.exit(0);
});

module.exports = router;