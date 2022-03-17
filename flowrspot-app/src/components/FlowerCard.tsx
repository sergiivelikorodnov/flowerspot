import { Link } from 'react-router-dom';
import { FlowerType } from '../types/flower';

type SingleCard = {
  card: FlowerType;
};

function FlowerCard({card}:SingleCard): JSX.Element {

  const { name } = card;

  return (
  <li className="catalogue__item">
    <div className="catalogue-card__box">
      <Link className="catalogue-card__link" to="#">
          <img src="img/box-image.png" width="280" height="350" alt="" />
      </Link>
      <button className="catalogue-card__bookmark-button catalogue-card__bookmark-button--active" type="button">
        <svg className="catalogue-card__bookmark-icon" width="13" height="12">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>
      <div className="catalogue-card__details">
        <Link className="catalogue-card__title" to="#">{name}</Link>
        <Link className="catalogue-card__subtitle" to="#">Platycodon grandiflorus</Link>
        <Link className="button catalogue-card__button" to="#">127 sightings</Link>
      </div>
    </div>
  </li>
  );
}

export default FlowerCard;
