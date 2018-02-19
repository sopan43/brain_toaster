var conn = require('../connection.js');
var express = require('express');
var router = express.Router();
/********************************************************************************************************************
 *                                                                                                            		*
 *                                                 	GET Testing		       											*
 *                                                                                                         			*
 *******************************************************************************************************************/
router.get('/', (req, res) => {
    conn.query('SELECT * FROM questions', (error, result) => {
        if (error) {
            return res.json({ success: 1, message: 'Error in Query ' + error });
        } else {
            return res.json({ success: 1, message: 'successfully', data: result });
        }
    });


});



module.exports = router;