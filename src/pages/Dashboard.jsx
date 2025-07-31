import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let url = "http://localhost:5002/dashboard";
  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "Application/json",
        },
      })
      .then((response) => {
        if (!response.status) {
          navigate("/user/signin");
        } else {
          console.log(response);
          setUser(response.data.user);
        }
      });
  }, []);

  return (
    <>
      <div>Dashboard</div>
      <h1>Welcome {user.firstname + " " + user.lastname}</h1>
    </>
  );
};

export default Dashboard;
