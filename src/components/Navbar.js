import React from 'react';

const Navbar = ({ data }) => {
  // Nonfunctional Navbar code
  return (
    <div>
      <p>Nonfunctional Navbar</p>
      {/* Display data if needed */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Navbar;
