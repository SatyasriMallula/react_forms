import React, { useEffect, useRef, useState } from "react";
// const inputref = React.createRef();

export const Search = (props) => {
  // console.log(props.recipes);
  const usageRef = useRef();
  const data = props.recipes;
  const [tags, setTags] = useState(data);
  const [value, setValue] = useState("");
  const searchInObject = (obj, query) => {
    if (typeof obj === "object" && obj !== null) {
      return Object.values(obj).some((value) => searchInObject(value, query));
    } else if (Array.isArray(obj)) {
      return obj.some((item) => searchInObject(item, query));
    } else if (typeof obj === "string") {
      console.log(obj);
      return obj.toLowerCase().includes(query.toLowerCase());
    } else {
      return obj === query;
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      setValue("");
      setTags(data);
    } else {
      setTags(data.filter((item) => searchInObject(item, value)));
    }

    props.parentChildData(tags);
  };

  useEffect(() => {
    console.log(usageRef.current);
    usageRef.current.focus();
    props.parentChildData(tags);
  }, [tags, props]);
  // console.log(tags);
  return (
    <div>
      Search
      <input type="text" onChange={handleChange} ref={usageRef}></input>
    </div>
  );
};
