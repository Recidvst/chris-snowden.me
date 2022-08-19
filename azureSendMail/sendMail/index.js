module.exports = async function (context, req) {

  // import
  const {serializeError} = require('serialize-error');

  // env vars
  // const MAILUSR = process.env['MAILUSR'] || false;
  // const MAILSENDADDRESS = process.env['MAILSENDADDRESS'] || false;
  // const MAILGUNDOMAIN = process.env["MAILGUNDOMAIN"] || false;
  // const MAILGUNAPIKEY = process.env["MAILGUNAPIKEY"] || false;
  // const CCEMAIL = process.env["CCADDRESS"] || false;

  // const sendMail = require('./sendMail.js');

  // get data from POST request
  // let body = JSON.stringify(context.req.body);
  // let data = JSON.parse(body);

  // init status var
  let mailStatus;

  // TODO: replace mailgun with another SMTP service
  mailStatus = Error(`Mail send is currently suspended until I replace Mailgun with another SMTP service... At: ${new Date().toISOString()}\r\n`);

  // throw errors if req body missing/badly formatted
  // if (!MAILGUNAPIKEY || !MAILSENDADDRESS ||!MAILGUNDOMAIN || !MAILUSR) {
  //   mailStatus = Error(`Nodemailer send failed. Reason: failed to provide valid Mailgun SMTP API details. At: ${new Date().toISOString()}\r\n`);
  // }
  // else if (!body || !data || typeof data !== 'object') {
  //   mailStatus = Error(`Nodemailer send failed. Reason: request failed at data parse stage. Did you send JSON and set content-type header? At: ${new Date().toISOString()}\r\n`);
  // }
  // // throw errors if missing details
  // else if (!data || !data.message || !data.email || !data.name) {
  //   mailStatus = Error(`Nodemailer send failed. Reason: failed to pass subject and/or message. At: ${new Date().toISOString()}\r\n`);
  // }
  // else {
  //   // trigger mail send
  //   mailStatus = await sendMail({
  //     subject: data.subject || 'General Enquiry',
  //     message: data.message,
  //     email: data.email,
  //     name: data.name,
  //     MAILUSR,
  //     MAILSENDADDRESS,
  //     MAILGUNDOMAIN,
  //     MAILGUNAPIKEY,
  //     CCEMAIL,
  //   });
  // }

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
    body: {
      result: serializeError(responseMessage),
    },
  };

}
