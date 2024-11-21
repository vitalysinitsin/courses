import type { PackageDetails } from "./packageDetails";

const FEATURED_PACKAGES = ["react", "typescript", "react-redux", "vite"];

export async function getFeaturePackageDetails() {
  const promises = FEATURED_PACKAGES.map(async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    return res.json();
  });

  const data = await Promise.all(promises);

  return data as PackageDetails[];
}
