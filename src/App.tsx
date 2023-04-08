import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Formatter } from './Pages';
import { Header, Layout } from './Components';
import { DiffChecker } from './Components/DiffChecker';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/json-formatter" />} />
            <Route index path="/json-formatter" element={<Formatter />} />
            <Route path="/diff-checker" element={<DiffChecker />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
