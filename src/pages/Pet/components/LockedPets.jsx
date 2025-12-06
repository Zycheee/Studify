import React from "react";
import PetImage from "./PetImage";

const LockedPets = ({ lockedPets }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "15px",
        }}
      >
        {lockedPets.map((pet) => (
          <div
            key={pet.id}
            style={{
              width: "250px",
              textAlign: "center",
              opacity: 0.5,
              pointerEvents: "none",
            }}
          >
            <div style={{ position: "relative" }}>
              <PetImage src={pet.src} alt={pet.name} size={250} />

              {/* Lock Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "40px",
                }}
              >
              </div>
            </div>

            <p style={{ marginTop: "5px" }}>{pet.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LockedPets;
