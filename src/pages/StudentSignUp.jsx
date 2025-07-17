import axios from "axios";
import { useState } from "react";

const StudentSignUp = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    let url = "http://localhost:5001/student/register";
    console.log(firstname, lastname, email, password);

    axios
      .post(url, { firstname, lastname, email, password })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function allStudent() {
    let url = "http://localhost:5001/student/all-students";
    axios
      .get(url)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div>
        <input
          placeholder="Firstname"
          onChange={(e) => {
            setfirstname(e.target.value);
          }}
          type="text"
        />
        <input
          placeholder="Lastname"
          onChange={(e) => {
            setlastname(e.target.value);
          }}
          type="text"
        />
        <input
          placeholder="Email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          type="text"
        />
        <input
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="text"
        />
      </div>
      <button onClick={signUp}>Sign Up</button>
      <button onClick={allStudent}>All Student</button>
    </div>
  );
};

export default StudentSignUp;
