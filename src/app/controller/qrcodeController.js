const QRCode = require('qrcode')
module.exports={
    async makeCode(req, res){
        try {
            let name_file = req.body.data.replace(/['/','.',':']/g, '_')
            const qrcode_file = `public/qrcode/${name_file}.png`
            const image = await QRCode.toFile(qrcode_file,req.body.data)
            //return res.send({}) 
            return res.download(qrcode_file)
        } catch (error) {
            console.log(error)
            return res.send({error:error.message})
        }
    }
}