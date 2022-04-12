import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavGridCards from '../../components/FavGridCards/FavGridCards';
import Loading from '../../components/Loading/Loading';
import { FetchStatus } from '../../const';
import { fetchFavPostsAction } from '../../store/apiActions';
import { setStatus } from '../../store/fetchStatusSlice/fetchStatusSlice';
import { getFetchStatus } from '../../store/fetchStatusSlice/selectors';
import { getAllFavPosts } from '../../store/flowersSlice/selectors';

function Favorites(): JSX.Element {
  const status = useSelector(getFetchStatus);
  const posts = useSelector(getAllFavPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatus(FetchStatus.InProgress));
    dispatch(fetchFavPostsAction());
  }, [dispatch]);

  if (status === FetchStatus.InProgress) {
    return <Loading />;
  }

  return (
    <div className="wrapper">
      <FavGridCards posts={posts} />
    </div>
  );
}

export default Favorites;
