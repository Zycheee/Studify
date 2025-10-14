import React from "react";
import { useStreak } from "../../context/StreakContext.jsx";
import Streak from "../components/Streak.jsx";

const Pet = () => {
  const { streakData } = useStreak();
  const canChoosePet = streakData.streakDays >= 3;

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
      <div>
        <Streak />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "normal",
            color: "#222",
          }}
        >
          {canChoosePet 
            ? "Congratulations! You can now choose a pet!"
            : "Achieve 3 streaks to unlock a pet!"
          }
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {/* Only show the pets if the user has a streak of 3 or more */}
        {canChoosePet ? (
          <>
            <div style={{ textAlign: "center" }}>
              <img
                src="public/Dog/Puppy-Happy.gif"
                alt="Puppy"
                style={{ width: "320px", borderRadius: "10px", cursor: "pointer" }}
                onClick={() => alert("You chose the Puppy!")}
              />
              <p style={{ fontSize: "28px", marginTop: "10px", fontWeight: "bold" }}>
                Puppy
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="public/Bird/Baby Chick.gif"
                alt="Chick"
                style={{ width: "320px", borderRadius: "10px", cursor: "pointer" }}
                onClick={() => alert("You chose the Chick!")}
              />
              <p style={{ fontSize: "28px", marginTop: "10px", fontWeight: "bold" }}>
                Chick
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="public/Fish/Fish.gif"
                alt="Fish"
                style={{ width: "320px", borderRadius: "10px", cursor: "pointer" }}
                onClick={() => alert("You chose the Fish!")}
              />
              <p style={{ fontSize: "28px", marginTop: "10px", fontWeight: "bold" }}>
                Fish
              </p>
            </div>
          </>
        ) : (
          // If not yet unlocked, show question marks instead
          <>
            <div style={{ textAlign: "center" }}>
              <img
                src="public/egg-breaking.gif"
                alt="Locked Pet"
                style={{ width: "320px", borderRadius: "10px" }}
              />
              <p style={{ fontSize: "28px", marginTop: "10px", fontWeight: "bold" }}>?</p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="public/egg-breaking.gif"
                alt="Locked Pet"
                style={{ width: "320px", borderRadius: "10px" }}
              />
              <p style={{ fontSize: "28px", marginTop: "10px", fontWeight: "bold" }}>?</p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="public/egg-breaking.gif"
                alt="Locked Pet"
                style={{ width: "320px", borderRadius: "10px" }}
              />
              <p style={{ fontSize: "28px", marginTop: "10px", fontWeight: "bold" }}>?</p>
            </div>
          </>
        )}
    </div>
  </div>
  );
};

export default Pet;
