import React, { useState, useEffect } from "react";
import { useStreak } from "../../context/StreakContext.jsx";
import Streak from "../components/Streak.jsx";
import PetSelection from "./components/PetSelection.jsx";
import PetDisplay from "./components/PetDisplay";
import LockedPets from "./components/LockedPets";
import EvolutionName from "./components/EvolutionName";
import EvolutionData from "./components/EvolutionData";

const firstEvoPets = [
  { name: "Puppy", src: "/Dog/Puppy.gif" },
  { name: "Chick", src: "/Bird/Chick.gif" },
  { name: "Fish", src: "/Fish/Fish.gif" },
];

const lockedPetsData = [
  { id: 1, name: "Locked Pet 1", src: "/egg-breaking.gif" },
  { id: 2, name: "Locked Pet 2", src: "/egg-breaking.gif" },
  { id: 3, name: "Locked Pet 3", src: "/egg-breaking.gif" },
];

const Pet = () => {
  const { streakData } = useStreak();
  const canChoosePet = streakData.streakDays >= 3;

  const [selectedPet, setSelectedPet] = useState(null);
  const [petName, setPetName] = useState(null);
  const [currentStage, setCurrentStage] = useState(null);
  const [playEvolveAnimation, setPlayEvolveAnimation] = useState(false);

  console.log("selectedPet:", selectedPet);
  console.log("petName:", petName);
  console.log("currentStage:", currentStage);

  useEffect(() => {
    const savedPet = localStorage.getItem("selectedPet");
    const savedName = localStorage.getItem("petName");

    if (savedPet) setSelectedPet(savedPet);
    if (savedName) setPetName(savedName);
  }, []);

  useEffect(() => {
    if (!selectedPet) return;

    const data = EvolutionData[selectedPet];

    const stage = [...data.stages]
      .reverse()
      .find((s) => streakData.streakDays >= s.level);

    if (stage?.name !== currentStage?.name) {
      setPlayEvolveAnimation(true);
      setTimeout(() => setPlayEvolveAnimation(false), 1000);
    }
    setCurrentStage(stage);
  }, [selectedPet, streakData.streakDays]);

  useEffect(() => {
    if (!canChoosePet) {
      localStorage.removeItem("selectedPet");
      localStorage.removeItem("petName");
      setSelectedPet(null);
      setPetName(null);
      setCurrentStage(null);
    }
  }, [canChoosePet]);

  const handlePetSelect = (petName) => {
    const selected = firstEvoPets.find((p) => p.name === petName);

    const names = ["Ducay", "Talisic", "Bigno", "Christian", "Kyle", "Jhon"];
    const randomName = names[Math.floor(Math.random() * names.length)];

    setSelectedPet(petName);
    setPetName(randomName);

    localStorage.setItem("selectedPet", petName);
    localStorage.setItem("petName", randomName);
  };


  const nextEvolution = (() => {
    if (!selectedPet || !currentStage) return null;

    const data = EvolutionData[selectedPet].stages;
    const idx = data.findIndex((stage) => stage.name === currentStage.name);

    return data[idx + 1]?.name || null; // null if last evo
  })();

  return (
    <div className="bg-[#fafafa] pt-12 min-h-screen relative">

      <div className={selectedPet ? "absolute right-30 top-10" : "flex justify-center mt-5"}>
        <Streak />
      </div>

      <div className="flex flex-col items-center text-center">
        <h2 className="text-3x1 font-bold">
          {!canChoosePet
            ? "Achieve 3 streaks to unlock a pet!"
            : !selectedPet
            ? "Congratulations! You can now choose a pet!"
            : ""}
        </h2>

        {/* 1 - Streak below 3: Show locked eggs */}
        {!canChoosePet && <LockedPets lockedPets={lockedPetsData} />}

        {/* 2 - Streak >= 3 & no pet selected: Show pet options */}
        {canChoosePet && !selectedPet && (
          <div style = {{ marginTop: "80px" }}>
            <PetSelection firstEvoPets={firstEvoPets} onChoosePet={handlePetSelect} />
          </div>
        )}

        {/* 3 - Pet selected: Show pet display */}
        {selectedPet && currentStage && (
          <PetDisplay
            pet={currentStage}
            petName={petName}
            level={streakData.streakDays}
            animate={playEvolveAnimation}
          />
        )}

        {/* Evolution info only if pet selected */}
        {selectedPet && (
          <EvolutionName currentPet={currentStage} nextEvolution={nextEvolution} />
        )}
      </div>
    </div>
  );
};

export default Pet;