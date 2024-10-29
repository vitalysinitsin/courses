import { Fragment, useState } from "react";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable({ data, config, ...rest }) {
  const [sortParams, setSortParams] = useState({
    order: null,
    sortBy: null,
  });

  const handleClick = (label) => {
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

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-200"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            <div className="text-2xl">
              {getIcons(column.label, sortParams.sortBy, sortParams.order)}
            </div>
            {column.label}
          </div>
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

  return <Table {...rest} config={updatedConfig} data={sortedData} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <Fragment>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </Fragment>
    );
  } else if (sortOrder === "asc") {
    return <GoArrowSmallUp />;
  } else if (sortOrder === "desc") {
    return <GoArrowSmallDown />;
  }
}

export default SortableTable;
