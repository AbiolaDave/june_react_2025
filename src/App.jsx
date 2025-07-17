import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Fish from "./pages/Fish";
import LandingPage from "./pages/LandingPage";
import Meat from "./pages/Meat";
import NotFound from "./pages/NotFound";
import Product2 from "./pages/Product2";
import Services from "./pages/Services";
import Shoes from "./pages/Shoes";
import StudentSignUp from "./pages/StudentSignUp";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/sign-up" element={<StudentSignUp />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="about" element={<About />} />
        <Route path="about-us" element={<Navigate to="/about" />} />
        <Route path="service" element={<Services />} />
        <Route path="profile/:username" element={<UserProfile />} />
        <Route path="product" element={<Product2 />}>
          <Route path="fish" element={<Fish />} />
          <Route path="meat" element={<Meat />} />
          <Route path="shoe" element={<Shoes />} />
        </Route>
        {/* <Route path="/product/fish" element={<Fish/>}/> */}
        <Route path="*" element={<NotFound />} /> //Wildcard Route
      </Routes>
      <Footer />
    </>
  );
};

export default App;
