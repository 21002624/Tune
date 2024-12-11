import React from "react";
import "./Filters.css";

const Filters = () => {
  return (
    <div className="Filters">
      <div>
        <button className="filterBtn">New Releases</button>
        <button className="filterBtn">Charts</button>
        <button className="filterBtn">Top Playlists</button>
        <button className="filterBtn">Podcasts</button>
        <button className="filterBtn">Top Artists</button>
        <button className="filterBtn">Radio</button>
      </div>
    </div>
  );
};

export default Filters;
