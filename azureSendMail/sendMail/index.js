module.exports = async function (context, req) {

  // env vars
  const MAILUSR = process.env["GMAILACCOUNT"] || false;
  const MAILPWD = process.env["GMAILPASSWORD"] || false;
  const CCEMAIL = process.env["CCADDRESS"] || false;

  const sendMail = require('./sendMail.js');

  // get data from POST request
  let body = JSON.stringify(context.req.body);
  let data = JSON.parse(body);

  // init status var
  let mailStatus;

  // throw errors if req body missing/badly formatted
  if (!body || !data || typeof data !== 'object') {
    mailStatus = Error(`Nodemailer send failed. Reason: request failed at data parse stage. Did you send JSON and set content-type header? At: ${new Date().toISOString()}\r\n`);
  }
  // throw errors if missing details
  else if (!data || !data.message || !data.email || !data.name) {
    mailStatus = Error(`Nodemailer send failed. Reason: failed to pass subject and/or message. At: ${new Date().toISOString()}\r\n`);
  }
  else if (!MAILUSR || !MAILPWD) {
    mailStatus = Error(`Nodemailer send failed. Reason: failed to provide valid SMTP address and password. At: ${new Date().toISOString()}\r\n`);
  }
  else {
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
  }

  let responseMessage;
  let responseStatus = 200;

  // if failure
  if (mailStatus instanceof Error) {
    responseStatus = 500;
    responseMessage = mailStatus;
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
