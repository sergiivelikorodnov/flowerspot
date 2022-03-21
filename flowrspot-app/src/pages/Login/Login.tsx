import { FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthData } from '../../types/auth-data';

function Login(): JSX.Element {
  const dispatch = useDispatch();

  const onSubmit = (authData: AuthData) => {
    //dispatch(loginAction(authData));
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

  return (
    <>
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
          Login to your Account
        </button>
      </form>
      <Link to="/" className="cancel">
        I don’t want to register
      </Link>
    </>
  );
}

export default Login;
