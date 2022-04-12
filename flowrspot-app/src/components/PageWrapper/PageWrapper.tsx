import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import ModalForm from '../ModalForm/ModalForm';

function PageWrapper(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
      <ModalForm />
    </>
  );
}

export default PageWrapper;
