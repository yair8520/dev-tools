import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Header, Layout } from '../Components';
import { DiffChecker } from '../Components/DiffChecker';
import { ModalContext } from '../Components/ModalContext/ModalContext';
import { Formatter } from '../Pages';
import { FlexPage } from '../Pages/FlexPage';
import { Modal } from '../Components/Modal';

export const AppRouter = () => {
  const { modal } = useContext(ModalContext);

  return (
    <Router basename="/dev-tools">
      {modal ? <Modal /> : null}
      <Header />
      <Layout>
        <Routes>
          <Route path="*" index element={<Navigate to="/json-formatter" />} />
          <Route path="/json-formatter" element={<Formatter />} />
          <Route path="/diff-checker" element={<DiffChecker />} />
          <Route path="/flex-play" element={<FlexPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
