// import nodemailer
const mg = require('nodemailer-mailgun-transport');
var nodemailer = require("nodemailer");
var handlebars = require("handlebars");
var fs = require('fs');


const sendMail = async function(params) {
  const subject = params.subject || false;
  const message = params.message || false;
  const senderEmail = params.email || false;
  const senderName = params.name || false;
  const MAILSENDADDRESS = params.MAILSENDADDRESS || false;
  const MAILUSR = params.MAILUSR || false;
  const MAILGUNDOMAIN = params.MAILGUNDOMAIN || false;
  const MAILGUNAPIKEY = params.MAILGUNAPIKEY || false;
  const CCEMAIL = params.CCEMAIL || false;

  if (subject && message && senderEmail && senderName && MAILUSR && MAILGUNAPIKEY && MAILSENDADDRESS) {

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

    // Create a transporter object using mailgun api
    const mgAuth = {
      auth: {
        api_key: MAILGUNAPIKEY,
        domain: MAILGUNDOMAIN,
      },
      host: 'api.eu.mailgun.net',
    }
    const nodemailerMailgun = nodemailer.createTransport(mg(mgAuth));

    // Message object
    let emailMessage = {
      from: `Portfolio form submission received <${MAILSENDADDRESS}>`,
      to: `${MAILUSR}`,
      subject: `${subject}`,
      text: `${preMessage} - ${message}`,
      html: htmlToSend,
      priority: 'high',
    };

    if (CCEMAIL && CCEMAIL !== '') {
      emailMessage.cc = `${CCEMAIL}`;
    }

    await nodemailerMailgun.sendMail(emailMessage, (err, info) => {
      if (err) {
        return Error(`Nodemailer/Mailgun send failed. Reason: ${err.message} at: ${new Date().toISOString()}\r\n`);
      }
      return true;

    });
  }

}

module.exports = sendMail;
