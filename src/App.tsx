import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wrapper from './components/layout/Wrapper';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import SpecialtyDetail from './pages/SpecialtyDetail';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import Specialties from './pages/Specialties';
import HomeHealthcareBilling from './pages/HomeHealthcareBilling';
import HomeHealthcareVirtualAssistant from './pages/HomeHealthcareVirtualAssistant';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-healthcare-billing-services" element={<HomeHealthcareBilling />} />
          <Route path="/home-healthcare-virtual-assistant-services" element={<HomeHealthcareVirtualAssistant />} />
          <Route path="/medical-billing-support" element={<HomeHealthcareBilling />} />
          <Route path="/medical-billing-services" element={<HomeHealthcareBilling />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/specialties/:slug" element={<SpecialtyDetail />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}
