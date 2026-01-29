// make a function named Gym that returns a div with the text "Gym Page"import React from 'react';
// imports Sidebar and navbar and just exports Gym

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Gym = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div>Gym Page</div>
    </div>
  );
};

export default Gym;