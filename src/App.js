import * as React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

//pages
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import NotFound from './pages/not found/NotFound';
import Test from './pages/testing/Test';

//components
import Loader from './components/loader/Loader';

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/me' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/test' element={<Test />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
