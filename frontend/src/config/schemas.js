import * as Yup from 'yup';

export function setErrors(err, ref) {
  const validationErrors = {};
  if (err instanceof Yup.ValidationError) {
    err.inner.forEach((error) => {
      validationErrors[error.path] = error.message;
    });
    ref.current.setErrors(validationErrors);
  }
  return validationErrors;
}

export default {
  user: {
    signUp: Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(3),
      username: Yup.string().required(),
      organization: Yup.string(),
    }),
    signIn: Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    update: Yup.object().shape({
      username: Yup.string().required(),
      email: Yup.string().required(),
      organization: Yup.string(),
      photo: Yup.string(),
    }),
  },
  shortner: {
    basic: Yup.object().shape({
      url: Yup.string().url().required(),
      hits_limit: Yup.number(),
      expires_in: Yup.string(),
    }),
  },
};
