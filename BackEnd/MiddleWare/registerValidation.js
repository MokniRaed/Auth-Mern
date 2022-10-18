const { body, validationResult } = require("express-validator");
exports.regiterValidation = [
  body("email", "Enter a valid address email").isEmail(),
  body("password", "Verify your password")
    .isLength({ min: 8 })
    // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i"),
];

exports.loginValidation = [body("email", "Your email is not valid").isEmail()];

// Finds the validation errors in this request and wraps them in an object with handy functions
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
