import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Formatter } from './Pages';
import { Header, Layout } from './Components';
function App() {
  return (
    <>
      <Header />
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Formatter />} />
          </Routes>
        </Router>
      </Layout>
    </>
  );
}

export default App;
