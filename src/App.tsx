import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import Home from "./pages/Home";
import OverOns from "./pages/OverOns";
import Diensten from "./pages/Diensten";
import OnsWerk from "./pages/OnsWerk";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Logos from "./pages/Logos";
import Privacyverklaring from "./pages/Privacyverklaring";
import Disclaimer from "./pages/Disclaimer";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden";
import Cookiebeleid from "./pages/Cookiebeleid";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/diensten" element={<Diensten />} />
        <Route path="/ons-werk" element={<OnsWerk />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/logos" element={<Logos />} />
        <Route path="/privacyverklaring" element={<Privacyverklaring />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
        <Route path="/cookiebeleid" element={<Cookiebeleid />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  );
}
