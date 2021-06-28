const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

export default function loginHandler(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  //   const confirmedPassword = req.body.confirmedPassword;
  console.log(email);
  console.log(password);
}
