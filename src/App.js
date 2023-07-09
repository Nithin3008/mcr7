import logo from "./logo.svg";
import "./App.css";
import { Home1 } from "./Home";
import { Route, Routes } from "react-router";
import { CountriesData } from "./CountriesData";
import { CountryData } from "./CountryData";
import { TouristData } from "./TouristData";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home1></Home1>}></Route>
        <Route
          path="/CountriesData/:ctrId"
          element={<CountriesData></CountriesData>}
        ></Route>
        <Route
          path="/CountryData/:cityName/:cityId"
          element={<CountryData></CountryData>}
        ></Route>
        <Route
          path="/TouristData/:cityName/:cityId/:tourId"
          element={<TouristData></TouristData>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
