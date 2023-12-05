module.exports = async function (context, req) {
    context.log("sendMail HTTP trigger function processed a request.");

    // import
    const {serializeError} = require("serialize-error");

    // env vars
    const SENDGRID_API_KEY  = process.env["SENDGRID_API_KEY"] || false;
    const SENDGRID_TEMPLATE_ID  = process.env["SENDGRID_TEMPLATE_ID"] || false;
    const SENDGRID_RECIPIENT_EMAIL  = process.env["SENDGRID_RECIPIENT_EMAIL"] || false;
    const CCEMAIL = process.env["CCADDRESS"] || false;

    const sendMail = require("./sendMail.js");

    // get data from POST request
    let body = JSON.stringify(req.body);
    let data = JSON.parse(body);

    // init status var
    let mailStatus;

    // throw errors if req body missing/badly formatted
    if (!SENDGRID_API_KEY || !SENDGRID_TEMPLATE_ID || !SENDGRID_RECIPIENT_EMAIL) {
        mailStatus = Error(`Email send failed. Reason: failed to provide valid SendGrid API details. At: ${new Date().toISOString()}\r\n`);
    }
    else if (!body || !data || typeof data !== "object") {
        mailStatus = Error(`SendGrid send failed. Reason: request failed at data parse stage. Did you send JSON and set content-type header? At: ${new Date().toISOString()}\r\n`);
    }
    // throw errors if missing details
    else if (!data || !data.message || !data.email || !data.name) {
        mailStatus = Error(`Email send failed. Reason: failed to provide name and/or email and/or message. At: ${new Date().toISOString()}\r\n`);
    }
    else {
        // trigger mail send
        mailStatus = await sendMail({
            subject: data.subject || "General Enquiry",
            message: data.message,
            email: data.email,
            name: data.name,
            SENDGRID_API_KEY,
            SENDGRID_TEMPLATE_ID,
            SENDGRID_RECIPIENT_EMAIL,
            CCEMAIL,
        });
    }

    let responseMessage;
    let responseStatus = 200;

    // if failure
    if (mailStatus instanceof Error) {
        responseStatus = 500;
        responseMessage = mailStatus;
        context.log("Failure: " + responseMessage);
    }
    // if success
    else {
        responseMessage = "Success! The email was sent.";
        context.log("Success: " + responseMessage);
    }

    context.res = {
        status: responseStatus,
        body: {
            result: serializeError(responseMessage),
        },
    };
};
