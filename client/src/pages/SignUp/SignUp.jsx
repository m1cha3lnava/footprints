import React, { useState } from "react";
import logo from "../../images/FPLogo.png";
import axios from "axios";
import "./signup.css";

const SignUp = ({ setIsSidebarOpen, history }) => {
  const [initials, setInitials] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/signup", {
        initials: initials,
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        window.alert(
          `Successfully created new account with email: ${username}`
        );
        history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="signupBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
        <h2 className="headerText">Sign Up</h2>
        <div>
          <div id="howitworks" className="cardBodyLogin">
            <div className="uk-card-medium uk-card-default">
              <form id="signupInput" onSubmit={handleSubmit}>
                <input
                  id="initials"
                  className="input"
                  type="text"
                  name="initials"
                  value={initials}
                  onChange={(e) => {
                    setInitials(e.target.value);
                  }}
                  placeholder="Enter your initials"
                  required
                />
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="Enter your email"
                  required
                />
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter your password"
                  required
                />
                <div className="row">
                  <div className="col s12">
                    <button className="logSignButton input" type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
