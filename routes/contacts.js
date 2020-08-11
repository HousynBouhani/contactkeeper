const express = require('express');
const router  = express.Router();

// @route       GET  api/contacts
// @desc        get all user contacts
// @access      Private
router.get('/',(request,response) => {
    response.send('get all user contacts');
});

// @route       POST  api/contacts
// @desc        add new contact
// @access      private
router.post('/',(request,response) => {
    response.send('add a new contact ');
});


// @route       POST  api/contacts
// @desc        edit a contact
// @access      private
router.put('/:id',(request,response) => {
    response.send('update a  contact ');
});


// @route       POST  api/contacts
// @desc        delete a contact
// @access      private
router.delete('/:id',(request,response) => {
    response.send('delete a contact ');
});

module.exports = router;