import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from './App.module.scss';
import Layout from './LayOut';
// import { Link, Router } from 'react-router-dom'
import LayOutDataMenu from './DataMenu/LayOutDataMenu';
import Header from './LayOut/Header';
import MenuSneakers from './LayOut/menuSneaker/MenuSneakers';
import DetailSneaker from './LayOut/detailSneaker/DetailSneaker';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import Home from './LayOut/home/Home';
import { dataType } from './LayOut/Header';
import ErrorPage from './LayOut/errorPage/ErrorPage';

const data = [
  {
    id: 1,
    path: '/',
    element: <Home />
  },
  {
    id: 2,
    path: '/detail',
    element: <DetailSneaker />
  },
  {
    id: 3,
    path: '/:type',
    element: <MenuSneakers />,
  },

]


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} errorElement={<ErrorPage />} />
          <Route path='/product/:sneakerId' element={<DetailSneaker />} errorElement={<ErrorPage />} />
          <Route path='/:typeOfProduct/page/:pageNumber' element={<MenuSneakers />} errorElement={<ErrorPage />} />
        </Routes>

      </div>
      
    </Router>
  );
}

export default App;
