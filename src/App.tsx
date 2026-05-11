import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OverOns from "./pages/OverOns";
import Diensten from "./pages/Diensten";
import OnsWerk from "./pages/OnsWerk";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
