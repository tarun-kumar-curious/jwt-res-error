const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

async function signup(req, res) {
    const response = validationResult(req);
    if (!response.isEmpty()) {
        return res.status(400).json({
            success: false,
            error: response.array(),
            mressage: "Validation failed",
        });
    }
    const { username, email, password, country, phonenumber, role } = req.body;
    if (!(username && email && password && country && phonenumber && role)) {
        return res.status(400).json({
            msg: "All fields are required",
            missingFields: ["username", "email", "password", "country", "phonenumber", "role"],
        });
    }
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }
        user = new User({
            username,
            email,
            password,
            country,
            phonenumber,
            role,
        });

        await user.save();

        res.json({ msg: "User registered successfully" });
    } catch (err) {
        if (err.name === "ValidationError") {
            const messages = Object.values(err.errors).map((val) => val.message);
            return res.status(400).json({ msg: messages });
        } else if (err.name === "CastError") {
            return res.status(400).json({ msg: "Invalid id" });
        }
        console.error(err.message);
        res.status(500).send("Server error");
    }
}

async function signin(req, res) {
    const data = validationResult(req);
    if (!data.isEmpty()) {
        return res.status(400).json({
            success: false,
            error: data.array(),
            mressage: "Validation failed",
        });
    }
    const { email, password } = req.body;

    if (!(email && password)) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
        const accessToken = generateAccessToken({ _id: user._id });
        const refreshToken = generateRefreshToken({ _id: user._id });
        res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true });
        res.json({ msg: "User logged in successfully", AccessToken: accessToken, refreshToken });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}

// this api will check the refreshToken validity and generate a new accessToken
const refreshAccessTokenController = async (req, res) => {
    const cookies = req.cookies;

    // console.log("email from refresh:", email);

    if (!cookies.refreshToken) {
        return res.status(401).json({ msg: "Refresh token in cookie is required" });
    }
    const refreshToken = cookies.refreshToken;

    try {
        const verifyToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_PRIVATE_KEY);
        const _id = verifyToken._id;
        const accessToken = generateAccessToken({ _id });
        return res.status(201).json({ accessToken: accessToken });
    } catch (e) {
        console.log(e);
        return res.status(401).send("Invalid refresh key");
    }
};

//internal functions`
const generateAccessToken = (data) => {
    try {
        // console.log("data:" + data);
        const token = jwt.sign(data, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
            expiresIn: "20s",
        });
        // console.log(token);
        return token;
    } catch (e) {
        console.log(e);
    }
};

const generateRefreshToken = (data) => {
    try {
        const token = jwt.sign(data, process.env.REFRESH_TOKEN_PRIVATE_KEY, {
            expiresIn: "1y",
        });
        console.log(token);
        return token;
    } catch (e) {
        console.log(e);
    }
};

module.exports = { signup, signin, refreshAccessTokenController };
