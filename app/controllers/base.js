'use strict'
const serverApp = require('../../server')
class BaseController {
  constructor () {
  }
  returnOk (req,res,data) {
    console.log('data:',data)
    res.json({
      errorCode: 0,
      data: data
    })
  }
}
module.exports = BaseController
