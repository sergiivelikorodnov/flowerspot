import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import FavoritesNotLogged from '../../pages/Favorites/FavoritesNotLogged';
import { getLoginStatus } from '../../store/authSlice/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector(getLoginStatus);

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return <FavoritesNotLogged />;
  } else {
    return children;
  }
}

export default PrivateRoute;
