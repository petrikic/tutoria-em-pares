
class TutoriaBusiness {

    static async validaNovoAluno(tutoria, aluno) {
        try {

            var existe = tutoria.users.includes(aluno._id)

            if (!existe) {

                await tutoria.users.push(aluno);
                
                if (tutoria.users.length === 10) { tutoria.status = "Agendado"; }
                
                await tutoria.save();

                return true;
            }
            return false;

        } catch (err) {
            return err

        }
    }

}
module.exports = TutoriaBusiness