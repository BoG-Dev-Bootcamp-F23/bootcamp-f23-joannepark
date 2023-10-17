import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import TrainList from '../components/TrainList';
import stationData from '../server/stationData';
import trainData from '../server/trainData';

export default function LinesPage() {
  const [currColor, setCurrColor] = useState('');

  return (
    <div>
      <NavBar color={currColor} data={stationData} />
      <TrainList color={currColor} data={trainData} />
    </div>
  );
}
