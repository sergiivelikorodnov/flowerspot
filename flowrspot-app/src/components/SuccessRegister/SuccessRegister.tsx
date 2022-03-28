import { useDispatch } from 'react-redux';
import { backDrop, NotificationMessage } from '../../const';
import {
  setIsLoginModalActive,
  setIsRegisteredSuccessModalActive,
} from '../../store/commonSlice/commonSlice';
import { motion, AnimatePresence } from 'framer-motion';

function SuccessRegister(): JSX.Element {
  const dispatch = useDispatch();

  const handleOk = () => {
    dispatch(setIsLoginModalActive(true));
    dispatch(setIsRegisteredSuccessModalActive(false));
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
          <button className="button2" onClick={handleOk}>
            Ok
          </button>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default SuccessRegister;
