import { FavFlowerType } from '../../types/flower';
import FavFlowerCard from '../FavFlowerCard/FavFlowerCard';

type Posts = {
  posts: FavFlowerType[];
};

function FavGridCards({ posts }: Posts): JSX.Element {
  if (posts.length === 0) {
    return (
      <section className="catalog wrapper">
        <h2>Oops! Nothing has found.</h2>
      </section>
    );
  }

  return (
    <section className="catalog wrapper">
      <h2 className="visually-hidden">Flowers Catalogue</h2>
      <ul className="catalogue__list list-reset">
        {posts.map((card) => (
          <FavFlowerCard key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
}

export default FavGridCards;
