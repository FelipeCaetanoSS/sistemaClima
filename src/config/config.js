export const config = {
  weatherKey: import.meta.env.VITE_API_KEY_WEATHER,
  weatherUrl: import.meta.env.VITE_API_URL_WEATHER,
  localsKey: import.meta.env.VITE_API_KEY_LOCALS,
  localsUrl: import.meta.env.VITE_API_URL_LOCALS,
  localsClienteSecret: import.meta.env.VITE_CLIENT_SECRET_LOCALS,
  localsClienteId: import.meta.env.VITE_CLIENT_ID_LOCALS,
  mode: import.meta.env.MODE
}