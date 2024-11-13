type Feature = {
  geometry: {
    coordinates: number[];
  };
  properties: {
    displayName: string;
    place_id: number;
  };
};

interface SearchResponse {
  features: Feature[];
}

export const search = async (term: string) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`
  );

  const data: SearchResponse = await res.json();

  return data;
};
