import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './AppRouter';
import './index.css';
// Add scroll animation reveal functionality
document.addEventListener('DOMContentLoaded', function () {
  function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      }
    }
  }
  window.addEventListener('scroll', reveal);
  reveal(); // Call once on load
});
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <AppRouter />
  </React.StrictMode>);