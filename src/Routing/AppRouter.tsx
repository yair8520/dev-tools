import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Layout } from '../Components';
import { ModalContext } from '../Components/ModalContext/ModalContext';
import { Modal } from '../Components/Modal';
import routes from './Routes';

export const AppRouter = () => {
  const { modal } = useContext(ModalContext);

  return (
    <Router >
      {modal ? <Modal /> : null}
      <Header />
      <Layout>
        <Routes>
          {routes.map((route, index) =>
            <Route key={index} path={route.path} index Component={route.element} />
          )}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
