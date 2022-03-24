import { FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAction } from '../../store/apiActions';
import {
  setIsLoginModalActive,
  setIsRegisterModalActive,
} from '../../store/commonSlice/commonSlice';
import { AuthDataType } from '../../types/auth-data';
import { motion, AnimatePresence } from 'framer-motion';

function Login(): JSX.Element {
  const dispatch = useDispatch();

  const onSubmit = (authData: AuthDataType) => {
    dispatch(loginAction(authData));
    if (emailRef.current !== null) {
      emailRef.current.defaultValue = '';
    }
    if (passwordRef.current !== null) {
      passwordRef.current.defaultValue = '';
    }
  };

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const handleRegister = () => {
    dispatch(setIsLoginModalActive(false));
    dispatch(setIsRegisterModalActive(true));
  };

  const backDrop={
    visible: {opacity: 1, y: 0},
    hidden: {opacity: 0, y: 100}
  }

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
        onSubmit={handleSubmit}
      >
        <div className="input-wrap">
          <label htmlFor="form-email">Email Address</label>
          <input
            className="form-input"
            id="form-email"
            type="email"
            name="form-email"
            placeholder="michael.berry@gmail.com"
            defaultValue = ""
            ref={emailRef}
          />
        </div>
        <div className="input-wrap">
          <label htmlFor="form-password">Password</label>
          <input
            className="form-input"
            id="form-password"
            type="password"
            name="form-password"
            defaultValue = ""
            placeholder="************"
            ref={passwordRef}
          />
        </div>
        <button className="button2" type="submit">
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
