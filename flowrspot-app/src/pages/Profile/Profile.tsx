import { useDispatch } from 'react-redux';
import {
  setIsModalActive,
  setIsProfileModalActive,
} from '../../store/commonSlice/commonSlice';

function Profile(): JSX.Element {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setIsModalActive(false));
    dispatch(setIsProfileModalActive(false));
  };

  return (
    <>
      <div className="profile-header">
        <img
          className="profile-avatar"
          src="img/profile-holder.png"
          width="80"
          height="80"
          alt=""
        />
        <div>
          <p className="profile-name">Michael Berry</p>
          <p className="profile-stat">47 sightings</p>
        </div>
      </div>
      <div className="profile-data">
        <p className="profile-subtitle">First Name</p>
        <p className="profile-title">Michael</p>
      </div>
      <div className="profile-data">
        <p className="profile-subtitle">Last Name</p>
        <p className="profile-title">Berry</p>
      </div>
      <div className="profile-data">
        <p className="profile-subtitle">Date of Birth</p>
        <p className="profile-title">May 20, 1980</p>
      </div>
      <div className="profile-data">
        <p className="profile-subtitle">Email Address</p>
        <p className="profile-title">michael.berry@gmail.com</p>
      </div>

      <button className="button2 button-logout" type="submit">
        Logout
      </button>
      <button
        className="modal-close"
        type="button"
        aria-label="Close popup"
        onClick={() => handleClose()}
      ></button>
    </>
  );
}

export default Profile;
