import type { PackageDetails } from "../../api/types/packageDetails";
import { getFeaturePackageDetails } from "../../api/types/getFeaturePackages";

export interface HomeLoaderResult {
  featuredPackages: PackageDetails[];
}

export async function homeLoader(): Promise<HomeLoaderResult> {
  const featuredPackages = await getFeaturePackageDetails();

  console.log(featuredPackages);

  return {
    featuredPackages,
  };
}
