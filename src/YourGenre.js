import React, { useState } from "react";
import "./App.css";

const YourGenre = () => {
  const [genre, setGenre] = useState("Choose Genre");

  const handleClick = () => {
    if (genre === "Choose Genre") {
      setGenre("Electro");
    } else {
      setGenre("Choose Genre");
    }
  };
  return (
    <>
      <h2 className="centerGenres" style={{ color: "white" }}>
        {genre}
      </h2>
      <button type="button" className="btnGenre" onClick={handleClick}>
        Choose Genre
      </button>
    </>
  );
};
export default YourGenre;
