import React, { Suspense, useContext } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Layout } from '../Components';
import { ModalContext } from '../Components/ModalContext/ModalContext';
import { Modal } from '../Components/Modal';
import routes from './Routes';
import { DrawerProvider } from '../Context/DrawerContext';

export const AppRouter = () => {
  const { modal } = useContext(ModalContext);

  return (
    <DrawerProvider>
      <Router>
        {modal ? <Modal /> : null}
        <Layout>
        <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Suspense>
                      <route.element />
                    </Suspense>
                  }
                />
              ))}
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </DrawerProvider>
  );
};

export default AppRouter;
