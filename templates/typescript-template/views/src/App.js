import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  ContactPage,
  Navbar,
  RegistrationPage,
  LoginPage,
  SuccessPage,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth/register" element={<RegistrationPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
