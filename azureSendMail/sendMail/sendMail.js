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

    var readHTMLFile = function(path, callback) {
      fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
          throw err;
        }
        else {
          callback(null, html);
        }
      });
    };

    // require the email template
    const htmlTemplate = await readHTMLFile(__dirname + './htmlEmailTemplate.html');
    // compile with handlebars
    var template = handlebars.compile(htmlTemplate);

    // set template variables
    let preMessage = 'Received a contact form submission from chris-snowden.me';
    var replacements = {
      messageHeader: preMessage,
      messageSubject: message,
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
      from: `Form submission from chris-snowden.me<${MAILUSR}>`,
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
