import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../config/routes';
import { setIsLoginModalActive, setIsModalActive, setIsProfileModalActive, setIsRegisterModalActive } from '../../store/commonSlice/commonSlice';

function Header(): JSX.Element {

  const dispatch = useDispatch();

  const handleLoginOpenModal = () =>{
    dispatch(setIsModalActive(true))
    dispatch(setIsLoginModalActive(true))
  }

  const handleOpenRegisterModal = () =>{
    dispatch(setIsModalActive(true))
    dispatch(setIsRegisterModalActive(true))
  }

  const handleOpenProfileModal = () =>{
    dispatch(setIsModalActive(true))
    dispatch(setIsProfileModalActive(true))
  }


    return (
        <header className="page-header">
        <div className="page-header__top page-header__wrap">
          <Link to={AppRoute.Root} className="page-header__logo">
              <img className="page-header__logo-picture" src="img/logo.svg" alt="FlowrSpot" width="169"
                height="38" />
          </Link>
          <nav className="main-nav main-nav--closed">
            <button className="main-nav__toggle" type="button" aria-label="Открыть/Закрыть меню">
              <span className="main-nav__toggle-button"></span>
            </button>
            <ul className="main-nav__list site-list list-reset">
              <li className="site-list__item site-list__item--grey">
                <Link to='#'>
                  Flowers
                </Link>
              </li>
              <li className="site-list__item site-list__item--grey">
                <Link to='#'>
                  Latest Sightings
                </Link>
              </li>
              <li className="site-list__item site-list__item--grey" onClick={handleOpenProfileModal}>
                <Link to='#'>
                  Favorites
                </Link>
              </li>
              <li className="site-list__item site-list__item--login" onClick={handleLoginOpenModal}>
                <Link to='#'>
                  Login
                </Link>
              </li>
            </ul>
            <div className="site-list__item site-list__item--rose" onClick={handleOpenRegisterModal}>
              <Link to='#'>
                New Account
              </Link>
            </div>
          </nav>
        </div>
      </header>
    );
  }

  export default Header;
