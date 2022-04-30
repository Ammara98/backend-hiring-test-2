const express = require('express')
const moment = require('moment')
const history = require('../models/history.js')

const router = express.Router();

router.get('/:id/transfer',async (req,res)=>{
    try {
        transfers = await history.find({senderAccId:req.params.id})
        if(transfers) {
            res.json(transfers);
        }
        else {
            res.json({msg:'No transaction history'})
        }
    }
    catch(err){
    console.log(err)
    }
});


module.exports = router;