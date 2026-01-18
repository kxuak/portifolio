import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import MyProjects from './pages/MyProjects';
import Contact from './pages/Contact';
import AppLayout from './Layout/AppLayout/app';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/projetos' element={<MyProjects />}/>
          <Route path='/contato' element={<Contact />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
