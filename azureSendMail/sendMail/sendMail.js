// import nodemailer
var nodemailer = require("nodemailer");
var handlebars = require("handlebars");
var fs = require('fs');

const sendMail = async function(params) {
  const subject = params.subject || false;
  const message = params.message || false;
  const senderEmail = params.email || false;
  const senderName = params.name || false;
  const MAILUSR = params.MAILUSR || false;
  const MAILPWD = params.MAILPWD || false;
  const CCEMAIL = params.CCEMAIL || false;

  if (subject && message && senderEmail && senderName && MAILUSR && MAILPWD) {

    // parse the email template
    const htmlTemplate = await fs.readFileSync(__dirname + '/htmlEmailTemplate.html',"utf-8");
    // compile with handlebars
    const template = handlebars.compile(htmlTemplate);

    // set template variables
    let preMessage = 'Portfolio contact form';
    var replacements = {
      messageHeader: preMessage,
      messageSubject: subject,
      messageBody: message,
      messageSenderEmail: senderEmail,
      messageSenderName: senderName,
    };
    // get completed html
    var htmlToSend = template(replacements);

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
      from: `Portfolio form submission received <${MAILUSR}>`,
      to: `${MAILUSR}`,
      subject: `${subject}`,
      text: `${preMessage} - ${message}`,
      html: htmlToSend,
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
