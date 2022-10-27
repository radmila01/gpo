const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

/**
 * @swagger
 * paths:
 *   /users/{userId}:
 *     get:
 *       summary: Get a user by ID
 *       tags: [Users]
 *       parameters:
 *         ...
 *       responses:
 *         '200':
 *           description: A single user.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *
 *   /users:
 *     get:
 *       summary: Get all users
 *       tags: [Users]
 *       responses:
 *         '200':
 *           description: A list of users.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *            id:
 *              type: integer
 *              description: id
 *            name:
 *              type: string
 *              description: name
 *            email:
 *              type: string
 *              description: email
 *            role:
 *              type: string
 *              description: role
 *            organization:
 *              type: string
 *              description: organization
 *
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)
router.get('/getAll',userController.getAll)


module.exports = router