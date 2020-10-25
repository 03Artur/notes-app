const yup = require('yup');

const passwordRule = {
  pattern: /(?=.*?\d)(?=.*?[a-z])(?=.*?[A-Z])^.{8,60}$/,
  message:
    'Your password must be at least 8 characters long, be of mixed case and also contain a digit or symbol!',
};

exports.loginSchema = yup.object({
  email: yup.string().trim().email().required(),
  password: yup.string().required(),
});

exports.signUpSchema = yup.object({
  firstName: yup.string().trim().required(),
  lastName: yup.string().trim().required(),
  email: yup.string().trim().email().required(),
  password: yup.string().matches(passwordRule.pattern, passwordRule.message).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

exports.createNoteSchema = yup.object({
  title: yup.string().trim().max(255),
  text: yup.string().trim().max(255),
  image: yup.string(),
});

exports.updateNoteSchema = yup.object({
  title: yup.string().trim().max(255),
  text: yup.string().trim().max(255),
  image: yup.string(),
});
