import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SiteShell from "./components/SiteShell";
import Home from "./pages/Home";
import Creed from "./pages/Creed";
import Topics2026 from "./pages/Topics2026";
import Staff from "./pages/Staff";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import ThankYou from "./pages/ThankYou";
import Flyer from "./pages/Flyer";

export default function App() {
  return (
    <SiteShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-creed" element={<Creed />} />
        <Route path="/topics-2026" element={<Topics2026 />} />
        <Route path="/our-staff" element={<Staff />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/flyer" element={<Flyer />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteShell>
  );
}
