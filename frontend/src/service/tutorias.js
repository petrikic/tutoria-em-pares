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
  static async listarTutoriasOferecidas() {
    try {      

      const response = await AXIOS_INSTANCE.get('/tutorias/getTutoriasOferecidas')
      console.log(response)
      

      return response.data.tutorias
    } catch (err) {
      throw err.response.data;
    }
  }
  static async listarPage(page) {
    try {

      const response = await AXIOS_INSTANCE.get('tutorias?page=' + page)

      return response.data.tutorias
    } catch (err) {
      throw err.response.data;
    }
  }
  static async createTutoria(fields) {
    try {
      const response = await AXIOS_INSTANCE.post('tutorias', fields)

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
      throw err.response.data;

    }
  }
  static async registrar(fields) {
    try {
      const response = await AXIOS_INSTANCE.post('auth/register', fields)

      return response
    } catch (err) {
      throw err.response.data;

    }
  }
  static async sendEmail(fields) {
    try {
      const response = await AXIOS_INSTANCE.post('email', fields)

      return response
    } catch (err) {
      throw err.response.data;
    }
  }
  static async forgotPassword(fields) {
    try {
      const response = await AXIOS_INSTANCE.post('/auth/forgot_password', fields)

      return response
    } catch (err) {
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
  static async updateUser(id, fields,config) {
    try {
      const response = await AXIOS_INSTANCE.put(`users/update/${id}`
      , fields, config)

      return response
    } catch (err) {
      throw err.response.data;
    }
  }
  static async removeUser(id) {
    try {
      const response = await AXIOS_INSTANCE.delete(`users/remove/${id}`)

      return response
    } catch (err) {
      throw err.response.data;
    }
  }
  static async removerTutoria(id) {
    try {
      const response = await AXIOS_INSTANCE.delete(`tutorias/${id}`)

      return response
    } catch (err) {
      throw err.response.data;
    }
  }
  
  static async updateTutoriaOferecida(id, fields) {
    try {
      
      const response = await AXIOS_INSTANCE.put(`tutorias/putTutoriaOferecida/${id}` , fields)            
      return response
    } catch (err) {
      throw err.response.data;
    }
  }
  static async updateTutoria(id, fields) {
    try {
      
      const response = await AXIOS_INSTANCE.put(`tutorias/${id}` , fields)            
      return response
    } catch (err) {
      throw err.response.data;
    }
  }
  static async upload(fields) {
    try {
      const response = await AXIOS_INSTANCE.post('users/upload' , fields)

      return response
    } catch (err) {
      throw err.response.data;
    }
  }
}

export default TutoriaService
