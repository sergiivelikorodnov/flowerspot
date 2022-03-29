import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

function useSearchQuery() {

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  let searchQuery = query.get('query');

  return searchQuery;
}

export default useSearchQuery;
