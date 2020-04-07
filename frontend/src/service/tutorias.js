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
  static async sendEmail(fields) {
    try {
      const response = await AXIOS_INSTANCE.post('email', fields)

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
  static async listarPerfil(id) {
    try {

      const response = await AXIOS_INSTANCE.get(`users/perfil/${id}`)

      return response.data.user
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
  static async updateTutoria(id, fields) {
    try {
      const response = await AXIOS_INSTANCE.put(`tutorias/${id}` , fields)

      return response
    } catch (err) {
      throw err.response.data;
    }
  }
  static async updateAdmin(id) {
    try {
      const response = await AXIOS_INSTANCE.put(`users/admin/${id}`)

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
  static async updateUser(id, fields,config) {
    try {
      const response = await AXIOS_INSTANCE.put(`users/update/${id}`, fields, config)

      return response
    } catch (err) {
      throw err.response.data;
    }
  }
  static async paginationTutoria(pagina){
    try {
      const response = await AXIOS_INSTANCE.get(`tutorias/pagination/${pagina}`)

      return response
    } catch (err) {
      throw err.response.data;
    }
  }
  static async paginationAgendado(pagina){
    try {
      const response = await AXIOS_INSTANCE.get(`tutorias/agendado/${pagina}`)

      return response
    } catch (err) {
      throw err.response.data;
    }
  }
}

export default TutoriaService
