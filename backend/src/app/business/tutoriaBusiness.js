
class TutoriaBusiness {

    static async validaNovoAluno(tutoria, aluno) {
        try {

            if (tutoria.users.length < 10) {
                    
                var existe = tutoria.users.includes(aluno._id)

                if (!existe) {                

                    await tutoria.users.push(aluno);

                    if (tutoria.length == 10) {tutoria.status = "Completa";}
                    
                    await tutoria.save();
                    
                    return true;
                }
                return false;
            }
            return false;


        } catch (err) {
            return err

        }
    }

}
module.exports = TutoriaBusiness