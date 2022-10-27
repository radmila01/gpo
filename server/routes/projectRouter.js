const Router = require('express')
const router = new Router()
const projectController = require('../controllers/projectController')

/**
 * @swagger
 * paths:
 *   /project/{projectId}:
 *     get:
 *       summary: Get a project by ID
 *       tags: [Projects]
 *       parameters:
 *         ...
 *       "responses":
 *           "200": {
 *             "description": "OK",
 *             "content": {
 *               "document": {
 *                 "schema": {
 *                   "type": "string",
 *                   "example": "some text"
 *                 }
 *               }
 *             }
 *           }
 *
 *           description: A single project.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: id
 *                   name:
 *                     type: string
 *                     description: name
 *
 *
 *   /project:
 *     get:
 *       summary: Get all projects
 *       tags: [Projects]
 *       "responses":
 *           "200": {
 *             "description": "OK",
 *             "content": {
 *               "document": {
 *                 "schema": {
 *                   "type": "string",
 *                   "example": "some text"
 *                 }
 *               }
 *             }
 *           }
 *
 *           description: A list of projects.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                     type: integer
 *                     description: id
 *                   name:
 *                     type: string
 *                     description: name
 */

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: The projects managing API
 */
router.post('/', projectController.create)
router.get('/getAll',projectController.getAll)
router.get('/:id',)

module.exports = router