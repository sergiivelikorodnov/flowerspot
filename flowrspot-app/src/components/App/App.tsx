import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import NotFound from '../../pages/NotFound/NotFound';
import PageWrapper from '../PageWrapper/PageWrapper';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<PageWrapper />}>
          {/* <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          /> */}
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
