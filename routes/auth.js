const express = require('express');
const router  = express.Router();

// @route       GET  api/auth
// @desc        get logged in user
// @access      Private
router.get('/',(request,response) => {
    response.send('get logged in user');
});

// @route       POST  api/auth
// @desc        auth user & get token 
// @access      public
router.post('/',(request,response) => {
    response.send('authenticate user');
});

module.exports = router;