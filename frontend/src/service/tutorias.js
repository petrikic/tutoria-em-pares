import AXIOS_INSTANCE from "./config";

class TutoriaService {
  static async listar() {
    try {

      const response = await AXIOS_INSTANCE.get('tutorias')

      return response.data.tutorias
    } catch (err) {
      throw err.response.data;
    }
  }
  static async logar(fields) {
    try {
      const response = await AXIOS_INSTANCE.post('/auth/authenticate', fields)

      return response
    } catch (err) {
      console.log(err)
      throw err.response.data;

    }
  }
  static async registrar(fields) {
    try {
      const response = await AXIOS_INSTANCE.post('auth/register', fields)

      return response
    } catch (err) {
      console.log(err)
      throw err.response.data;

    }
  }
  static async sendEmail(fields) {
    try {
      const response = await AXIOS_INSTANCE.post('email', fields)

      return response
    } catch (err) {
      console.log(err)
      throw err.response.data;
    }
  }
  static async listarUsers() {
    try {

      const response = await AXIOS_INSTANCE.get('users')

      return response.data.user
    } catch (err) {
      throw err.response.data;
    }
  }
  static async updateUser(id, fields) {
    try {
      const response = await AXIOS_INSTANCE.put(`users/update/${id}` , fields)

      return response
    } catch (err) {
      console.log(err)
      throw err.response.data;
    }
  }
  static async removerTutoria(id) {
    try {
      const response = await AXIOS_INSTANCE.delete(`tutorias/${id}`)

      return response
    } catch (err) {
      console.log(err)
      throw err.response.data;
    }
  }
  static async updateTutoria(id, fields) {
    try {
      const response = await AXIOS_INSTANCE.put(`tutorias/${id}` , fields)

      return response
    } catch (err) {
      console.log(err)
      throw err.response.data;
    }
  }
}

export default TutoriaService
