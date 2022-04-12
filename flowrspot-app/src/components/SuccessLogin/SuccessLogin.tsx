import { useDispatch } from 'react-redux';
import { backDrop, NotificationMessage } from '../../const';
import {
  setIsLoginSuccessModalActive,
  setIsModalActive,
  setIsProfileModalActive,
} from '../../store/commonSlice/commonSlice';
import { motion, AnimatePresence } from 'framer-motion';

function SuccessLogin(): JSX.Element {
  const dispatch = useDispatch();

  const handleOk = () => {
    dispatch(setIsLoginSuccessModalActive(false));
    dispatch(setIsModalActive(false));
  };

  const handleProfile = () => {
    dispatch(setIsProfileModalActive(true));
    dispatch(setIsLoginSuccessModalActive(false));
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
          <h2>{NotificationMessage.AuthRegistered}</h2>
          <div className="modal-buttons-container">
            <button className="button2" onClick={handleOk}>
              Ok
            </button>
            <button className="button2" onClick={handleProfile}>
              Profile
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default SuccessLogin;
