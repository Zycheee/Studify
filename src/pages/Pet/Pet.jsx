import React, { useState, useEffect } from "react";
import { useStreak } from "../../context/StreakContext.jsx";
import Streak from "../components/Streak.jsx";

const Pet = () => {
  const { streakData } = useStreak();
  const canChoosePet = streakData.streakDays >= 3;

  const [selectedPet, setSelectedPet] = useState(null); //State for selected pet
  const [petName, setPetName] = useState(null);

  const [justEvolved, setJustEvolved] = useState(false); //State for evolution animation
  const [prevLevel, setPrevLevel] = useState(streakData.streakDays);

  useEffect(() => { //Load selected pet from localStorage on component mount
    const savedPet = localStorage.getItem("selectedPet");
    const savedName = localStorage.getItem("petName");
    if (savedPet) setSelectedPet(savedPet);
    if (savedName) setPetName(savedName);
  }, []);

  useEffect(() => { //Reset pet if streak is below 3 (For debugging purposes ONLY, remove if goods na)
    if (!canChoosePet) {
      localStorage.removeItem("selectedPet");
      localStorage.removeItem("petName");
      setSelectedPet(null);
      setPetName(null);
    }
  }, [canChoosePet]);

  useEffect(() => { //Save yuor level to local storage
  const savedLevel = parseInt(localStorage.getItem("prevLevel")) || 0;
  setPrevLevel(savedLevel);
}, []);

  useEffect(() => {
  const currentLevel = streakData.streakDays;
  const milestones = [3, 30, 80];

  if (milestones.includes(currentLevel) && currentLevel > prevLevel) {
    setJustEvolved(true);  // If we just passed a milestone
    setTimeout(() => setJustEvolved(false), 2000); // Reset animation flag after a short delay
  }

  if (currentLevel !== prevLevel) {
    setPrevLevel(currentLevel);
    localStorage.setItem("prevLevel", currentLevel);
  }
  }, [streakData.streakDays, prevLevel]);

  const generatePetName = () => {
    const names = ["Ducay", "Talisic", "Bigno", "Christian", "Kyle", "Jhon"];
    return names[Math.floor(Math.random() * names.length)];
  };

  const handleChoosePet = (petNameChosen) => { //Save selected pet to localStorage
    const randomName = generatePetName();
    setSelectedPet(petNameChosen);
    setPetName(randomName);
    localStorage.setItem("selectedPet", petNameChosen);
    localStorage.setItem("petName", randomName);
  };

  const firstEvoPets = [ //Evolution of Pets
    { name: "Puppy", src: "/Public/Dog/Puppy-Happy.gif" },
    { name: "Chick", src: "/Public/Bird/Baby Chick.gif" },
    { name: "Fish", src: "/Public/Fish/Fish.gif" },
  ];

  const secondaryEvoPets = [
    { name: "Juvenile Dog", src: "/Public/Dog/Juvenile Dog- Happy.gif" },
    { name: "Juvenile Bird", src: "/Public/Bird/Juvenile Bird.gif" },
    { name: "Shark", src: "/Public/Fish/Shark.gif" },
  ];

  const finalEvoPets = [
    { name: "Adult Dog", src: "/Public/Dog/Adult Dog - Happy.gif" },
    { name: "Eagle", src: "/Public/Bird/Eagle.gif" },
    { name: "Whale Shark", src: "/Public/Fish/Whale Shark.gif" },
  ];

  const getCurrentPetData = () => { //Use to determine current evolution stage (takes no parameters)
    if (!selectedPet) return null;

    let evoSet = firstEvoPets;
    const level = streakData.streakDays;

    if (level >= 80) evoSet = finalEvoPets;
    else if (level >= 30) evoSet = secondaryEvoPets;

    const petMap = { //Match corresponding evolution type
      Puppy: "Dog",
      Chick: "Bird",
      Fish: "Fish",
    };

    const species = petMap[selectedPet] || ""; //Find the species name of the chosen pet otherwise return empty string
    return evoSet.find((p) => p.src.includes(species)); //Find matching evolution from evoSet
  };

  const getCurrentPetName = () => { //Dynamic updating of pet species name
    const level = streakData.streakDays;

    if (level >= 80) {
    if (selectedPet === "Puppy") return "Adult Dog";
    if (selectedPet === "Chick") return "Eagle";
    if (selectedPet === "Fish") return "Whale Shark";
    } 
    else if (level >= 30) {
    if (selectedPet === "Puppy") return "Juvenile Dog";
    if (selectedPet === "Chick") return "Juvenile Bird";
    if (selectedPet === "Fish") return "Shark";
    } 
    else {
    return selectedPet; // still first evolution
    }

  return selectedPet;
  };

  const currentPet = getCurrentPetData();

  return (
    <div
      style={{
        backgroundColor: "#fafafaff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <div style = {{marginLeft: selectedPet? "auto" : "0", marginRight: selectedPet? "100px" : "0", transition: "all 0.3s ease"}}>
        <Streak />
      </div>

      <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#222" }}>
        {!canChoosePet
          ? "Achieve 3 streaks to unlock a pet!"
          : !selectedPet
          ? "Congratulations! You can now choose a pet!"
          : ""}
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: selectedPet ? "space-between" : "center",
          alignItems: "center",
          width: selectedPet ? "80%" : "auto",
          gap: "30px",
        }}
      >
        {/* If already chosen, only show that pet */}
        {selectedPet ? (
          <div style={{ 
            textAlign: "center", 
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "-40px",
            transform: "translate(310px, -170px)",
          }}>
            {petName && (
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                {petName}
              </p>
            )}
            <img
              src={currentPet?.src}
              alt={selectedPet}
              key={currentPet?.src}
              style={{ 
                width: "450px", 
                borderRadius: "10px", 
                transition: "transform 0.6s ease, opacity 0.6s ease",
                animation: justEvolved ? "evolveEffect 1.5s ease-in-out" : "none",
              }}
            />

            {/* Pet species name */}
            <p
              style={{
                fontSize: "28px",
                marginTop: "10px",
                fontWeight: "normal",
              }}
            >
              {getCurrentPetName()}
            </p>

            {/* Pet Level */}
            <p style={{
              fontSize: "24px",
              marginTop: "5px",
              fontWeight: "lighter",
            }}>
              Level {streakData.streakDays}
            </p>
          </div>
        ) : canChoosePet ? (
          firstEvoPets.map((pet) => ( // Show pet choices if unlocked and no pet chosen yet
            <div key={pet.name} style={{ textAlign: "center" }}>
              <img
                src={pet.src}
                alt={pet.name}
                style={{
                  width: "320px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onClick={() => handleChoosePet(pet.name)}
              />
              <p style={{ fontSize: "28px", marginTop: "10px", fontWeight: "bold" }}>
                {pet.name}
              </p>
            </div>
          ))
        ) : (
          <> {/* Locked pet view */}
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <img
                  src="/Public/egg-breaking.gif"
                  alt="Locked Pet"
                  style={{ width: "320px", borderRadius: "10px" }}
                />
                <p style={{ fontSize: "28px", marginTop: "10px", fontWeight: "bold" }}>?</p>
              </div>
            ))}
          </>
        )}
    </div>
  </div>
  );
};

export default Pet;

