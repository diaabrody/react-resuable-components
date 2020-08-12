import React from "react";

const Counter = ({ counter, onHandleIncrement, onHandleDelete }) => {
  const { value } = counter;
  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  };
  return (
    <>
      <div className="row">
        <div className="col-1">
          <span className={getBadgeClasses()}>{value}</span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary"
            onClick={() => onHandleIncrement(counter)}
          >
            +
          </button>

          <button
            className="btn btn-danger"
            onClick={() => onHandleDelete(counter.id)}
          >
            x
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
