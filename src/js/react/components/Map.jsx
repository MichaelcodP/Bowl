import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ position }) => {
  return (
    <MapContainer center={position} zoom={15} style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup> Ми тут! 📍</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
