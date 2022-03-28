import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import GridCards from '../../components/GridCards/GridCards';
import Welcome from '../../components/Welcome/Welcome';
import { FetchStatus } from '../../const';
import { fetchPostsAction, fetchSearchPostsAction } from '../../store/apiActions';
import { setStatus } from '../../store/fetchStatusSlice/fetchStatusSlice';
import { getAllPosts } from '../../store/flowersSlice/selectors';

function Home(): JSX.Element {
  const posts = useSelector(getAllPosts);
  const dispatch = useDispatch();

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  let searchQuery = query.get('query');

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
