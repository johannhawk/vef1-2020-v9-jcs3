import { el, element, formatDate } from './lib/utils';
// importa öðru sem þarf...
import { fetchEarthquakes } from "./lib/earthquakes";

document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman
  const earthquakes = await fetchEarthquakes();

  console.log(earthquakes);
});
