import React from "react";
import { useState } from "react";
import "../estilos/App.css";
import Buscador from "./Buscador";
import Card from "./Card";
import "animate.css";

function PanelClima() {
  let urlClima =
    "https://api.openweathermap.org/data/2.5/weather?&appid=9eae981a056e2b75e9afaa5cb8c05ef5&lang=es";
  let ciudadUrl = "&q=";
  let urlPronostico =
    "https://api.openweathermap.org/data/2.5/forecast?&appid=9eae981a056e2b75e9afaa5cb8c05ef5&lang=es";

  const [clima, setClima] = useState([]);
  const [pronostico, setPronostico] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [locacion, setLocacion] = useState("");

  const getLocalizacion = async (loc) => {
    setLoading(true);
    setLocacion(loc);

    //Clima

    urlClima = urlClima + ciudadUrl + loc;

    await fetch(urlClima)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((climaData) => {
        console.log(climaData);
        setClima(climaData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });

    //Pronostico

    urlPronostico = urlPronostico + ciudadUrl + loc;

    await fetch(urlPronostico)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((pronoData) => {
        console.log(pronoData);
        setPronostico(pronoData);

        setLoading(false);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });
  };

  return (
    <>
      <Buscador newLocalizacion={getLocalizacion} />
      <div className="contIconos">
        <img src="../dom.png" alt="..." className="animate__flash" />
        <img src="../ventoso.png" alt="..." className="animate__flash" />
      </div>
      <Card
        showData={show}
        loadingData={loading}
        clima={clima}
        pronostico={pronostico}
      />
      <div className="contIconos">
        <img src="../tormenta.png" alt="..." className="animate__flash" />
        <img src="../nublado.png" alt="..." className="animate__flash" />
      </div>
    </>
  );
}

export default PanelClima;
