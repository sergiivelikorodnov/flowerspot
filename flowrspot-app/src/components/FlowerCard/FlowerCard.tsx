import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { APIRoutes } from '../../config/apiRoutes';
import {
  AuthorizationStatus,
  NotificationMessage,
  toastPosition,
} from '../../const';
import { createFreeAPI } from '../../services/api';
import { fetchPostsAction } from '../../store/apiActions';
import { getLoginStatus } from '../../store/authSlice/selectors';
import { FlowerType } from '../../types/flower';

type SingleCard = {
  card: FlowerType;
};

function FlowerCard({ card }: SingleCard): JSX.Element {
  const { name, latinName, sightings, profilePicture, id, favorite } = card;
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(favorite);
  const authorizationStatus = useSelector(getLoginStatus);
  const api = createFreeAPI();

  const setFavoriteHandler = async (idCard: number): Promise<void> => {
    await api
      .post(`${APIRoutes.Posts}/${idCard}/favorites`)
      .then(() => {
        setIsFavorite(!favorite);
        dispatch(fetchPostsAction());
      })
      .catch(() => toast.error(NotificationMessage.FavError, toastPosition));
  };

  return (
    <li className="catalogue__item">
      <div className="catalogue-card__box">
        <Link className="catalogue-card__link" to="#">
          <img src={profilePicture} width="280" height="350" alt="" />
        </Link>
        {authorizationStatus === AuthorizationStatus.Auth ? (
          <button
            className={
              isFavorite
                ? 'catalogue-card__bookmark-button catalogue-card__bookmark-button--active'
                : 'catalogue-card__bookmark-button'
            }
            type="button"
            data-testid="favouriteButton"
            onClick={() => setFavoriteHandler(id)}
          >
            <svg
              className="catalogue-card__bookmark-icon"
              width="13"
              height="12"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>

            <span className="visually-hidden">In bookmarks</span>
          </button>
        ) : (
          ''
        )}
        <div className="catalogue-card__details">
          <Link className="catalogue-card__title" to="#">
            {name}
          </Link>
          <Link className="catalogue-card__subtitle" to="#">
            {latinName}
          </Link>
          <Link className="button catalogue-card__button" to="#">
            {sightings} sightings
          </Link>
        </div>
      </div>
    </li>
  );
}

export default FlowerCard;
