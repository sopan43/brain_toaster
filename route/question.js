var conn = require('../connection.js');
var express = require('express');
var router = express.Router();
/************************************************************************************************************************
 *                                                                                                                 		*
 *                                                 	GET Testing		       												*
 *                                                                                                           			*
 ***********************************************************************************************************************/
router.get('/', (req, res) => {
    return res.json({ success: 1, message: 'successfully', data: ' Welcome Tushar' });
});

module.exports = router;