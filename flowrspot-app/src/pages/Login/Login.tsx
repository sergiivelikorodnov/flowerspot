import { Link } from 'react-router-dom';

function Login(): JSX.Element {
  return (
    <>
      <h2>Welcome Back</h2>
        <form className="contact-form" action="#" method="post">
          <div className="input-wrap">
            <label htmlFor="form-email">Email Address</label>
            <input className="form-input" id="form-email" type="email" name="form-email" placeholder="michael.berry@gmail.com" />
          </div>
          <div className="input-wrap">
            <label htmlFor="form-password">Password</label>
            <input className="form-input" id="form-password" type="password" name="form-password" placeholder="************" />
          </div>
          <button className="button2" type="submit">Login to your Account</button>
        </form>
        <Link to="/" className="cancel">I don’t want to register</Link>
    </>

  );
}

export default Login;
