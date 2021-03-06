const express = require('express');
const router = express.Router();

//@route    GET api/contacts
//@dwsc     Get all users contacts
//@access   Private
router.get('/', (req, res)=> {
    res.send('Get all users contacts')
});

//@route    POST api/contacts
//@dwsc     Add new contact
//@access   Private
router.post('/', (req, res)=> {
    res.send('Add new contact')
});

//@route    PUT api/contacts/:id
//@dwsc     Update contact
//@access   Private
router.put('/:id', (req, res)=> {
    res.send('Update contact')
});

//@route    DELETE api/contacts/:id
//@dwsc     Delete contact
//@access   Private
router.delete('/:id', (req, res)=> {
    res.send('Delete contact')
});

module.exports = router;