const userController = require("../app/controllers/userController")


class userService {
    constructor(app){
        app.get('/register', userController.findAll)
        app.post('/register', userController.create)
        app.put('/register', userController.update)
        app.delete('/register', userController.remove)

    }
}

module.exports = userService