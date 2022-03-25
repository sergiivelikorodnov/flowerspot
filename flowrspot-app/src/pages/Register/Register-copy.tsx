import { FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerAction } from '../../store/apiActions';
import {
  setIsModalActive,
  setIsRegisterModalActive,
} from '../../store/commonSlice/commonSlice';
import { AuthDataRegisterType } from '../../types/auth-data';
import { motion, AnimatePresence } from 'framer-motion';

function Register(): JSX.Element {
  const dispatch = useDispatch();

  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dateOfBirthRef = useRef<HTMLInputElement | null>(null);

  const handleClose = () => {
    dispatch(setIsModalActive(false));
    dispatch(setIsRegisterModalActive(false));
  };

  const onSubmit = (authData: AuthDataRegisterType) => {
    dispatch(registerAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (
      emailRef.current !== null &&
      passwordRef.current !== null &&
      firstNameRef.current !== null &&
      lastNameRef.current !== null &&
      dateOfBirthRef.current !== null
    ) {
      onSubmit({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        dateOfBirth: dateOfBirthRef.current.value,
      });
    }
  };


  const backDrop = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
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
          <h2>Create an Account</h2>
          <form
            className="contact-form"
            action="#"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="form-line">
              <div className="input-wrap">
                <label htmlFor="form-name">First Name</label>
                <input
                  className="form-input"
                  id="form-name"
                  type="text"
                  name="form-name"
                  placeholder="Michael"
                  ref={firstNameRef}
                />
              </div>
              <div className="input-wrap">
                <label htmlFor="form-lastname">Last Name</label>
                <input
                  className="form-input"
                  id="form-lastname"
                  type="text"
                  name="form-lastname"
                  placeholder="Berry"
                  ref={lastNameRef}
                />
              </div>
            </div>
            <div className="input-wrap">
              <label htmlFor="form-name">Date of Birth</label>
              <input
                className="form-input"
                id="form-name"
                type="date"
                name="form-name"
                defaultValue="1980-05-20"
                min="1900-01-01"
                max="2023-12-31"
                ref={dateOfBirthRef}
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="form-email">Email Address</label>
              <input
                className="form-input"
                id="form-email"
                type="email"
                name="form-email"
                placeholder="michael.berry@gmail.com"
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
                placeholder="************"
                ref={passwordRef}
              />
            </div>
            <button className="button2" type="submit">
              Create Account
            </button>
          </form>
          <Link to="/" className="cancel" onClick={handleClose}>
            I don’t want to register
          </Link>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Register;
