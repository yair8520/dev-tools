import React, { Suspense, useContext } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Layout } from '../Components';
import { ModalContext } from '../Components/ModalContext/ModalContext';
import { Modal } from '../Components/Modal';
import routes from './Routes';

export const AppRouter = () => {
  const { modal } = useContext(ModalContext);

  return (
    <Router>
      {modal ? <Modal /> : null}
      <Header />
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<Suspense>
                <route.element />
              </Suspense>} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default AppRouter;
