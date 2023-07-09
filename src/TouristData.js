import React from "react";
import { useParams } from "react-router";
import { TourData } from "./data";
export const TouristData = () => {
  const { cityName, cityId, tourId } = useParams();
  const ctrData = TourData.continents
    .find((val) => val.name == cityName)
    .countries.find((city) => city.name == cityId)
    .destinations.find((dest) => dest.id == tourId);
  console.log(ctrData, cityId);

  return (
    <div>
      <h1>{ctrData.name}</h1>
      <div className="placeData">
        <img src={ctrData.image}></img>
        <div>
          <p>Description: {ctrData.description}</p>
          <p>Review:{ctrData.ratings}</p>
          <p>Rating:{ctrData.reviews}</p>
          <p>Location:{ctrData.location}</p>
          <p>Opening Hours:{ctrData.openingHours}</p>
          <p>Ticket Price:{ctrData.ticketPrice}</p>
          <p>
            <a href={ctrData.website} target="_blank">
              Website
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
