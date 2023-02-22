import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from '../../redux/auth/authOperations';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Formik } from 'formik';
import {
  FormLayout,
  Form,
  ButtonLogIn,
  ButtonContainer,
  ButtonRegister,
  LogoContainer,
  LogInInput,
  LogInLabel,
  InputIcon,
  ErrorText,
} from './LoginForm.styled';
import { Logo } from 'components/Logo/Logo';
import Icons from 'images/icons.svg';
import { useSelector } from 'react-redux';
import { selectErrorAuth } from 'redux/auth/authSelectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = nanoid();
  const passwordId = nanoid();
   const error = useSelector(selectErrorAuth);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, { resetForm }) => {
        // {values
        //  => {
        dispatch(
          logIn({
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
            <LogInLabel htmlFor={emailId}>
              <LogInInput
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
            </LogInLabel>
            <ErrorText>
              {errors.email && touched.email && errors.email}
            </ErrorText>
            <LogInLabel htmlFor={passwordId}>
              <LogInInput
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
            </LogInLabel>
            <ErrorText>
              {errors.password && touched.password && errors.password}
            </ErrorText>
            <ButtonContainer>
              <ButtonLogIn type="submit" disabled={isSubmitting}>
                {'Log In'.toUpperCase()}
              </ButtonLogIn>
              <Link to="/register">
                <ButtonRegister type="button">
                  {'Register'.toUpperCase()}
                </ButtonRegister>
              </Link>
            </ButtonContainer>
          </Form>
        </FormLayout>
      )}
    </Formik>
  );
};
