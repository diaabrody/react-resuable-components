import React from "react";
import Counter from "./Counter";
const Counters = ({ counters, onHandleIncrement, onHandleDelete }) => {
  return (
    <>
      {counters.map((counter) => {
        return (
          <Counter
            counter={counter}
            key={counter.id}
            onHandleIncrement={onHandleIncrement}
            onHandleDelete={onHandleDelete}
          />
        );
      })}
    </>
  );
};

export default Counters;
