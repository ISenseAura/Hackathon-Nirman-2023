import "./Register.css";

import { useState } from "react";

let serverAdd = "http://127.0.0.1:8080";
let Register = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(serverAdd + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json) {
      // Save the auth token and redirect
      localStorage.setItem("uid", json.status.uid);
      console.log(localStorage.getItem("uid"));
    } else {
      console.log("Dude!", "Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="rcontainer">
      <div className="title">Registration</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">First Name</span>
              <input
                type="text"
                value={credentials.fname}
                onChange={onChange}
                id="fname"
                name="fname"
                placeholder="Enter your First name"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Last Name</span>
              <input
                type="text"
                value={credentials.lname}
                onChange={onChange}
                id="lname"
                name="lname"
                placeholder="Enter your Last Name"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="text"
                value={credentials.email}
                onChange={onChange}
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Date of Birth</span>
              <input
                type="date"
                value={credentials.dob}
                onChange={onChange}
                id="dob"
                name="dob"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input
                type="text"
                value={credentials.password}
                onChange={onChange}
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input type="text" placeholder="Confirm your password" required />
            </div>
          </div>
          <div className="button">
            <input type="submit" defaultValue="Next" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
