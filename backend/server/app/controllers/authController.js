const userController = require("./userController")


class userService {
    constructor(app){
        app.get('/aluno/register', userController.findAll)
        app.post('/aluno/register', userController.create)
        app.put('/aluno/register', userController.update)
        app.delete('/aluno/register', userController.remove)

    }
}

module.exports = userService