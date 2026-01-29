// make a function named Pool that returns a div with the text "Pool Page"import React from 'react';
// imports Sidebar and navbar and just exports Pool

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Pool = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div>Pool Page</div>
    </div>
  );
};

export default Pool;