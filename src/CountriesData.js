import React from "react";
import { useParams } from "react-router";
import { TourData } from "./data";
import { useNavigate } from "react-router";
export const CountriesData = () => {
  const { ctrId } = useParams();
  const nav = useNavigate();
  const ctrData = TourData.continents.find((val) => val.id == ctrId);
  return (
    <div>
      <h1>Top Countries in {ctrData.name}</h1>
      <div className="contiData">
        {ctrData.countries.map((val) => (
          <ul onClick={() => nav(`/CountryData/${ctrData.name}/${val.id}`)}>
            <img src={val.image}></img>
            <li>{val.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
