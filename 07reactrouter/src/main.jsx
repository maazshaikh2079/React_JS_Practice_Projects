import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about/' element={<About />}/>
      <Route path='contact/' element={<Contact />}/>
      <Route path='user/' element={<User />}>
        <Route path=':userid' element={<User />}/>
      </Route>
      <Route
      path='github/'
      loader={githubInfoLoader}
      element={<Github />}
      />
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
