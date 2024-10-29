import { useState } from "react";

function useSort(data, config) {
  const [sortParams, setSortParams] = useState({
    order: null,
    sortBy: null,
  });

  const setSortColumn = (label) => {
    if (sortParams.sortBy && label !== sortParams.sortBy) {
      setSortParams({ sortBy: label, order: "asc" });
      return;
    }

    if (sortParams.order === null) {
      setSortParams({ sortBy: label, order: "asc" });
    } else if (sortParams.order === "asc") {
      setSortParams({ sortBy: label, order: "desc" });
    } else if (sortParams.order === "desc") {
      setSortParams({ sortBy: null, order: null });
    }
  };

  let sortedData = data;
  if (sortParams.order && sortParams.sortBy) {
    const { sortValue } = config.find((col) => col.label === sortParams.sortBy);

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortParams.order === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortOrder: sortParams.order,
    sortBy: sortParams.sortBy,
    sortedData,
    setSortColumn,
  };
}

export default useSort;
