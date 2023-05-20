const routes = require ('express').Router();
const userController = require('../controllers/userController')
const messageController = require('../controllers/messageController')
routes.route('/api/register')
    .post(userController.register)

routes.route('/api/login')
    .post(userController.login)

routes.route("/api/allusers")
    .get(userController.getAllUsers)

routes.route("/api/addmsg")
    .post(messageController.addMsg)

routes.route("/api/getmsg")
    .post(messageController.getMsg)

module.exports = routes