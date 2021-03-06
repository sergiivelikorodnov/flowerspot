import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../config/routes';
import { AuthorizationStatus, backDrop } from '../../const';
import { getLoginStatus, getUserData } from '../../store/authSlice/selectors';
import {
  setIsLoginModalActive,
  setIsModalActive,
  setIsProfileModalActive,
  setIsRegisterModalActive,
} from '../../store/commonSlice/commonSlice';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

function Header(): JSX.Element {
  const dispatch = useDispatch();
  const [isMenuOpen, setMenuOpen] = useState(true);
  let navigate = useNavigate();
  const userInfo = useSelector(getUserData);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  const handleLoginOpenModal = () => {
    dispatch(setIsModalActive(true));
    dispatch(setIsLoginModalActive(true));
  };

  const handleOpenRegisterModal = () => {
    dispatch(setIsModalActive(true));
    dispatch(setIsRegisterModalActive(true));
  };

  const handleOpenProfileModal = () => {
    dispatch(setIsModalActive(true));
    dispatch(setIsProfileModalActive(true));
  };

  const handleFavorite = () => {
    navigate(AppRoute.Favorites);
    handleResize();
  };

  const handleFlowers = () => {
    navigate(AppRoute.Root);
    handleResize();
  };

  const handleLatest = () => {
    navigate(AppRoute.LatestSightings);
    handleResize();
  };

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  const authorizationStatus = useSelector(getLoginStatus);

  return (
    <header className="page-header">
      <div className="page-header__top page-header__wrap">
        <Link to={AppRoute.Root} className="page-header__logo">
          <img
            className="page-header__logo-picture"
            src="img/logo.svg"
            alt="FlowrSpot"
            width="169"
            height="38"
          />
        </Link>
        <nav
          className={
            isMenuOpen
              ? 'main-nav main-nav--opened'
              : 'main-nav main-nav--closed'
          }
        >
          <button
            className="main-nav__toggle"
            type="button"
            aria-label="??????????????/?????????????? ????????"
            onClick={handleMenuOpen}
          >
            <span
              className={
                isMenuOpen
                  ? 'main-nav__toggle-button opened'
                  : 'main-nav__toggle-button'
              }
            ></span>
          </button>
          <AnimatePresence exitBeforeEnter>
            <motion.ul
              className="main-nav__list site-list list-reset"
              initial={false}
              variants={backDrop}
              animate={isMenuOpen ? 'visible' : 'hidden'}
              exit={{ opacity: 0 }}
            >
              <li
                className="site-list__item site-list__item--grey"
                onClick={handleFlowers}
              >
                <Link to="#">Flowers</Link>
              </li>
              <li
                className="site-list__item site-list__item--grey"
                onClick={handleLatest}
              >
                <Link to="#">Latest Sightings</Link>
              </li>
              <li
                className="site-list__item site-list__item--grey"
                onClick={handleFavorite}
              >
                <Link to={AppRoute.Favorites}>Favorites</Link>
              </li>
              {authorizationStatus !== AuthorizationStatus.Auth ? (
                <>
                  <li
                    className="site-list__item site-list__item--login"
                    onClick={handleLoginOpenModal}
                  >
                    <Link to="#">Login</Link>
                  </li>
                  <li
                    className="site-list__item site-list__item--rose"
                    onClick={handleOpenRegisterModal}
                  >
                    <Link to="#">New Account</Link>
                  </li>
                </>
              ) : (
                <li
                  className="site-list__item site-list__item--grey"
                  onClick={handleOpenProfileModal}
                >
                  <Link to="#" className="site-list__item--profile">
                    <p>
                      {userInfo?.firstName} {userInfo?.lastName}
                    </p>
                    <img
                      src="img/profile-holder.png"
                      width="40"
                      height="40"
                      alt=""
                    />
                  </Link>
                </li>
              )}
            </motion.ul>
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}

export default React.memo(Header);
