import React, { useState } from "react";
import "./Register.css";
import Header from "../Header/Header";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const gohome = () => {
    window.location.href = window.location.origin;
  };

  const register = async (e) => {
    e.preventDefault();

    let register_url = window.location.origin + "/djangoapp/register";

    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    });

    const json = await res.json();
    if (json.status != null && json.status === "Authenticated") {
      sessionStorage.setItem("username", json.userName);
      window.location.href = window.location.origin;
    } else if (json.error === "Already Registered") {
      alert("The user with same username is already registered");
      window.location.href = window.location.origin;
    } else {
      alert("Registration failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <Header />
      <div className="container" style={{ width: "50%", marginTop: "3%" }}>
        <div className="modalContainer">
          <form className="register_panel" onSubmit={register}>
            <div className="header" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <span className="text" style={{ fontSize: "30px", fontWeight: "bold" }}>Sign Up</span>
              <a href="/" onClick={() => gohome()} style={{ cursor: "pointer" }}>
                <img style={{ width: "1cm" }} src="/static/close.png" alt="X" />
              </a>
            </div>
            <hr />

            <div className="inputs">
              <div className="input">
                <img src="/static/person.png" className="img_icon" alt="Username" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="input_field"
                  required
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className="input">
                <img src="/static/person.png" className="img_icon" alt="First Name" />
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="input_field"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="input">
                <img src="/static/person.png" className="img_icon" alt="Last Name" />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="input_field"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="input">
                <img src="/static/email.png" className="img_icon" alt="Email" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input_field"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input">
                <img src="/static/password.png" className="img_icon" alt="Password" />
                <input
                  name="psw"
                  type="password"
                  placeholder="Password"
                  className="input_field"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="submit_panel" style={{ marginTop: "20px", textAlign: "center" }}>
              <input className="btn_sub" type="submit" value="Register" style={{ padding: "10px 30px", fontSize: "16px", cursor: "pointer", background: "darkturquoise", border: "none", borderRadius: "5px", color: "white", fontWeight: "bold" }} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
