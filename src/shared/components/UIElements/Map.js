import React, { useRef, useEffect } from "react";
// import map from 'ol/Map';
// import View from 'ol/View';
// import Tile from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
// import { fromLonLat } from 'ol/proj';
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamFydXBhdGFvbSIsImEiOiJjbTBtZW9yaWIwMXE0Mm9xdnV5cjRqbTVxIn0.FJRznyNO6z9GLypMCcMgAg";

const Map = (props) => {
const mapRef = useRef();
const { center, zoom } = props;

useEffect(() => {
  const map = new mapboxgl.Map({
    container: mapRef.current,
    //style: "mapbox://styles/mapbox/streets-v11", // Map style
    center: center,
    zoom: zoom,
  });

  new mapboxgl.Marker().setLngLat(center).addTo(map);

  return () => map.remove();
}, [center, zoom]); // Re-run effect when center or zoom changes

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

// const Map = (props) => {
//   const mapRef = useRef();

//   const { center, zoom } = props;

//   useEffect(() => {
//     new map({
//       target: mapRef.current.id,
//       layers: [
//         new Tile({
//           source: new OSM(),
//         }),
//       ],
//       view: new View({
//         center: fromLonLat([center.lng, center.lat]),
//         zoom: zoom,
//       }),
//     });
//   }, [center, zoom]);

//   return (
//     <div
//       ref={mapRef}
//       className={`map ${props.className}`}
//       style={props.style}
//       id="map"
//     ></div>
//   );
// };

export default Map;