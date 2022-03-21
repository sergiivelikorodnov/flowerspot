import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import GridCards from '../../components/GridCards/GridCards';
import Loading from '../../components/Loading/Loading';
import Welcome from '../../components/Welcome/Welcome';
import { FetchStatus } from '../../const';
import { fetchSearchPostsAction } from '../../store/apiActions';
import { getFetchStatus } from '../../store/fetchStatusSlice/selectors';
import { getAllPosts } from '../../store/flowersSlice/selectors';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function Home(): JSX.Element {
  const posts = useSelector(getAllPosts);
  const status = useSelector(getFetchStatus);
  const dispatch = useDispatch();

  let query = useQuery();
  let search = query.get("query");
  if(!search){
    search='';
  }


  useEffect(() => {
    dispatch(fetchSearchPostsAction(search));
 }, [dispatch, search]);


 console.log(posts);


if (status === FetchStatus.InProgress) {
  return <Loading />;
}

return (
    <>
      <Welcome/>
      <GridCards posts={posts}/>
    </>
  );
}

export default Home;
