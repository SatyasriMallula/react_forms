import React, { useEffect, useState } from "react";
const Countrys = ["India", "Australia", "Canada", "America", "Argentina"];
export const Form = ({ CountryCodes }) => {
  //   const [fous, setfocus] = useState(false);
  const [text, setText] = useState(false);
  const [value, setValue] = useState("");
  const [branches, setBranches] = useState([
    "Civil Engineering",
    "Computer Science and engineering",
    "Mechanical Engineering",

    "Electrical Engineering",
    "Electrical and electronics engineering",
  ]);
  const handleBlur = () => {
    if (value === "") {
      setText(true);
    } else {
      setText(false);
    }
  };

  const handleChane = (e) => {
    setValue(e.target.value);
    setText(false);
  };
  console.log(CountryCodes);
  return (
    <form>
      <label>FirstName </label>
      <input
        type="text"
        onBlur={handleBlur}
        onInput={handleChane}
        value={value}
      ></input>
      <label>{text && <p>Enter a value</p>}</label>
      <br></br>
      <label>LastName </label>
      <input type="text" onBlur={null} onInput={null}></input>
      <label>{}</label>
      <br></br>
      <label>Mobile</label>
      <select required>
        <option>+</option>
        {CountryCodes.map((ele, index) => {
          return <option key={index}>+{ele}</option>;
        })}
      </select>
      <span> </span>
      <input type="tele"></input> <br></br>
      <label>Country </label>
      <select>
        <option>Select </option>
        {Countrys.map((e, index) => {
          return <option key={index}>{e}</option>;
        })}
      </select>
      <br></br>
      <label>Course</label>
      <input type="text"></input>
      <br></br>
      <label>Branch</label>
      <input type="text" list="brow"></input>
      <datalist id="brow">
        {/* <input type="text" placeholder="Search"></input> */}
        {branches.map((item, index) => {
          return <option value={item} key={index}></option>;
        })}
      </datalist>
      <br></br>
      <button >Submit</button>
    </form>
  );
};
