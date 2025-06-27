// const twilio = require('twilio');
// const accountSid = process.env.TWILIO_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = new twilio(accountSid, authToken);

// const sendPhoneOTP = async (phone, otp) => {
//     await client.messages.create({
//         body: `Your RoomSync verification code is: ${otp}. Please enter this code to continue. Do not share this code with anyone.`,
//         from: process.env.TWILIO_PHONE_NUMBER,
//         to: phone
//     });
// };
// module.exports = {sendPhoneOTP}
