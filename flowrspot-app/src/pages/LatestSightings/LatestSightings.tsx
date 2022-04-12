import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GridCards from '../../components/GridCards/GridCards';
import Search from '../../components/Search/Search';

import { FetchStatus } from '../../const';
import useSearchQuery from '../../hooks/useSearchQuery';
import {
  fetchRandomPostsAction,
  fetchSearchPostsAction,
} from '../../store/apiActions';
import { setStatus } from '../../store/fetchStatusSlice/fetchStatusSlice';

import { getAllPosts } from '../../store/flowersSlice/selectors';

function LatestSightings(): JSX.Element {
  const posts = useSelector(getAllPosts);
  const dispatch = useDispatch();

  let searchQuery = useSearchQuery();

  useEffect(() => {
    dispatch(setStatus(FetchStatus.InProgress));
    if (searchQuery === null) {
      dispatch(fetchRandomPostsAction());
    } else {
      dispatch(fetchSearchPostsAction(searchQuery));
    }
  }, [dispatch, searchQuery]);

  return (
    <>
      <Search />
      <GridCards posts={posts} />
    </>
  );
}

export default LatestSightings;
