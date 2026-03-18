import { config } from "../../config/config";
import { z } from "zod";
import { newCord } from "./controller";

export const localsSchema = z.object({
  geometry: z.object({
    coordinates: z.array(z.number()).optional(),
  }).optional(),
  properties: z.object({
    name: z.string().optional(),
    categories: z.array(z.string()).optional(),
    opening_hours: z.string().optional(),
    address_line2: z.string().optional(),
    website: z.string().optional(),
    "website:menu": z.string().optional(),

    datasource: z.object({
      raw: z.object({
        "website:menu": z.string().optional(),
      }).passthrough().optional(), 
    }).optional(),
    contact: z.object({
      phone: z.string().optional(),
    }).optional(),
    facilities: z.object({
      wheelchair: z.boolean().optional(),
      takeaway: z.boolean().optional(),
      delivery: z.boolean().optional(),
    }).optional(),
  }),
})
.transform((data) => {
  const p = data.properties;
  const urlDoMenu = p.datasource?.raw?.["website:menu"] || p["website:menu"] || null;

  return {
    name: p.name || "Local sem nome",
    categories: p.categories || [],
    openingHours: p.opening_hours || null,
    address: p.address_line2 || null,
    website: p.website || null,
    menuUrl: urlDoMenu,
    phone: p.contact?.phone || null,
    hasWheelchair: p.facilities?.wheelchair || false,
    hasTakeaway: p.facilities?.takeaway || false,
    hasDelivery: p.facilities?.delivery || false,
    lon: data.geometry?.coordinates?.[0] || null,
    lat: data.geometry?.coordinates?.[1] || null,
  };
});

export const localsListSchema = z.array(localsSchema);

class TouristPointService {
  #URL = config.localsUrl;
  //#URL;
  #API_KEY = config.localsKey;
  #coordenadas;

async request(category = "tourism.attraction", limit = 10) {
    const response = await fetch(
        `${this.#URL}?categories=${category}&filter=rect:${this.#coordenadas}&limit=${limit}&apiKey=${this.#API_KEY}`,
        {
          method: "GET",
          headers: {
            accept: "application/geo+json",
          },
        },
      );
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }

      const data = await response.json();
      const validatedData = z.array(localsSchema).parse(data.features);

      return validatedData;
  }

  async formatCoord(lat, lon){
    const result = await newCord(lat, lon);
    this.#coordenadas = result;
  }
}

// Exportando a instância apenas uma vez
export const touristPointsApi = new TouristPointService();
