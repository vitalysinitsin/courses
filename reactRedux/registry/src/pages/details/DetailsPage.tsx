import type { DetailsLoaderResult } from "./detailsLoader";
import { useLoaderData } from "react-router-dom";

function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult;
  return (
    <div>
      {details.name} {details.description}
    </div>
  );
}

export default DetailsPage;
