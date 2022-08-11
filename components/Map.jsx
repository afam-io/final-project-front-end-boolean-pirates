import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";

export default function Map() {
  const position = [51.505, -0.09]
  //Gets the user's location on the browser
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((location) =>
  //     setPosi([location.coords.latitude, location.coords.longitude])
  //   );
  // }, []);

  return (
    <div>
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "50vh", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
    </div>
  );
}