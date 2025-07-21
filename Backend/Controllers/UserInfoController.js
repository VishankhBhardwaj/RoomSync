const UserInfoModel = require('../models/UserInfo');
const userModel = require('../models/User');
const UserPayment = require('../models/UserPayment');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const userSettingsModel = require('../models/UserSettings');
exports.userInfo = async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).json({ msg: 'Unauthorized: User not authenticated' });
    }
    const userId = req.userId;

    const { FirstName, LastName, Email, PhoneNumber, Occupation, DateOfBirth, Bio } = req.body;
    if (!PhoneNumber || !Occupation || !DateOfBirth || !Bio) {
        return res.status(400).json({ msg: 'Please provide all details' });
    }

    try {
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }


        if (FirstName) user.FirstName = FirstName;
        if (LastName) user.LastName = LastName;
        if (Email) user.Email = Email;
        await user.save();


        let userInfo = await UserInfoModel.findOne({ user: user._id });

        if (userInfo) {
            userInfo.PhoneNumber = PhoneNumber;
            userInfo.DateOfBirth = DateOfBirth;
            userInfo.Occupation = Occupation;
            userInfo.Bio = Bio;
            await userInfo.save();
        } else {
            userInfo = new UserInfoModel({
                user: user._id,
                PhoneNumber,
                DateOfBirth,
                Occupation,
                Bio
            });
            await userInfo.save();
        }

        return res.status(200).json({
            msg: 'Updated Info successfully',
            user,
            userInfo
        });

    } catch (err) {
        return res.status(500).json({
            msg: 'Server Error',
            err: err.message || err
        });
    }
};
exports.userData = async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).json({ msg: 'Unauthorized: User not authenticated' });
    }

    const userId = req.user._id;

    try {
        const data = await UserInfoModel.findOne({ user: userId }).populate('user', '-Password');
        if (!data) {
            return res.status(404).json({ msg: 'UserInfo not found for this user' });
        }
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ msg: "Server error", error: err.message });
    }
}

exports.checkout = async (req, res) => {
    try {
        const { priceId } = req.body;

        if (!priceId) {
            return res.status(400).json({ msg: "priceId is required" });
        }

        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            success_url: `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `http://localhost:5173/cancel`,
        });

        return res.status(200).json({ sessionId: session.id, url: session.url });
    } catch (error) {
        console.error("Stripe checkout error:", error);
        return res.status(500).json({ msg: "Server error", error: error.message });
    }
}
exports.getSessionDetails = async (req, res) => {
    try {

        const { sessionId } = req.body;
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        const customer = await stripe.customers.retrieve(session.customer);
        const subscriptions = await stripe.subscriptions.list({
            customer: session.customer,
            status: 'all',
            expand: ['data.default_payment_method'],
        })
        const invoices = await stripe.invoices.list({
            customer: session.customer,
            limit: 10,
        });
        if (!req.user || !req.user._id) {
            return res.status(401).json({ msg: 'Unauthorized: User not authenticated' });
        }
        const userId = req.user._id;
        let data = await UserPayment.findOne({ user: userId });
        if (data) {
            data.Subscription = true;
            data.Date = new Date();
            data.Invoice = invoices.data;
        } else {
            data = new UserPayment({
                user: userId,
                Subscription: true,
                Date: new Date(),
                Invoice: invoices.data
            });
        }
        await data.save();
        return res.status(200).json({
            customer,
            subscriptions: subscriptions.data,
            invoices: invoices.data,
            msg: "Data saved successfully"
        });

    } catch (error) {
        console.error("Stripe fetch error:", error);
        return res.status(500).json({ msg: "Server error", error: error.message });
    }
}

exports.fetchPaymentInfo = async (req, res) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({ msg: 'Unauthorized: User not authenticated' });
        }
        const userId = req.user._id;
        const data = await UserPayment.find({ user: userId }).populate('user', '-Password');
        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({ msg: "Server error", error: error.message });
    }
}
exports.getMarketingDetails = async (req, res) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({ msg: 'Unauthorized: User not authenticated' });
        }
        const userId = req.user._id;
        const data = await userSettingsModel.findOne({ user: userId }).populate('user', '-Password');
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ msg: "Server error", error: error.message });
    }
}
exports.setMarketingDetails = async(req,res)=>{
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({ msg: 'Unauthorized: User not authenticated' });
        }
        const userId = req.user._id;
        const {newStatus} = req.body;
        const data = await userSettingsModel.findOneAndUpdate({ user: userId },{
            isMarketingOptedIn:newStatus
        },{new:true});
        return res.status(200).json({msg:"Updated Successfully",data});
    } catch (error) {
        return res.status(500).json({ msg: "Server error", error: error.message });
    }
}