const sgMail = require('@sendgrid/mail');
module.exports = class EmailService {
  static async sendEmail(bodyEmail){
    try{
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: 'renato.re2012@hotmail.com',
        from: bodyEmail.email,
        subject: bodyEmail.assunto,
        html: `<strong>EXEMPLO DE ENVIO: ${bodyEmail.email}</strong>
        <div>${bodyEmail.content}</div>
        `,
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

