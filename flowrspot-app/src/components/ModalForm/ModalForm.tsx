import { useDispatch, useSelector } from 'react-redux';
import Login from '../../pages/Login/Login';
import Profile from '../../pages/Profile/Profile';
import Register from '../../pages/Register/Register';
import { setIsLoginModalActive, setIsModalActive, setIsProfileModalActive, setIsRegisteredSuccessModalActive, setIsRegisterModalActive } from '../../store/commonSlice/commonSlice';
import { getLoginModalStatus, getModalStatus, getProfileModalStatus, getRegisterModalStatus, getRegisterSuccessModalStatus } from '../../store/commonSlice/selectors';
import SuccessRegister from '../SuccessRegister/SuccessRegister';


function ModalForm(): JSX.Element {
  const isModalActive = useSelector(getModalStatus);
  const isLoginModalActive = useSelector(getLoginModalStatus);
  const isRegisterModalActive = useSelector(getRegisterModalStatus);
  const isProfileModalActive = useSelector(getProfileModalStatus);
  const isRegisterSuccessModalActive = useSelector(getRegisterSuccessModalStatus);

  const dispatch = useDispatch();

  const handleClose = () =>{
    dispatch(setIsModalActive(false));
    dispatch(setIsLoginModalActive(false));
    dispatch(setIsRegisterModalActive(false));
    dispatch(setIsProfileModalActive(false))
    dispatch(setIsRegisteredSuccessModalActive(false))
  }

  return (
    <section className={isModalActive ? "modal active": "modal"}  onClick={()=>handleClose()}>
    <div className={`${isModalActive ? "modal-content active": "modal-content"} ${isProfileModalActive ? "modal-profile": ""}`} onClick={(e)=>e.stopPropagation()}>
        {isLoginModalActive?<Login/>:''}
        {isRegisterModalActive?<Register/>:''}
        {isProfileModalActive?<Profile/>:''}
        {isRegisterSuccessModalActive?<SuccessRegister/>:''}
    </div>
  </section>
  );
}

export default ModalForm;
