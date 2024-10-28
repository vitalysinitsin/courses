function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map(({ label }) => {
    return <th key={label}>{label}</th>;
  });

  const renderedRows = data.map((row) => {
    const renderedCells = config.map(({ label, render }) => (
      <td className="p-3" key={label}>
        {render(row)}
      </td>
    ));

    return (
      <tr className="border-b" key={keyFn(row)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}
export default Table;
