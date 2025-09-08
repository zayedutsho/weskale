import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy.jsx";
import Process from "./pages/Process";
import Service from "./pages/Service";
import Solution from "./pages/Solution";
import Terms from "./pages/Terms.jsx"; // ✅ import Privacy

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
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>
    </Routes>
  );
}

export default App;
