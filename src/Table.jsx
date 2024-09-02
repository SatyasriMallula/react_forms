import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

export const Table = () => {
  const [data, setData] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [orderdata, setOrderData] = useState("ascending");
  const [inputvalue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
        setFilterData(res.data.products);
      })
      .catch((err) => console.error);
  }, []);
  const handleOnClick = () => {
    const sorted = [...filterdata].sort((a, b) => {
      return orderdata === "ascending" ? a.price - b.price : b.price - a.price;
    });
    setFilterData(sorted);
    setOrderData(orderdata === "ascending" ? "descending" : "ascending");
  };
  const handleSearchClick = (e) => {
    setInputValue(e.target.value);
    data.filter((ele) =>
      ele.brand.toLowerCase().includes(inputvalue.toLowerCase())
    );
  };
  const handleSearch = () => {
    console.log(inputvalue);
    const searcheddata = data.filter((ele) =>
      ele.brand.toLowerCase().includes(inputvalue.toLowerCase())
    );
    console.log(searcheddata);
    if (searcheddata) {
      setFilterData(searcheddata);
    }
  };
  return (
    <div>
      <table border="1px" style={{ borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Discount</th>
          </tr>

          {filterdata.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.brand}</td>
                <td>{e.price}</td>
                <td>{e.rating}</td>
                <td>{e.stock}</td>
                <td>{e.discountPercentage}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleOnClick}>SortByPrice</button>
      <input
        value={inputvalue}
        onChange={handleSearchClick}
        type="text"
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
