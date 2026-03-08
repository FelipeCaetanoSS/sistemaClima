import { useEffect, useState } from "react";
import { weatherApi } from "../../services/weatherService.js";
import { useWeatherCity } from "../../services/weatherContext.jsx";

function ClimaIcon() {
  const [icon, setIcon] = useState(null);
  const [temp, setTemp] = useState("");
  const city = useWeatherCity();

  useEffect(() => {
    async function getData() {
      if (!city) return;

      const iconRt = await weatherApi.iconCityRt;
      const tempRt = await weatherApi.tempRealTime;

      if (city !== null) {
        if (iconRt !== null) {
          setIcon(iconRt);
        } else {
          const image = "";
          setIcon(image);
        }
        if (tempRt !== null) {
          setTemp(tempRt);
        } else {
          const t = 27;
          setTemp(t);
        }
      }
    }
    getData();
  }, [city]);

  return (
    <>
      <img
        src={!icon ? `https:${icon}` : icon}
        alt="Icone Clima"
        className="w-16 h-16"
      />
      <p className="text-gray-600 capitalize">{temp}°C</p>
    </>
  );
}

export default ClimaIcon;
