
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { NotificationMessage } from '../../const';
import { setIsLoginModalActive, setIsModalActive, setIsRegisteredSuccessModalActive } from '../../store/commonSlice/commonSlice';

function SuccessRegister(): JSX.Element {
  const dispatch = useDispatch();

  const handleOk = () => {
    dispatch(setIsLoginModalActive(true));
    dispatch(setIsRegisteredSuccessModalActive(false));
   };

  const handleClose = () => {
    dispatch(setIsModalActive(false));
    dispatch(setIsRegisteredSuccessModalActive(false));
  };

  return (
    <>
      <h2>{NotificationMessage.AuthRegistered}</h2>
      <button className="button2" onClick={handleOk}>
          Ok
        </button>
      <Link to="/" className="cancel" onClick={handleClose}>
        I want to login
      </Link>
    </>
  );
}

export default SuccessRegister;
