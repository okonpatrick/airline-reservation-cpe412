const router = require('express').Router()
const flieghtController = require('./../controllers/flieght')


router.route('/').get(flieghtController.getFlieghts)


module.exports = router