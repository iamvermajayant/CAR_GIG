import Footer from "./compoents/ui/Footer";
import FooterBanner from "./compoents/ui/FooterBanner";
import Navbar from "./compoents/ui/Navbar";
import Carstarcares from "./pages/Carstarcares";
import Services from "./pages/Services";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#0c1014] to-[#082134]">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/cares" element={<Carstarcares />} />
        </Routes>
      </main>
      <FooterBanner />
      <Footer />
    </div>
  );
}

export default App;
