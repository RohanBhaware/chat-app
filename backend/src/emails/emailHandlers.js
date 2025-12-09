import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";

// export const sendWelcomeEmail = async (email, name, clientURL) => {       after domane name
//   const { data, error } = await resendClient.emails.send({
//     from: `${sender.name} <${sender.email}>`,
//     to: email,
//     subject: "Welcome to Chatify!",
//     html: createWelcomeEmailTemplate(name, clientURL),
//   });

//   if (error) {
//     console.error("Error sending welcome email:", error);
//     throw new Error("Failed to send welcome email");
//   }

//   console.log("Welcome Email sent successfully", data);
// };





export const sendWelcomeEmail = async (email, name, clientURL) => {
  const fromField = `${sender.name} <${sender.email}>`;
  console.log("FROM FIELD =>", fromField);

  const { data, error } = await resendClient.emails.send({
    from: fromField,
    to: "rohanbhaware76@gmail.com",
    subject: "Welcome to Chatify!",
    html: createWelcomeEmailTemplate(name, clientURL),
  });

  if (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }

  console.log("Welcome Email sent successfully", data);
};