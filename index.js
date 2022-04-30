const express = require('express');
const app = express();

const PORT = require('./config/config.js')
app.use(express.json())

const router = require('./apis/routes.js')
const account_router = require('./apis/account.js')
const cust_router = require('./apis/customer.js')
const hist_router = require('./apis/history.js')

app.use('/', router);
app.use('/api/account',account_router);
app.use('/api/customer',cust_router);
app.use('/api/history',hist_router);


app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))

