const routes = require ('express').Router();
const userController = require('../controllers/userController')

routes.route('/api/register')
    .post(userController.register)

routes.route('/api/login')
    .post(userController.login)

module.exports = routes