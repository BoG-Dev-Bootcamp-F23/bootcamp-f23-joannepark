import React from 'react';
import Train from './Train/Train';
import Navbar from './Navbar';

const TrainList = ({ color, data }) => {
  const filteredData = data.filter(train => train.LINE === color);

  return (
    <div>
      <Navbar data={data} />
      {filteredData.map((train, index) => (
        <Train key={index} data={train} />
      ))}
      {/* Nonfunctional buttons */}
      <button>Arriving</button>
      <button>Scheduled</button>
      <button>{color === 'green' || color === 'blue' ? 'Eastbound' : 'Northbound'}</button>
      <button>{color === 'green' || color === 'blue' ? 'Westbound' : 'Southbound'}</button>
    </div>
  );
};

export default TrainList;
