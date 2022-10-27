const data = require('../model/data')

const getData = (req, res)=>{
    res.status(200).send(data)
}

module.exports = getData