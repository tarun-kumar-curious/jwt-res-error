const jwt = require("jsonwebtoken");
const User = require("../models/User");

const userAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "You must be logged in" });
    }
    const accessToken = authorization.replace("Bearer ", "");
    console.log();
    try {
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_PRIVATE_KEY);
        _id = decoded._id;
        const user = await User.findOne({ _id });

        if (!user) {
            return res.send(error(404, "user not found"));
        }
        // console.log("user before", user);
        req.user = user;
        // console.log("user after", user);
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({ error: "Authorization Token Not Valid" });
    }
};

const checkRole = (roles) => (req, res, next) => {
    !roles.includes(req.user.role) ? res.status(401).json({ message: "Unauthorized" }) : next();
};

module.exports = { userAuth, checkRole };
