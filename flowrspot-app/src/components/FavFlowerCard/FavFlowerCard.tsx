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
import { fetchFavPostsAction } from '../../store/apiActions';
import { getLoginStatus } from '../../store/authSlice/selectors';
import { FavFlowerType } from '../../types/flower';

type SingleCard = {
  card: FavFlowerType;
};

function FavFlowerCard({ card }: SingleCard): JSX.Element {
  const {
    name,
    latinName,
    sightings,
    profilePicture,
    id: cardId,
    favorite,
  } = card.flower;
  const { id } = card;
  const dispatch = useDispatch();

  const authorizationStatus = useSelector(getLoginStatus);
  const api = createFreeAPI();
  const [isFavorite, setIsFavorite] = useState(favorite);

  const deleteFavoriteHandler = async (idCard: number): Promise<void> => {
    await api
      .delete(`${APIRoutes.Posts}/${idCard}/favorites/${id}`)
      .then(() => dispatch(fetchFavPostsAction()))
      .catch(() => toast(NotificationMessage.ConnecError, toastPosition));
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
              favorite
                ? 'catalogue-card__bookmark-button catalogue-card__bookmark-button--active'
                : 'catalogue-card__bookmark-button'
            }
            type="button"
            data-testid="favouriteButton"
            onClick={() => {
              deleteFavoriteHandler(cardId);
              setIsFavorite(!isFavorite);
            }}
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

export default FavFlowerCard;
