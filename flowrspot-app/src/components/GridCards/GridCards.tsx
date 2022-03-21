import FlowerCard from '../FlowerCard/FlowerCard';
import { FlowerType } from '../../types/flower';

type Posts = {
  posts:FlowerType[]
}

function GridCards({posts}:Posts): JSX.Element {

  if(posts.length ===0 ){
    return (
      <section className="catalog wrapper">
            <h2 className="not-found">
              Oops! Nothing has found.
            </h2>
          </section>
        );

  }

return (
<section className="catalog wrapper">
      <h2 className="visually-hidden">
        Flowers Catalogue
      </h2>
      <ul className="catalogue__list list-reset">
        {posts.map((card)=>(<FlowerCard key={card.id} card={card} />))}
      </ul>
    </section>
  );
}

export default GridCards;
