const sgMail = require('@sendgrid/mail');
module.exports = class EmailService {
  static async sendEmail(token, user){
    try{
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: user,
        from: 'progrenato@gmail.com',
        subject: 'TOKEN',
        html: `<strong>EXEMPLO DE ENVIO: ${token}</strong> `,
      };

      let email = await sgMail.send(msg)
      return email ? {data: "Email enviado com Sucesso!", status: 200}
      : {data: "Falha ao enviar email", status: 500}
    } catch (err){
      throw{
        data:'Falha ao enviar email!!',
        status: 500
      }
    }
  }
}

