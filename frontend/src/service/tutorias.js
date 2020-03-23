import  AXIOS_INSTANCE  from "./config";

class TutoriaService {
    static async listar(){
    try {

      const response = await AXIOS_INSTANCE.get('tutorias')

      return response.data.tutorias
    } catch (err) {
      throw err.response.data;
    }
  }
  static  enviar(fields){
    try {
      const response = AXIOS_INSTANCE.post('/auth/authenticate', fields)

      return response
    } catch (err) {
      console.log(err)
      throw err.response.data;

    }
  }
}

export default TutoriaService


