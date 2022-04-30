const express = require('express')
const moment = require('moment')
const account = require('../models/account.js')
const router = express.Router();
const history = require('../models/history.js')




router.get('/', async (req,res)=>{
    try{
        acc = await account.find({})
        res.send(acc)
    }
    catch(err) {
        console.log(err)
    }
});


router.get('/:id/balance', async (req,res)=>{
    try{
        id = req.params.id
        acc = await account.findOne({_id: id})
        if(acc){
            res.json(acc.amount)
            }
        else{
        res.json({msg: 'Account does not exists'})
        }
    }
    catch(err){
    console.log(err)
    }
});


router.post('/create', async (req,res)=>{
    try {
        const newAcc = {
            custId: req.body.custId,
            accountType: req.body.accountType,
            amount: req.body.amount,
            status: 'active',
            createdAt: moment().format()
        }
        await account.create(newAcc);
        console.log(newAcc)
        res.json(newAcc)
    }
    catch(err){
    console.log(err)
    }

});



router.patch('/transfer',async (req,res)=>{
    try{
        senderId = req.query.senderId
        receiverId = req.query.receiverId
        tamount = parseFloat(req.query.tamount)

        sender =await account.findOne({_id: senderId})
        receiver =await account.findOne({_id: receiverId})

        if (sender.amount >= tamount){
            sender.amount -= tamount;
            receiver.amount += tamount;

            await sender.save();
            await receiver.save();

            const hist = {
                senderAccId: senderId,
                receiverAccId: receiverId,
                amount: tamount,
                transactionAt: moment().format()
            }
            await history.create(hist);
            res.json({msg: 'Transfer successful.',balance:sender.amount})
        }
        else {
        res.json({msg: 'insufficient balance'})
        }
    }
    catch(err) {
        console.log(err)
    }
});
module.exports = router;