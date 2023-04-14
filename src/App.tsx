import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Formatter } from './Pages';
import { Header, Layout } from './Components';
import { DiffChecker } from './Components/DiffChecker';
import { ModalContext } from './Components/ModalContext/ModalContext';
import { Modal } from './Components/Modal';
import { FlexPage } from './Pages/FlexPage';
function App() {
  const { modal } = useContext(ModalContext);

  return (
    <>
      {modal ? <Modal /> : null}
      <Router basename="/dev-tools">
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
    </>
  );
}

export default App;
