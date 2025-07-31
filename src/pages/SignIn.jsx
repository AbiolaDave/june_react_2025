import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = async (e) => {
    let url = "http://localhost:5002/sign-in";
    axios
      .post(url, { email, password })
      .then((response) => {
        if (response.status) {
          console.log(response);
          alert("Sign In Successful");
          let token = response.data.token;
          console.log(token);
          localStorage.setItem("token", token);
            navigate("/dashboard");
        } else {
          console.log(response);
          alert("Wrong credentials");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Couldn't Sign in");
      });
  };

  return (
    <>
      <div>SignIn</div>

      <input
        placeholder="email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="text"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>Sign In</button>
    </>
  );
};

export default SignIn;
