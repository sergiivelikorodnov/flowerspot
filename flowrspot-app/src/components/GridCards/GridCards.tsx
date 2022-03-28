import FlowerCard from '../FlowerCard/FlowerCard';
import { FlowerType } from '../../types/flower';
import { useSelector } from 'react-redux';
import { getFetchStatus } from '../../store/fetchStatusSlice/selectors';
import Loading from '../Loading/Loading';
import { FetchStatus } from '../../const';

type Posts = {
  posts:FlowerType[]
}

function GridCards({posts}:Posts): JSX.Element {
  const status = useSelector(getFetchStatus);

  if (status === FetchStatus.InProgress) {
    return <Loading />;
}

  if(posts.length ===0 ){
    return (
      <section className="catalog wrapper">
            <h2>
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
