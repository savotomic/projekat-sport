import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import SportClubTable from './pages/SportClubTable';
import "./style.scss"
import Footer from './components/Footer';
import Players from './pages/Players';
import SportClubPlayers from './pages/SportClubPlayers';
import RequireAuth from './pages/RequireAuth';
import { useState } from 'react';
import ClubForm from './pages/ClubForm.jsx';
import PlayerForm from './pages/PlayerForm.jsx';

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/sport-club-table",
        element: <SportClubTable/>
      },
      {
        path: "/players",
        element: <Players/>
      },
      {
        path:"/club-players/:id",
        element:<SportClubPlayers/>
      },
      {
        path:"/add-club",
        element:<ClubForm/>
      },
      {
        path:"/add-player",
        element:<PlayerForm/>
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);
function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
