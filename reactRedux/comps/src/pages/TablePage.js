import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Banana", color: "bg-yellow-500", score: 3 },
    { name: "Lime", color: "bg-green-500", score: 1 },
    { name: "Apple", color: "bg-red-500", score: 2 },
  ];

  const config = [
    { label: "Fruits", render: () => {} },
    { label: "Color" },
    { label: "Score" },
  ];

  return <Table data={data} config={config}></Table>;
}

export default TablePage;
