import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAction } from '../../store/apiActions';
import {
  setIsLoginModalActive,
  setIsRegisterModalActive,
} from '../../store/commonSlice/commonSlice';
import { AuthDataType } from '../../types/auth-data';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { backDrop } from '../../const';

function Login(): JSX.Element {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<AuthDataType>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<AuthDataType> = (authData) => {
    dispatch(loginAction(authData));
  };

  const handleRegister = () => {
    dispatch(setIsLoginModalActive(false));
    dispatch(setIsRegisterModalActive(true));
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          variants={backDrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2>Welcome Back</h2>
          <form
            className="contact-form"
            action="#"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="input-wrap">
              <label htmlFor="formEmail">Email Address</label>
              <input
                className="form-input"
                id="formEmail"
                type="email"
                defaultValue=""
                placeholder="michael.berry@gmail.com"
                {...register('email', {
                  required: 'Enter Valid Email',
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              <div className="form-alert">
                {errors?.email && (
                  <p>{errors?.email?.message || 'Enter Valid Email'}</p>
                )}
              </div>
            </div>
            <div className="input-wrap">
              <label htmlFor="formPassword">Password</label>
              <input
                className="form-input"
                id="formPassword"
                type="password"
                defaultValue=""
                placeholder="************"
                {...register('password', {
                  required: 'Enter Password',
                  minLength: {
                    value: 6,
                    message: 'Minimum 6 symbols',
                  },
                })}
              />
              <div className="form-alert">
                {errors?.password && (
                  <p>{errors?.password?.message || 'Error!'}</p>
                )}
              </div>
            </div>
            <button
              className={!isValid ? 'button-disabled button2' : 'button2'}
              type="submit"
            >
              Login to your Account
            </button>
          </form>
          <Link to="/" className="cancel" onClick={handleRegister}>
            I want to register
          </Link>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Login;
