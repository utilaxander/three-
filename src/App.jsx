
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MultiStepForm from './components/MultiStepForm';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <header className="app-header">
          <h1>Create Your Account</h1>
        </header>
        <main>
          <MultiStepForm />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
