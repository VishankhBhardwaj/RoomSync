const nodemailer = require("nodemailer");

// Create a transporter for SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
async function sendOTP(email, otp) {
    const info = await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "Your OTP for Verification",
        text: `Dear User,

Your One-Time Password (OTP) for verification is: ${otp}

Please enter this OTP to complete your verification. The OTP is valid for the next 10 minutes.

If you did not request this, please ignore this email.

Best regards,
Real Estate Company
contact@roomsync.com
www.roomsync.com`,
        html: `<p>Dear User,</p>

<p>Your <strong>One-Time Password (OTP)</strong> for verification is:</p>
<h2>${otp}</h2>

<p>Please enter this OTP to complete your verification. The OTP is valid for the next <strong>10 minutes</strong>.</p>

<p>If you did not request this, please ignore this email.</p>

<p>Best regards,<br>
<strong>RoomSync Company</strong><br>
contact@roomsync.com<br>
<a href="https://www.roomsync.com">Visit our website</a></p>`
    });

    console.log("OTP email sent: %s", info.messageId);
}

module.exports = { sendOTP };