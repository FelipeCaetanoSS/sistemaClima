import { Utensils } from "lucide-react";
import { useState } from "react";
import { weatherApi } from "../services/weather/weatherService.js";
import { Link } from "react-router";

function TouristPoints() {
  return (
    <div>
      <div className="flex-1 flex flex-col items-center p-8">
        <div className="p-12 rounded-xl shadow-sm border border-slate-100">
          <Link to="/locais">
            <h2 className="text-xl font-bold mb-4">Locais Populares</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-2 hover:bg-slate-50 rounded-xl transition-all cursor-pointer">
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                  <Utensils size={20} />
                </div>
                <div>
                  <p className="font-semibold text-sm">Barolo Trattoria</p>
                  <p className="text-xs text-slate-500">Cozinha Italiana</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 hover:bg-slate-50 rounded-xl transition-all cursor-pointer">
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                  <Utensils size={20} />
                </div>
                <div>
                  <p className="font-semibold text-sm">Barolo Trattoria</p>
                  <p className="text-xs text-slate-500">Cozinha Italiana</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 hover:bg-slate-50 rounded-xl transition-all cursor-pointer">
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                  <Utensils size={20} />
                </div>
                <div>
                  <p className="font-semibold text-sm">Barolo Trattoria</p>
                  <p className="text-xs text-slate-500">Cozinha Italiana</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TouristPoints;
