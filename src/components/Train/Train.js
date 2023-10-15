import React from 'react';

export default function Train({ data, color }) {
  const { DESTINATION, EVENT_TIME, HEAD_SIGN, DELAY } = data;

  return (
    <div>
      <h2>{DESTINATION}</h2>
      <p>Event Time: {EVENT_TIME}</p>
      <p>Head Sign: {HEAD_SIGN}</p>
      <p>Status: {DELAY === "T0S" ? "On Time" : "Delayed"}</p>
      <p>Line Color: {color}</p>
    </div>
  );
}
