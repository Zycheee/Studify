import React, { useState } from "react";

const PetSelection = ({ firstEvoPets, onChoosePet }) => {
  const [selected, setSelected] = useState(null);

  const toggleSelect = (name) => {
    if (selected === name) {
      setSelected(null);
    } else {
      setSelected(name);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        {firstEvoPets.map((pet) => (
          <div
            key={pet.name}
            onClick={() => toggleSelect(pet.name)}
            style={{
              position: "relative",
              cursor: "pointer",
              borderRadius: "40px",
              border: selected === pet.name ? "4px solid blue" : "4px solid transparent",
              padding: "10px",
              boxSizing: "border-box",
              width: "340px",
              height: "380px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "border-color 0.3s ease",
            }}
          >
            <img
              src={pet.src}
              alt={pet.name}
              style={{
                height: "280px",
                width: "auto",
                borderRadius: "40px",
                objectFit: "contain",
                display: "block",
              }}
            />
            <p
              style={{
                fontSize: "28px",
                marginTop: "10px",
                fontWeight: "bold",
                userSelect: "none",
              }}
            >
              {pet.name}
            </p>

            {/* Checkmark */}
            {selected === pet.name && (
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                  userSelect: "none",
                }}
              >
                ✓
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Choose Pet button */}
      {selected && (
        <button
          onClick={() => onChoosePet(selected)}
          style={{
            marginTop: "30px",
            padding: "12px 24px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "12px",
            border: "none",
            backgroundColor: "blue",
            color: "white",
            cursor: "pointer",
            userSelect: "none",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a7aeeff")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "blue")}
        >
          Choose Pet
        </button>
      )}
    </div>
  );
};

export default PetSelection;
