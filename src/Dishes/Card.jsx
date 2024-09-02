import React from "react";
export const Card = ({ data }) => {
  const data1 = data;

  // console.log(data1);
  return (
    <div>
      {data ? (
        <div>
          <h1>{data1.title}</h1>
          <p>{data1.cuisine}</p>
          <p>{data1.cookingTime}</p>
          <div>
            {" "}
            <p>{data1.instructions}</p>
          </div>
          <div>
            {" "}
            <ul>
              {data1.ingredients.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div>
            <ol>
              {data1.tags.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ol>
          </div>
        </div>
      ) : (
        <div>
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};
