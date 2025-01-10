import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReviewBooking from './components/ReviewBooking';
import './css/tailwind.css';
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ReviewBooking />
      <Footer />
    </div>
  );
};

export default App;
