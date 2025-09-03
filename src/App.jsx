import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Process from "./pages/Process";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Solution from "./pages/Solution";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="" element={<Process />} />
        <Route path="our-service" element={<Service />} />
        <Route path="our-solution" element={<Solution />} />
        <Route path="contact-us" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
