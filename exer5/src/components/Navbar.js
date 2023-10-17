import React from 'react';

const Navbar = ({ data }) => {
  return (
    <div>
      <p>Nonfunctional Navbar</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Navbar;
