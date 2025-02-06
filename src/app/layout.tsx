// app/layout.tsx
import React from 'react';
import './globals.css'; // Import your global CSS here (if any)
import Header from './components/Header';

export const metadata = {
  title: 'TalentVare - Home ',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="bg-gray-100 text-gray-900">
       <Header/>
        {children}
      </body>
    </html>
  );
};

export default Layout;