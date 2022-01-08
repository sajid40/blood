const User = require("../models/users.js");
const register = async (req, res) => {
    try {
        const user = new User(req.body);
        const data = await user.save();
        res.json({
            data,
        });
    } catch (err) {
        res.json({
            err,
        });
    }
};

const userLogin = async (req, res) => {
    try {
        const phone = req.body.phoneNumber;
        console.log(phone);
        const data = await User.findOne({ phoneNumber: phone });
        // console.log(data.phoneNumber);
        if (data.phoneNumber == phone) {
            res.json({
                data,
            });
        } else {
            res.json({
                mgs: "Not match!",
            });
        }
    } catch (err) {
        res.json(err);
    }
};

const allGet = async (req, res) => {
    try {
        const data = await User.find();
        res.json({
            data,
        });
    } catch (err) {
        res.json({
            err,
        });
    }
};

const Log = async (req, res) => {
    try {
        const phone = req.body.phoneNumber;
        const data = await User.findOne({ phoneNumber: phone });

        if (data) {
            res.json({
                success: true,
                mgs: data.phoneNumber,
            });
        } else {
            res.json({
                success: false,
                msg: "User not found",
            });
        }
    } catch (err) {
        res.json({
            err,
        });
    }
};

module.exports = {
    register,
    allGet,
    userLogin,
    Log,
};
