import {insertSingleUser, insertMultipleUser} from './insert_users'

const express = require('express')
const app = express()
const port = 3000

app.get('/users', async (req, res) => {
    await insertMultipleUser();
    res.send('OK')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})