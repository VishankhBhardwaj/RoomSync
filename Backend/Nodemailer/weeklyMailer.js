const cron = require('node-cron');
const userSettingModel = require('../models/UserSettings');
const { sendEmail } = require('./index');

cron.schedule("0 10 * * 1", async () => {
    const users = await userSettingModel.find({ isMarketingOptedIn: true }).populate('user', '-Password');
    for (const user of users) {
        await sendEmail({
            to: user.user.Email,
            subject: "🏠 Discover What’s New on RoomSync This Week!",
            html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f6f6f6; color: #333;">
      <h2 style="color: #2B4C67;">✨ Hey ${user.user.FullName || 'there'},</h2>
      <p>Here’s what’s new on <strong>RoomSync</strong> this week – making your roommate journey smoother and smarter:</p>
      
      <ul style="line-height: 1.6;">
        <li>🔍 <strong>Smarter Matches:</strong> Our AI got an upgrade – better suggestions for finding your ideal roommate.</li>
        <li>💬 <strong>Private Chat Enhancements:</strong> New filters and smoother real-time messaging experience.</li>
        <li>📅 <strong>Roommate Meetups:</strong> Join upcoming virtual hangouts to connect with potential roommates.</li>
      </ul>
      
      <p>💡 <em>Pro Tip:</em> Update your profile to improve your match chances!</p>

      <a href="https://your-website-url.com/dashboard" style="display: inline-block; margin-top: 20px; background-color: #2B4C67; color: white; padding: 10px 20px; text-decoration: none; border-radius: 8px;">Visit RoomSync Now</a>

      <p style="margin-top: 30px;">Stay synced, <br><strong>The RoomSync Team</strong></p>
    </div>
  `,
        });

    }
    console.log("Weekly marketing emails sent.");
})