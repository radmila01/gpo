const Router = require('express')
const router = new Router()
const projectController = require('../controllers/projectController')
router.post('/', projectController.create)
router.get('/getAll',projectController.getAll)
router.get('/:id',)

module.exports = router