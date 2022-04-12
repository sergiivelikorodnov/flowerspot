import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GridCards from '../../components/GridCards/GridCards';
import Welcome from '../../components/Welcome/Welcome';
import { FetchStatus } from '../../const';
import useSearchQuery from '../../hooks/useSearchQuery';
import {
  fetchPostsAction,
  fetchSearchPostsAction,
} from '../../store/apiActions';
import { setStatus } from '../../store/fetchStatusSlice/fetchStatusSlice';
import { getAllPosts } from '../../store/flowersSlice/selectors';

function Home(): JSX.Element {
  const posts = useSelector(getAllPosts);
  const dispatch = useDispatch();

  let searchQuery = useSearchQuery();

  useEffect(() => {
    dispatch(setStatus(FetchStatus.InProgress));
    if (searchQuery === null) {
      dispatch(fetchPostsAction());
    } else {
      dispatch(fetchSearchPostsAction(searchQuery));
    }
  }, [dispatch, searchQuery]);

  return (
    <>
      <Welcome />
      <GridCards posts={posts} />
    </>
  );
}

export default Home;
