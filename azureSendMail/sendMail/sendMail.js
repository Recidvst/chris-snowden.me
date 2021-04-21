// import nodemailer
let nodemailer = require("nodemailer");

const sendMail = async function(params) {
  const subject = params.subject || false;
  const message = params.message || false;
  const MAILUSR = params.MAILUSR || false;
  const MAILPWD = params.MAILPWD || false;
  const CCEMAIL = params.CCEMAIL || false;

  if (subject && message && MAILUSR && MAILPWD) {

    let preMessage = '<h1>Received a contact form submission from chris-snowden.me</h1></br>';

    // Create a SMTP transporter object
    let mailer = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: 'Yes',
      auth: {
        user: MAILUSR,
        pass: MAILPWD,
      },
      debug: true, // show debug output
    });

    // Message object
    let emailMessage = {
      from: `Form submission from chris-snowden.me<${MAILUSR}>`,
      to: `${MAILUSR}`,
      subject: `${subject}`,
      text: `${preMessage}<br/>${message}`,
      html: `${preMessage}<p>${message}</p>`,
      priority: 'high',
    };

    if (CCEMAIL && CCEMAIL !== '') {
      emailMessage.cc = `${CCEMAIL}`;
    }

    await mailer.sendMail(emailMessage, (err, info) => {
      if (err) {
        return Error(`Nodemailer send failed. Reason: ${err.message} at: ${new Date().toISOString()}\r\n`);
      }
      return true;

    });
  }

}

module.exports = sendMail;
