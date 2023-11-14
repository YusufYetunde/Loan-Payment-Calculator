// components/Footer.js
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="isolate  text-black p-4 text-center">
      <p>&copy; {currentYear} Loan Repayment Calculator  <span>Yusuf Yetunde</span></p>
    </footer>
  );
};

export default Footer;
