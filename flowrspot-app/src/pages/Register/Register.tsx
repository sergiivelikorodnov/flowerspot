import { Link } from 'react-router-dom';

function Register(): JSX.Element {
  return (
    <>
      <h2>Create an Account</h2>
      <form className="contact-form" action="#" method="post">
        <div className="form-line">
          <div className="input-wrap">
            <label htmlFor="form-name">First Name</label>
            <input className="form-input" id="form-name" type="text" name="form-name" placeholder="Michael" />
          </div>
          <div className="input-wrap">
            <label htmlFor="form-lastname">Last Name</label>
            <input className="form-input" id="form-lastname" type="text" name="form-lastname" placeholder="Berry" />
          </div>
        </div>
        <div className="input-wrap">
          <label htmlFor="form-name">Date of Birth</label>
          <input className="form-input" id="form-name" type="date" name="form-name" value="1980-05-20" min="1900-01-01" max="2023-12-31" />
        </div>
        <div className="input-wrap">
          <label htmlFor="form-email">Email Address</label>
          <input className="form-input" id="form-email" type="email" name="form-email" placeholder="michael.berry@gmail.com" />
        </div>
        <div className="input-wrap">
          <label htmlFor="form-password">Password</label>
          <input className="form-input" id="form-password" type="password" name="form-password" placeholder="************" />
        </div>
        <button className="button2" type="submit">Create Account</button>
      </form>
      <Link to="/" className="cancel">I don’t want to register</Link>
    </>

  );
}

export default Register;
