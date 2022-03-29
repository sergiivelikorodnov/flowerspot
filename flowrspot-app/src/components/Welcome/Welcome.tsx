import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchPostsAction } from '../../store/apiActions';
import { KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../config/routes';
import useSearchQuery from '../../hooks/useSearchQuery';

function Welcome(): JSX.Element {
  const dispatch = useDispatch();
  const textInput = useRef<HTMLInputElement>(null);
  let navigate = useNavigate();

  let searchQuery = useSearchQuery();

  if (textInput.current) {
    if (searchQuery === '' || searchQuery === null) {
      textInput.current.value = '';
    }
  }

  function handleClick(): void {
    if (textInput && textInput.current) {
      dispatch(fetchSearchPostsAction(textInput.current.value));
      navigate(AppRoute.Root + `?query=${textInput.current.value}`);
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  useEffect(() => {
    if (searchQuery) textInput.current!.value = `${searchQuery}`;
  });

  return (
    <section>
      <h1 className="visually-hidden">Discover flowers around you</h1>
      <div className="page-header__content-text">
        <p className="page-header__title">Discover flowers around you</p>
        <p className="page-header__subtitle">
          Explore between more than 8.427 sightings
        </p>
        <div className="form__fieldset-container ">
          <input
            className="form__input"
            id="form-search"
            type="search"
            name="form-search"
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

export default Welcome;
