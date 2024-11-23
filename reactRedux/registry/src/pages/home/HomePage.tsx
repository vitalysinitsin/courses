import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import type { HomeLoaderResult } from "./homeLoader";

function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLoaderResult;

  const renderedPackages = featuredPackages.map((p) => (
    <div
      key={p.name}
      className="flex flex-col justify-between gap-3 border rounded shadow p-4"
    >
      <div className="flex flex-col gap-1 border-b border-gray-400 h-full relative pb-10">
        <div className="font-bold text-center">{p.name}</div>
        <div className="text-sm text-gray-500">{p.description}</div>
        <div className="text-sm text-gray-500 absolute bottom-0">
          {p.maintainers.length} Maintainers
        </div>
      </div>
      <Link
        to={`/packages/${p.name}`}
        className="border rounded border-gray-900 text-center"
      >
        View
      </Link>
    </div>
  ));

  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold">The NPM Registry</h1>
        <p className="mx-auto max-w-[600px] text-gray-500">
          The package manager for Javascript. Search and view packages.
        </p>
      </div>
      <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch">
        {renderedPackages}
      </div>
    </div>
  );
}

export default HomePage;
