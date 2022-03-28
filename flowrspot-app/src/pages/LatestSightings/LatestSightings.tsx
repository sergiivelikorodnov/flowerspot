import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import GridCards from '../../components/GridCards/GridCards';
import Loading from '../../components/Loading/Loading';
import Search from '../../components/Search/Search';

import { FetchStatus } from '../../const';
import {
  fetchRandomPostsAction,
  fetchSearchPostsAction,
} from '../../store/apiActions';
import { setStatus } from '../../store/fetchStatusSlice/fetchStatusSlice';
import { getFetchStatus } from '../../store/fetchStatusSlice/selectors';
import { getAllPosts } from '../../store/flowersSlice/selectors';

function LatestSightings(): JSX.Element {
  const posts = useSelector(getAllPosts);
  const status = useSelector(getFetchStatus);
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
      dispatch(fetchRandomPostsAction());
    } else {
      dispatch(fetchSearchPostsAction(searchQuery));
    }
  }, [dispatch, searchQuery]);


  if (status === FetchStatus.InProgress) {
    return <Loading />;
  }

  return (
    <>
      <Search />
      <GridCards posts={posts} />
    </>
  );
}

export default LatestSightings;

