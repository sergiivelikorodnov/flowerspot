import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { fakeStateAuth,fakeStateAuthWithProfileModal,fakeStateAuthWithRegisterModal,/* , fakeStateNoAuth  */
fakeStateNoAuth} from '../../mocks/mock-store';
import { State } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import App from './App';
import { AppRoute } from '../../config/routes';
import { createAPI } from '../../services/api'
import { Router } from 'react-router-dom';

const history = createMemoryHistory();

const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore <
    State,
    Action,
    ThunkDispatch< State, typeof api, Action >
  >(middlewares);


  describe('Render App with "AUTH"', () => {

    const store = mockStore(fakeStateAuth);

    const fakeApp =(
      <Provider store ={store}>
        <Router navigator={history} location={AppRoute.Root}>
          <App />
        </Router>
      </Provider>
    );

    it('should render "Root" correctly', () => {
      render(fakeApp);
      expect(screen.getByText(/Explore between more than 8.427 sightings/i)).toBeInTheDocument();
    });

    it('should render "Logged status" correctly', () => {
      render(fakeApp);
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    });

    it('should render "Favorite buttons" correctly', () => {
      render(fakeApp);
      expect(screen.getAllByTestId('favouriteButton')).toHaveLength(3);
    });
  });


describe('Routing App with "AUTH"', () => {

  const store = mockStore(fakeStateAuth);

  const fakeApp =(
    <Provider store ={store}>
        <Router navigator={history} location={AppRoute.Favorites}>
            <App />
        </Router>
    </Provider>
  );

  it('should render "Favorite" page', () => {
    history.push(AppRoute.Favorites);
    render(fakeApp);
    expect(screen.getByText(/Favorites!/i)).toBeInTheDocument();
  });
});

describe('Private Routing and App with "NO_AUTH"', () => {

  const store = mockStore(fakeStateNoAuth);

  const fakeApp =(
    <Provider store ={store}>
        <Router navigator={history} location={AppRoute.Favorites}>
            <App />
        </Router>
    </Provider>
  );
  it('should render closed "Favorite" page', () => {
    history.push(AppRoute.Favorites);
    render(fakeApp);
    expect(screen.getByText(/Please Login to See Favorites!/i)).toBeInTheDocument();
  });

  it('should render "New Account" button on the page', () => {
    render(fakeApp);
    expect(screen.getByText(/New Account/i)).toBeInTheDocument();
  });

  it('should NOT render "Favorite buttons"', () => {
    render(fakeApp);
    expect(screen.queryAllByTestId('favouriteButton')).toHaveLength(0);
  });
});



describe('App with "AUTH" and open Profile Modal', () => {

  const store = mockStore(fakeStateAuthWithProfileModal);

  const fakeApp =(
    <Provider store ={store}>
        <Router navigator={history} location={AppRoute.Root}>
            <App />
        </Router>
    </Provider>
  );
  it('should render open modal with "Logout" button', () => {
    render(fakeApp);
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  });
});


describe('App with "NO_AUTH" and open Register Modal', () => {

  const store = mockStore(fakeStateAuthWithRegisterModal);

  const fakeApp =(
    <Provider store ={store}>
        <Router navigator={history} location={AppRoute.Root}>
            <App />
        </Router>
    </Provider>
  );
  it('should render open modal with "Create Account" button', () => {
    render(fakeApp);
    expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
  });
});
