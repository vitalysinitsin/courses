import classNames from "classnames";

const DEFAULT_CLASSNAME = "border rounded p-3 shadow bg-white w-full";

function Panel({ children, className, ...rest }) {
  return (
    <div {...rest} className={classNames(DEFAULT_CLASSNAME, className)}>
      {children}
    </div>
  );
}

export default Panel;
