import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Resume from './pages/resume/Resume';
import NotFound from './pages/not found/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/me' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
