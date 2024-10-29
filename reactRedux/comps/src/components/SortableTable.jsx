import { useState } from "react";
import Table from "./Table";

function SortableTable({ data, config, ...rest }) {
  const [sortParams, setSortParams] = useState({
    order: null,
    sortBy: null,
  });

  const handleClick = (label) => {
    if (sortParams.order === null) {
      setSortParams({ sortBy: label, order: "asc" });
    } else if (sortParams.order === "asc") {
      setSortParams({ sortBy: label, order: "desc" });
    } else if (sortParams.order === "desc") {
      setSortParams({ sortBy: null, order: null });
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: (
        <th onClick={() => handleClick(column.label)}>
          {column.label} IS SORTABLE
        </th>
      ),
    };
  });

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

  return (
    <div>
      {sortParams.order}-{sortParams.sortBy}
      <Table {...rest} config={updatedConfig} data={sortedData} />
    </div>
  );
}

export default SortableTable;
