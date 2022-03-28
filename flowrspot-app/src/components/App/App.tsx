import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../config/routes';
import Favorites from '../../pages/Favorites/Favorites';
import FavoritesNotLogged from '../../pages/Favorites/FavoritesNotLogged';
import Home from '../../pages/Home/Home';
import LatestSightings from '../../pages/LatestSightings/LatestSightings';
import NotFound from '../../pages/NotFound/NotFound';
import PageWrapper from '../PageWrapper/PageWrapper';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<PageWrapper />}>
          <Route index element={<Home />}/>
          <Route path={AppRoute.Login} element={<FavoritesNotLogged />} />
          <Route path={AppRoute.LatestSightings} element={<LatestSightings />} />
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
