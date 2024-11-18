import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./view/HomePage";
import AboutPage from "./view/AboutPage";
import ProblemaPage from "./view/ProblemaPage";
import SolucaoPage from "./view/SolucaoPage";
import ContatoPage from "./view/ContatoPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/problema" element={<ProblemaPage />} />
            <Route path="/solucao" element={<SolucaoPage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
