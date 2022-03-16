import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  children: JSX.Element,
}

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element{
  const authorizationStatus = AuthorizationStatus.NoAuth;

  if (authorizationStatus===AuthorizationStatus.NoAuth) {
    return <Navigate to={AppRoute.Login} />;
  } else {
    return children;
  }
}

export default PrivateRoute;
