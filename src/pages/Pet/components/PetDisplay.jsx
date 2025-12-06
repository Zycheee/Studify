import React from "react";
import PetImage from "./PetImage";

const PetDisplay = ({pet, petName, level, animate}) => {
  if (!pet) return null;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2 style={{ fontSize: "50px", fontWeight: "bold" }}>{petName}</h2>

      {/* Pet Image */}
      <PetImage src={pet.src} alt={pet.name} size={450} className={animate ? "evolve-effect" : ""} />

      {/* Day */}
      <p style={{ marginTop: "10px", fontSize: "45px", fontWeight: "bold" }}>
        <strong>Day:</strong> {level}
      </p>
    </div>
  );
};

export default PetDisplay;
