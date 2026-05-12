import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import WhatsAppButton from "./components/WhatsAppButton";
import SchemaOrg from "./components/SchemaOrg";
import ScrollToTop from "./components/ScrollToTop";
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
import Inzichten from "./pages/Inzichten";
import Landen from "./pages/Landen";
import LandGids from "./pages/LandGids";
import Strategiegesprek from "./pages/Strategiegesprek";
import Pakketten from "./pages/Pakketten";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SchemaOrg />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/diensten" element={<Diensten />} />
        <Route path="/pakketten" element={<Pakketten />} />
        <Route path="/strategiegesprek" element={<Strategiegesprek />} />
        <Route path="/ons-werk" element={<OnsWerk />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/logos" element={<Logos />} />
        <Route path="/privacyverklaring" element={<Privacyverklaring />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
        <Route path="/cookiebeleid" element={<Cookiebeleid />} />
        <Route path="/inzichten" element={<Inzichten />} />
        <Route path="/landen" element={<Landen />} />
        <Route path="/landen/:slug" element={<LandGids />} />
      </Routes>
      <Footer />
      <CookieBanner />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
