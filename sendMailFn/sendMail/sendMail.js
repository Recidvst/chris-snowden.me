// eslint-disable-next-line import/no-extraneous-dependencies
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async function(params) {
    const senderEmail = params.email || false;
    const senderName = params.name || false;
    const SENDGRID_API_KEY = params.SENDGRID_API_KEY || false;
    const SENDGRID_TEMPLATE_ID = params.SENDGRID_TEMPLATE_ID || false;
    const SENDGRID_RECIPIENT_EMAIL = params.SENDGRID_RECIPIENT_EMAIL || false;
    const CCEMAIL = params.CCEMAIL || false;

    if (senderEmail && senderName && SENDGRID_API_KEY && SENDGRID_TEMPLATE_ID && SENDGRID_RECIPIENT_EMAIL) {
        // set template variables
        let preMessage = "Contact form received from chris-snowden.me";
        let subject = params.subject ?? "General Enquiry";
        let message = params.message ?? "No message provided.";

        // Message object
        let emailMessage = {
            from: "General Enquiry <chris@chris-snowden.me>",
            to: SENDGRID_RECIPIENT_EMAIL,
            subject: subject,
            templateId: SENDGRID_TEMPLATE_ID,
            dynamicTemplateData: {
                subject: subject,
                messageHeader: preMessage,
                messageSubject: subject,
                messageSenderName: senderName,
                messageSenderEmail: senderEmail,
                messageBody: message,
            },
            priority: "high",
        };

        if (CCEMAIL && CCEMAIL !== "") {
            emailMessage.cc = `${CCEMAIL}`;
        }

        await sgMail
            .send(emailMessage)
            .catch((error) => {
                return Error(`SendGrid send failed. Reason: ${error.message} at: ${new Date().toISOString()}\r\n`);
            });
    }
};

module.exports = sendMail;
