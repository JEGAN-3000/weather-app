import React from "react";
import "./../App.css";
import propTypes from "prop-types";


const WeatherDetails = (props) => {
  return (
    <>
      <div className="image" data-aos="fade-left" data-aos-duration="1000">
        <img src={props.icon} alt="image" />
      </div>
      <div className="temp" data-aos="fade-right" data-aos-duration="1000">{props.temp}°C</div>
      <div className="location">{props.city}</div>
    
      <div className="country" data-aos="fade-right" data-aos-duration="1000">{props.country}</div>

      <div className="cord" data-aos="fade-left" data-aos-duration="1000">
        <div>
          <span className="lat">latitude</span>
          <span>{props.lat}</span>
        </div>
        <div>
          <span className="lat">longitude</span>
          <span>{props.log}</span>
        </div>
      </div>
      <div className="data_Container">
        <div className="element" data-aos="fade-up-right" data-aos-duration="1000">
          <img src={props.humidityIcon} alt="humidityIcon" />
          <div className="data">
            <div className="humidityPercent">{props.humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element" data-aos="fade-up-left" data-aos-duration="1000">
          <img src={props.windIcon} alt="windIcon" />
          <div className="data">
            <div className="windPercent">{props.wind} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};
WeatherDetails.propTypes = {
  icon: propTypes.string.isRequired,
  temp: propTypes.number.isRequired,
  city: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  lat: propTypes.number.isRequired,
  log: propTypes.number.isRequired,
  humidity: propTypes.number.isRequired,
  wind: propTypes.number.isRequired,
  humidityIcon: propTypes.string.isRequired,
  windIcon: propTypes.string.isRequired,
};
export default WeatherDetails;
