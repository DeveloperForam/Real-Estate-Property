import React from "react";

export default function ProjectMap({ latitude, longitude }) {
  if (!latitude || !longitude) {
    return <p>No location available</p>;
  }

  const mapSrc = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>📍 Project Location Map</h3>

      <iframe
        title="Project Location"
        width="100%"
        height="350"
        style={{
          border: 0,
          borderRadius: "12px",
          marginTop: "10px",
        }}
        loading="lazy"
        allowFullScreen
        src={mapSrc}
      ></iframe>
    </div>
  );
}
