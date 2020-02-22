import * as Yup from 'yup';

const { ValidationError } = Yup;

function setErrors(err, ref) {
  const validationErrors = {};
  if (err instanceof ValidationError) {
    err.inner.forEach((error) => {
      validationErrors[error.path] = error.message;
    });
    ref.current.setErrors(validationErrors);
  }
  return validationErrors;
}

export { ValidationError, setErrors };

export default {
  user: {
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
