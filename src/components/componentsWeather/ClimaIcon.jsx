import { Sun } from "lucide-react"; // Biblioteca de ícones
import { useState } from "react";
import { weatherApi } from "../../Services/weatherService.js";

function ClimaIcon({icon, temp}) {

return (
    <>
        <img src={`https:${icon}`} className="w-16 h-16" />
        <p className="text-gray-600 capitalize">{temp}°C</p>
    </>
    );
}

export default ClimaIcon;
