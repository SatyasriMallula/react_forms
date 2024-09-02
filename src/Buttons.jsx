import React from "react";

export const Buttons = ({ data }) => {
  const dataset = [...data];
  console.log(dataset);
  const handleOnClick = () => {
    dataset.filter((a, b) => {
      return a.price > b.price;
    });
  };
  return (
    <div>
      <button onClick={handleOnClick}>SortByPrice</button>
    </div>
  );
};
