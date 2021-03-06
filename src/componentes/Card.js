import React from "react";
import "../estilos/Card.css";
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

function Card({ showData, loadingData, clima, pronostico }) {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = day + "/" + month + "/" + year;

  //iconos clima 
  var url = "";
  var iconUrl = "";

  //iconos pronostico
  var iconUrl3 = "";
  var iconUrl6 = "";
  var iconUrl9 = "";

  //fechas
  var pronosDate3 = "";
  var pronosDate6 = "";
  var pronosDate9 = "";

  if (loadingData) {
    return <Button variant="dark" disabled>
      <Spinner as="span" animation="border" role="status" aria-hidden="true"/>Loading...</Button>;
  }

  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + clima.weather[0].icon + ".png";

    iconUrl3 = url + pronostico.list[0].weather[0].icon + ".png";
    iconUrl6 = url + pronostico.list[1].weather[0].icon + ".png";
    iconUrl9 = url + pronostico.list[2].weather[0].icon + ".png";

    pronosDate3 =
      pronostico.list[0].dt_txt.substring(8, 10) +
      "/" +
      pronostico.list[0].dt_txt.substring(5, 7) +
      "/" +
      pronostico.list[0].dt_txt.substring(2, 4) +
      " " +
      pronostico.list[0].dt_txt.substring(11, 13);

      pronosDate6 =
      pronostico.list[1].dt_txt.substring(8, 10) +
      "/" +
      pronostico.list[1].dt_txt.substring(5, 7) +
      "/" +
      pronostico.list[1].dt_txt.substring(2, 4) +
      " " +
      pronostico.list[1].dt_txt.substring(11, 13);

      pronosDate9 =
      pronostico.list[2].dt_txt.substring(8, 10) +
      "/" +
      pronostico.list[2].dt_txt.substring(5, 7) +
      "/" +
      pronostico.list[2].dt_txt.substring(2, 4) +
      " " + 
      pronostico.list[2].dt_txt.substring(11, 13);
  }

  return (
    <div className="contClima">
      {showData === true ? (
        <div className="contCard">
          <div className="contClima2">
            <div className="cards">
              <h3>{clima.name}</h3>
              <p>{date}</p>
              <h2>{(clima.main.temp - 273.15).toFixed(1)}??C</h2>
              <p>
                <img src={iconUrl} alt="icon" />
                {clima.weather[0].description}
              </p>
            </div>

            <img src="../fondo.jpg" alt="..." />
          </div>

          <div className="contInfo">
            <div className="contExtra">
              <h5>Temperatura m??xima: {(clima.main.temp_max - 273.15).toFixed(1)}??C</h5>
              <h5>Temperatura m??nima: {(clima.main.temp_min - 273.15).toFixed(1)}??C</h5>
              <h5>sensaci??n t??rmica: {(clima.main.feels_like - 273.15).toFixed(1)}??C</h5>
              <h5>Humedad: {clima.main.humidity}%</h5>
              <h5>Velocidad del viento: {clima.wind.speed}m/s</h5>
            </div>
            <h4>Pronostico Extendido</h4>
            <div className="contPronos">           
              <div>
                <p>{pronosDate3}h</p>
                <p className="description"><img src={iconUrl3} alt="icon"/>
                {pronostico.list[0].weather[0].description}
                </p>
                <p className="temp">{(pronostico.list[0].main.temp - 273.15).toFixed(1)}??C</p>
              </div>
              <div>
                <p>{pronosDate6}h</p>
                <p className="description"><img src={iconUrl6} alt="icon" />
                  {pronostico.list[1].weather[0].description}
                </p>
                <p className="temp">{(pronostico.list[1].main.temp - 273.15).toFixed(1)}??C</p>
              </div>
              <div>
                <p>{pronosDate9}h</p>
                <p className="description"><img src={iconUrl9} alt="icon" />
                  {pronostico.list[2].weather[0].description}
                </p>
                <p className="temp">{(pronostico.list[2].main.temp - 273.15).toFixed(1)}??C</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4>Sin datos</h4>
      )}
    </div>
  );
}

export default Card;
