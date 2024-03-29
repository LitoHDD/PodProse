import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import CreatorPage from "../pages/CreatorPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";

const Rutas = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/creator' element={<CreatorPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </Fragment>
  );
};

export default Rutas;