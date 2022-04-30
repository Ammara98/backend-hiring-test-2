const express = require('express')
const moment = require('moment')
const customer = require('../models/customer.js')

const router = express.Router();

router.get('/', async (req,res)=>{
    try {
        cust = await customer.find({})
        res.send(cust)
    }
    catch(err) {
        console.log(err)
    }
});


router.post('/create', async (req,res)=>{
    try {
        const newCust = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dob: req.body.dob,
            email: req.body.email,
            status: 'active',
            createdAt: moment().format()
        }
        await customer.create(newCust);
        res.json(newCust)
    }
    catch (e) {
    console.log(e)}
});

module.exports = router;