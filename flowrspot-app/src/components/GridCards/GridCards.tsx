import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { fetchPostsAction } from '../../store/apiActions';
import { getAllPosts } from '../../store/flowersSlice/selectors';
import FlowerCard from '../FlowerCard';

function GridCards(): JSX.Element {
  const posts = useSelector(getAllPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAction());
  }, [dispatch]);

console.log(posts);


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
