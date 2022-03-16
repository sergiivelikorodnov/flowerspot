import {Outlet} from 'react-router-dom';
import Header from '../Header/Header';

function PageWrapper(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default PageWrapper;
