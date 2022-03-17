import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../config/routes';
import Favorites from '../../pages/Favorites/Favorites';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound/NotFound';
import GridCards from '../GridCards/GridCards';
import PageWrapper from '../PageWrapper/PageWrapper';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<PageWrapper />}>
          <Route index element={<GridCards />}/>
          <Route path={AppRoute.Login} element={<Login />} />
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
