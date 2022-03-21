import { useDispatch, useSelector } from 'react-redux';
import Login from '../../pages/Login/Login';
import Profile from '../../pages/Profile/Profile';
import Register from '../../pages/Register/Register';
import { setIsLoginModalActive, setIsModalActive, setIsProfileModalActive, setIsRegisterModalActive } from '../../store/commonSlice/commonSlice';
import { getLoginModalStatus, getModalStatus, getProfileModalStatus, getRegisterModalStatus } from '../../store/commonSlice/selectors';


function ModalForm(): JSX.Element {
  const isModalActive = useSelector(getModalStatus);
  const isLoginModalActive = useSelector(getLoginModalStatus);
  const isRegisterModalActive = useSelector(getRegisterModalStatus);
  const isProfileModalActive = useSelector(getProfileModalStatus);

  const dispatch = useDispatch();

  const handleClose = () =>{
    dispatch(setIsModalActive(false));
    dispatch(setIsLoginModalActive(false));
    dispatch(setIsRegisterModalActive(false));
    dispatch(setIsProfileModalActive(false))
  }

  return (
    <section className={isModalActive ? "modal active": "modal"}  onClick={()=>handleClose()}>
    <div className={`${isModalActive ? "modal-content active": "modal-content"} ${isProfileModalActive ? "modal-profile": ""}`} onClick={(e)=>e.stopPropagation()}>
        {isLoginModalActive?<Login/>:''}
        {isRegisterModalActive?<Register/>:''}
        {isProfileModalActive?<Profile/>:''}
    </div>
  </section>
  );
}

export default ModalForm;
