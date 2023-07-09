import React from "react";
import { useParams } from "react-router";
import { TourData } from "./data";
import { useNavigate } from "react-router";
export const CountryData = () => {
  const { cityName, cityId } = useParams();
  const nav = useNavigate();
  const ctrData = TourData.continents
    .find((val) => val.name == cityName)
    .countries.find((city) => city.id == cityId);
  return (
    <div>
      <h1>Top Countries in {}</h1>
      <div className="contiData">
        {ctrData.destinations.map((val) => (
          <ul
            onClick={() =>
              nav(`/TouristData/${cityName}/${ctrData.name}/${val.id}`)
            }
          >
            <img src={val.image}></img>
            <li>{val.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
