import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import FitnessCalculator from "./pages/FitnessCalculator";
import Coaches from "./pages/Coaches";
import Challenges from "./pages/Challenges";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import ChallengeDetail from "./pages/ChallengeDetail";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="//fitness-calculator" element={<FitnessCalculator />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/challenge-detail" element={<ChallengeDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
