import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../store/apiActions';
import { getUserData, getUserEmail } from '../../store/authSlice/selectors';
import {
  setIsModalActive,
  setIsProfileModalActive,
} from '../../store/commonSlice/commonSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { backDrop } from '../../const';

function Profile(): JSX.Element {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const userEmail = useSelector(getUserEmail);

  const handleClose = () => {
    dispatch(setIsModalActive(false));
    dispatch(setIsProfileModalActive(false));
  };

  const handleLogout = () => {
    dispatch(logoutAction());
    dispatch(setIsModalActive(false));
    dispatch(setIsProfileModalActive(false));
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
          <div className="profile-header">
            <img
              className="profile-avatar"
              src="img/profile-holder.png"
              width="80"
              height="80"
              alt=""
            />
            <div>
              <p className="profile-name">
                {userData?.firstName} {userData?.lastName}
              </p>
              <p className="profile-stat">47 sightings</p>
            </div>
          </div>
          <div className="profile-data">
            <p className="profile-subtitle">First Name</p>
            <p className="profile-title">{userData?.firstName} </p>
          </div>
          <div className="profile-data">
            <p className="profile-subtitle">Last Name</p>
            <p className="profile-title">{userData?.lastName}</p>
          </div>
          <div className="profile-data">
            <p className="profile-subtitle">Date of Birth</p>
            <p className="profile-title">May 20, 1980</p>
          </div>
          <div className="profile-data">
            <p className="profile-subtitle">Email Address</p>
            <p className="profile-title">{userEmail}</p>
          </div>

          <button
            className="button2 button-logout"
            type="submit"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
          <button
            className="modal-close"
            type="button"
            aria-label="Close popup"
            onClick={() => handleClose()}
          ></button>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Profile;
