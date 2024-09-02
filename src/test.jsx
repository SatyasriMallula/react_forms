import React, { useRef, useState } from "react";

export const Test = () => {
  const [input1, setInput1] = useState("");
  const [blur1, setBlur1] = useState(false);
  const [input2, setInput2] = useState("");
  const [blur2, setBlur2] = useState(false);
  const [border2, setBorder] = useState(false);
  const [border1, setborder1] = useState(false);

  const [button, setButton] = useState(true);
  const handleChange = (e) => {
    setBlur1(false);
    setBorder(false);
    setInput1(e.target.value);
  };
  const handleBlur = () => {
    if (input1) {
      setBorder(false);
      setBlur1(false);
    } else {
      setBlur1(true);
      setBorder(true);
    }
  };
  const handleChange1 = (e) => {
    if (input1 !== "") {
      setButton(false);
    }

    setBlur2(false);
    setborder1(false);
    setInput2(e.target.value);
  };
  const handleBlur1 = () => {
    if (input2) {
      setborder1(false);
      setBlur2(false);
    } else {
      setBlur2(true);
      setborder1(true);
    }
  };
  const handleSubmit = () => {
    setInput1("");
    setInput2("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={input1}
          onInput={(e) => handleChange(e)}
          onBlur={handleBlur}
          style={{
            borderColor: border2 && "red",
            transition: "border-color 0.3s ease",
          }}
        ></input>
        {blur1 && <p style={{ color: "red" }}>Error</p>}
        <br></br>
        <input
          type="number"
          value={input2}
          onInput={(e) => handleChange1(e)}
          onBlur={handleBlur1}
          style={{ borderColor: border1 && "red" }}
        ></input>
        {blur2 && <p style={{ color: "red" }}>Error</p>}
        <button onClick={handleSubmit} disabled={button}>
          Submit
        </button>
      </form>
    </div>
  );
};
