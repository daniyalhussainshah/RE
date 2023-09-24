import React, { useState } from "react";

function Home() {
  const [inputString, setInputString] = useState("");
  const [regex1Result, setRegex1Result] = useState(false);
  const [regex2Result, setRegex2Result] = useState(false);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputString(newValue);
    checkRegex();
  };

  
  const checkRegex = () => {
    const regex1 = /a(a|b)*/;
    const regex2 = /[1-9]/;
    setRegex1Result(regex1.test(inputString));
    setRegex2Result(regex2.test(inputString));
  };


  return (
    <div>
      <div className="container">
        <h1>Regular Expression Checker</h1>
        <input
          type="text"
          placeholder="Enter a string"
          value={inputString}
          onChange={handleInputChange}
          id="input"
          class="form-control"
          aria-describedby="passwordHelpBlock"
        />
        <div id="passwordHelpBlock" class="form-text">
          {regex1Result && <p>String satisfies regex 1: (a(a|b)*)</p>}
          {regex2Result && <p>String satisfies regex 2: (1|2|3|4|5|6|7|8|9)</p>}
          {!regex1Result && !regex2Result && (
            <p>String does not satisfy either regex.</p>
          )}

        </div>
      </div>
    </div>
  );
}

export default Home;
