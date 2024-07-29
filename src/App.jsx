import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import BlogsDetails from "./Pages/BlogsDetails";
import PlacesRoute from "./Pages/PlacesRoute";
import NoPage from "./Pages/NoPage";
import Contactus from "./Pages/Contactus";
import Contactpreactice from "./Pages/Contactpreactice";
import Dubai from "./Components/searchPlaces/Dubai";
import Delhi from "./Components/searchPlaces/Delhi";
import Maldives from "./Components/searchPlaces/Maldives";
import Sydney from "./Components/searchPlaces/Sydney";
import LosAngeles from "./Components/searchPlaces/LosAngeles";
import LasVegas from "./Components/searchPlaces/LosVegas";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogsDetails />} />
            <Route path="/places" element={<PlacesRoute />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/dubai" element={<Dubai />} />
            <Route path="/delhi" element={<Delhi />} />
            <Route path="/maldives" element={<Maldives />} />
            <Route path="/sydney" element={<Sydney />} />
            <Route path="/losAngeles" element={<LosAngeles />} />
            <Route path="/lasVegas" element={<LasVegas />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Contactpreactice/> */}
    </>
  );
};

export default App;
