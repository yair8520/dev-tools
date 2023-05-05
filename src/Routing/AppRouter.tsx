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
import { CustomHooks } from '../Components/CustomHooks';
import { HomePage } from '../Components/HomePage';
import { TypeScriptUtils } from '../Components/TypeScriptUtils';

export const AppRouter = () => {
  const { modal } = useContext(ModalContext);

  return (
    <Router basename="/dev-tools">
      {modal ? <Modal /> : null}
      <Header />
      <Layout>
        <Routes>
          <Route path="*" index element={<HomePage />} />
          <Route path="/json-formatter" element={<Formatter />} />
          <Route path="/diff-checker" element={<DiffChecker />} />
          <Route path="/flex-playGround" element={<FlexPage />} />
          <Route path="/custom-hooks" element={<CustomHooks />} />
          <Route path="/TS-utils" element={<TypeScriptUtils />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
