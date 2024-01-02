const { check } = require("express-validator");

exports.validateUser = [
    check('username', "Please enter a valid username").not().isEmpty(),
    check('email', "please enter a valid email ").isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', "Password must have at least one special characters ").isStrongPassword({
        min: 6, minUppercase: 1, maxUppercase: 1
    }),
    check('phonenumber', "Mobile nummber must be 10 digits").isLength({ min: 10, max: 10 }),
    check("country", "Provide your country name ."),
    check("role", "Role is either mentor, mentee, or organization ").not().isEmpty()
]


exports.validateSignInUser = [
    check('email', 'Please enter a valid email')
        .notEmpty().withMessage('Email is required'),

    check('password').notEmpty().withMessage('Password is required')
];