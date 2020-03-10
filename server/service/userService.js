const userController = require("../controllers/userController")


class userService {
    constructor(app){
        app.get('/', userController.findAll)
        app.post('/', userController.create)
        app.put('/', userController.update)
        app.delete('/', userController.remove)

    }
}

module.exports = userService