import type { Place } from "../api/Place";

interface MapProps {
  place: Place | null;
}

export default function Map({ props }: MapProps) {
  return <div>MAP!!!</div>;
}
