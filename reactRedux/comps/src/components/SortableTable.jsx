import { Fragment } from "react";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable({ data, config, ...rest }) {
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-200"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            <div className="text-2xl">
              {getIcons(column.label, sortBy, sortOrder)}
            </div>
            {column.label}
          </div>
        </th>
      ),
    };
  });

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
