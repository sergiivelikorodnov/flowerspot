import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../config/routes';
import { AuthorizationStatus } from '../../const';
import { getLoginStatus } from '../../store/authSlice/selectors';

type PrivateRouteProps = {
  children: JSX.Element,
}

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element{
  const authorizationStatus = useSelector(getLoginStatus);

  if (authorizationStatus!==AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Login} />;
  } else {
    return children;
  }
}

export default PrivateRoute;
