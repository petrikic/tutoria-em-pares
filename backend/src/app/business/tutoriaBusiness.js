const Tutoria = require('../models/tutoria')
const User = require('../models/user')
class TutoriaBusiness {

    static async validaNovoAluno(req) {

        const tutoria = await Tutoria.findById(req.params.tutoriaId)
        const aluno = await User.findById(req.userId);
        var existe = tutoria.users.includes(aluno._id)

        if (!existe) {

            await tutoria.users.push(aluno);

            if (tutoria.users.length === 10) { tutoria.status = "AgendadoAluno"; }

            await tutoria.save();

            return tutoria;
        }
        else {
            throw {                         
                status: '403',
                client_message: 'Aluno já incluído à tutoria',
            }
        }

    }
}
module.exports = TutoriaBusiness