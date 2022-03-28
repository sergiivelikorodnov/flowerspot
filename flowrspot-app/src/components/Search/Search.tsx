import { useEffect, useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchPostsAction } from '../../store/apiActions';
import { KeyboardEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../config/routes';

function Search(): JSX.Element {
  const dispatch = useDispatch();
  const textInput = useRef<HTMLInputElement>(null);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  let navigate = useNavigate();
  let query = useQuery();
  let searchQuery = query.get("query");


  if (textInput.current) {
    if (searchQuery === '' || searchQuery === null) {
      textInput.current.value = '';
      }
    }

  function handleClick(): void {
    if (textInput && textInput.current) {
      dispatch(fetchSearchPostsAction(textInput.current.value));
      navigate(AppRoute.LatestSightings + `?query=${textInput.current.value}`);
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  useEffect(() => {
    if (searchQuery) textInput.current!.value=`${searchQuery}`;
  });

  return (
    <section>
      <h1 className="visually-hidden">Discover flowers around you</h1>
      <div className="page-header__content-search">
        <div className="form__fieldset-container ">
          <input
            className="form__input form__input--white"
            id="formSearch"
            type="search"
            name="formSearch"
            placeholder="Looking for something specific?"
            required
            ref={textInput}
            defaultValue=""
            onKeyPress={handleKeyPress}
          />
          <button
            className="form__fieldset-container--icon"
            onClick={handleClick}
          ></button>
        </div>
      </div>
    </section>
  );
}

export default Search;
