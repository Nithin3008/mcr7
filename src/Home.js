import React from "react";
import { TourData } from "./data";
import { useNavigate } from "react-router";
import "./home.css";
export const Home1 = () => {
  const nav = useNavigate();
  return (
    <div>
      <h1>welcome to trip advisor</h1>
      <h2>top continents for your next holiday</h2>
      <div className="contiData">
        {TourData.continents.map((val) => (
          <ul onClick={() => nav(`/CountriesData/${val.id}`)}>
            <img src={val.image}></img>
            <li>{val.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
