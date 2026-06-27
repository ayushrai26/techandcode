import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CommunityIntro from "./components/Community";
import MeetupsPage from "./pages/MeetupsPage";
import LinkPage from "./pages/LinkPage";
import StartupsPage from "./pages/StartupsPage";
import LocalTechHiresPage from "./pages/LocalTechHiresPage";
import ContactPage from "./pages/ContactPage";

function HomePage() {
  return (
    <>
      <Hero />
      <CommunityIntro />
    </>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meetups" element={<MeetupsPage />} />
          <Route path="/link" element={<LinkPage />} />
          <Route path="/startups" element={<StartupsPage />} />
          <Route path="/localtechhires" element={<LocalTechHiresPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
