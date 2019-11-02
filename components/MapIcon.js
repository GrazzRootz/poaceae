import React from "react";

export const MapIcon = ({ garden, color }) => (
  <>
    <style jsx>{`
        div { background-color ${color}; width: 5px; height: 10px; }
    `}</style>
    {<div key={garden.location[0].join(',')} lat={garden.location[0][0]} lng={garden.location[0][1]} />}
    {/*garden.location.map(loc => (
      <div key={loc.join(',')} lat={loc[0]} lng={loc[1]} />
    ))*/}
  </>
);
