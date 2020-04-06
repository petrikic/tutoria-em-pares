import AXIOS_INSTANCE from "./config";
class Auth {
  static async registrar(fields) {
    try {
      const response = await AXIOS_INSTANCE.post('auth/register', fields)

      return response
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
  static async forgotPassword(fields) {
    try {
      const response = await AXIOS_INSTANCE.post('/auth/forgot_password', fields)

      return response
    } catch (err) {
      throw err.response.data;
    }
  }
}

export default Auth