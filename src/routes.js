const express = require('express')
const routes = express.Router()

const qrcodeController = require('./app/controller/qrcodeController')
routes.get('/', function(req,res){
    return res.send({
        Api:"Api para geração de QRCode!"
    })
})
routes.post('/qrcode', qrcodeController.makeCode)

module.exports = routes