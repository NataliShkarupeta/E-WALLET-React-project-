import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/authOperations';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import {
  FormLayout,
  Form,
  ButtonRegister,
  RegistrationInput,
  RegistrationLabel,
  InputIcon,
  ButtonContainer,
  ErrorText,
  ButtonLogIn,
  LogoContainer,
} from './RegistrationForm.styled';
import Icons from 'images/icons.svg';
import { Logo } from 'components/Logo/Logo';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectErrorAuth } from 'redux/auth/authSelectors';
// import PasswordStrengthBar from 'react-password-strength-bar';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail must be valid email')
    .required('E-mail is a required field'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must be at most 12 characters')
    .required('Password is a required field'),
  passwordConfirmation: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must be at most 12 characters')
    .oneOf(
      [yup.ref('password'), null],
      'Confirm password must match the password'
    )
    .required('Confirm password is a required field'),
  name: yup
    .string()
    .min(1)
    .max(12, 'First name must be at most 12 characters')
    .required('Please enter your name'),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const emailId = nanoid();
  const passwordId = nanoid();
  const nameId = nanoid();
  const error = useSelector(selectErrorAuth);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      }}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          register({
            username: values.name,
            email: values.email,
            password: values.password,
          })
        );
        if (error) {
          toast.error('Oops...something is wrong, try again!');
        }
        resetForm();
      }}
      validationSchema={validationSchema}
    >
      {({
        errors,
        touched,
        values,
        handleSubmit,
        handleBlur,
        handleChange,
        isSubmitting,
      }) => (
        <FormLayout>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <ToastContainer />
            <RegistrationLabel htmlFor={emailId}>
              <RegistrationInput
                type="email"
                name="email"
                id={emailId}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="E-mail:  example@mail.com"
              />
              <InputIcon width="21" height="16">
                <use href={`${Icons}#icon-email`} />
              </InputIcon>
            </RegistrationLabel>
            <ErrorText>
              {errors.email && touched.email && errors.email}
            </ErrorText>
            <RegistrationLabel htmlFor={passwordId}>
              <RegistrationInput
                type="password"
                name="password"
                id={passwordId}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
              />
              <InputIcon width="16" height="21">
                <use href={`${Icons}#icon-lock`} />
              </InputIcon>
            </RegistrationLabel>
            <ErrorText>
              {errors.password && touched.password && errors.password}
            </ErrorText>
            <RegistrationLabel htmlFor={passwordId}>
              <RegistrationInput
                type="password"
                name="passwordConfirmation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirmation}
                placeholder="Confirm password"
              />
              <InputIcon width="16" height="21">
                <use href={`${Icons}#icon-lock`} />
              </InputIcon>
            </RegistrationLabel>
            <ErrorText>
              {errors.passwordConfirmation &&
                touched.passwordConfirmation &&
                errors.passwordConfirmation}
            </ErrorText>
            <RegistrationLabel htmlFor={nameId}>
              <RegistrationInput
                type="text"
                name="name"
                id={nameId}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="First name:  Adrian"
              />
              <InputIcon width="18" height="18">
                <use href={`${Icons}#icon-account_box`} />
              </InputIcon>
            </RegistrationLabel>
            <ErrorText>{errors.name && touched.name && errors.name}</ErrorText>
            <ButtonContainer>
              <ButtonRegister type="submit" disabled={isSubmitting}>
                {'Register'.toUpperCase()}
              </ButtonRegister>
              <Link to="/login">
                <ButtonLogIn type="ButtonLogIn">
                  {'Log in'.toUpperCase()}
                </ButtonLogIn>
              </Link>
            </ButtonContainer>
          </Form>
        </FormLayout>
      )}
    </Formik>
  );
};
