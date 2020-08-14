const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require('bcryptjs');

// @route       POST  api/users
// @desc        Register a user
// @access      Public

const validators = [
  check("name", "please add a name").not().isEmpty(),
  check("email", "please include a valid email").isEmail(),
  check(
    "password",
    "please enter a password with 6 or more characters"
  ).isLength({
    min: 6,
  }),
];

router.post("/", validators, async (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({
      errors: errors.array(),
    });
  }
  const { name, email, password } = request.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return response.status(400).json({ msg: "User already exists !" });
    }
    user = new User({
      name,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    response.send("User saved")
  } catch (error) {
    console.error(err.message);
    response.status(500).send('Server error');
  }
});

module.exports = router;
