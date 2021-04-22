module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  // env vars
  const MAILUSR = process.env["GMAILACCOUNT"] || false;
  const MAILPWD = process.env["GMAILPASSWORD"] || false;
  const CCEMAIL = process.env["CCADDRESS"] || false;

  // import mail function
  const sendMail = require('./sendMail.js');

  // get data from POST request
  const data = (req.query.mailData || (req.body && req.body.mailData));
  context.log(data);

  // init status var
  let mailStatus;

  // throw errors if missing details
  if (!data || !data.message || !data.email || !data.name) {
    mailStatus = Error(`Nodemailer send failed. Reason: failed to pass subject and/or message. At: ${new Date().toISOString()}\r\n`);
  }
  if (!MAILUSR || !MAILPWD) {
    mailStatus = Error(`Nodemailer send failed. Reason: failed to provide valid SMTP address and password. At: ${new Date().toISOString()}\r\n`);
  }

  // trigger mail send
  mailStatus = await sendMail({
    subject: data.subject || 'General Enquiry',
    message: data.message,
    email: data.email,
    name: data.name,
    MAILUSR,
    MAILPWD,
    CCEMAIL,
  });
  context.log(mailStatus);

  let responseMessage;
  let responseStatus = 200;

  // if failure
  if (mailStatus instanceof Error) {
    responseStatus = 500;
    responseMessage = 'Sorry, something went wrong with the request - the email was not sent.';
  }
  // if success
  else {
    responseMessage = 'Success! The email was sent.';
  }

  context.res = {
    status: responseStatus,
    body: responseMessage,
  };

}
