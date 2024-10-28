import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Banana", color: "bg-yellow-500", score: 3 },
    { name: "Lime", color: "bg-green-500", score: 1 },
    { name: "Apple", color: "bg-red-500", score: 2 },
  ];

  const config = [
    { label: "Name", render: ({ name }) => name },
    {
      label: "Color",
      render: ({ color }) => <div className={`p-3 m-2 ${color}`}></div>,
    },
    { label: "Score", render: ({ score }) => score },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return <Table data={data} config={config} keyFn={keyFn}></Table>;
}

export default TablePage;
