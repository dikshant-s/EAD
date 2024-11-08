import React, { useState } from "react";

const PassCheck = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handlePasswordChange = (event) => {
    const newpassword = event.target.value;

    setPassword(newpassword);
    checkStrength(newpassword);
  };

  const checkStrength = (password) => {
    let strength = "weak";

    const criteria = [
      { regex: /.[8,]/, label: "at least 8 characters" },
      { regex: /[A-Z]/, label: "Upper case letters" },
      { regex: /[a-z]/, label: "Lower case letters" },
      { regex: /[0-9]/, label: "numbers" },
      { regex: /[A-Za-z0-9]/, label: "special characters" },
    ];
    const passedCriteria = criteria.filter((criterian) =>
      criterian.regex.test(password)
    );

    switch (passedCriteria.length) {
      case 5:
        strength = "Very Strong";
        break;
      case 4:
        strength ="Strong";
        break;
      case 3:
        strength = "Medium";
        break;
      default:
        strength = "Weak";
        break;
    }
    setStrength(strength);
  };

  return (
    <div style={{ padding: "10px", fontFamily: "arial" }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        style={{padding:'10px',fontSize:'16px',width:'90%'}}
      />
      <div
        style={{
          marginTop: "10px",
          fontSize: "16px",
          color:
            strength === "veryWeak"
              ? "darkred"
              : strength === "Weak"
              ? "red"
              : strength === "Medium"
              ? "yellow"
              : strength === "Strong"
              ? "green"
              : strength === "Very Strong"
              ? "darkgreen"
              : "black",
        }}
      >
        <strong>Password Strength: </strong>
        {strength}
      </div>
    </div>
  );
};

export default PassCheck;
