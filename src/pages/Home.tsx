import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Analytics from "@/components/sections/Analytics";
import Success from "@/components/sections/Success";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Pricing from "@/components/sections/Pricing";
import Partners from "@/components/sections/Partners";
import FAQ from "@/components/sections/FAQ";
import ProductDemo from "@/components/sections/ProductDemo";
import Footer from "@/components/layout/Footer";
import ContactUs from "@/components/sections/Contact";
import HeroSection from "../components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/Cta";
import AboutUs from "@/components/sections/About";
import ProductsServices from "@/components/sections/Services";
import IndustriesWeServe from "@/components/sections/Industries";
import Resources from "@/components/sections/Resources";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyCustomFit from "@/components/sections/WhyUs";
import ProductSection from "@/components/sections/Products";
import FeaturesSection from "@/components/sections/Features";
import SolutionsSection from "@/components/sections/Solutions";
import CaseStudies from "@/components/sections/CaseStudy";
import IndustriesSection from "@/components/sections/Industries";
import SustainabilitySection from "./Sustainability";
import PartnershipsSection from "@/components/sections/Partners";
import FeatureSection from "@/components/sections/Features";
import SolutionsShowcase from "@/components/sections/Solutions";
import PricingSection from "@/components/sections/Pricing";
import DemoShowcase from "@/components/sections/DemoShowcase";
import AboutSection from "@/components/sections/About";
import FAQSection from "@/components/sections/FAQ";
import TrustSafety from "@/components/sections/TrustSafety";
import ServicesCategory from "@/components/sections/ServiceCategory";
import CaseStudiesSection from "@/components/sections/CaseStudy";
import Stats from "@/components/sections/Statistics";
import TeamSection from "@/components/sections/Team";
import StatsDashboard from "@/components/sections/Statistics";
import CTASection from "@/components/sections/Cta";
import WhyChooseUs from "@/components/sections/WhyUs";
import Newsletters from "@/components/sections/Newsletter";
import DemoSection from "@/components/sections/DemoShowcase";
import TestimonialsAndPricing from "@/components/sections/Pricing";
import DocsAndFAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/Contact";
import TechnologyShowcase from "@/components/sections/Technology";
import ImpactSection from "../components/sections/Impact";
import ProductGallery from "@/components/sections/Products";
import Integrations from "@/components/sections/Partners";
import SecuritySection from "@/components/sections/Security";
import StatsSection from "@/components/sections/Statistics";
import TradingPairsSection from "@/components/sections/Trading";
import GettingStartedGuide from "@/components/sections/GettingStartedGuild";
import ProcessSection from "@/components/sections/Process";
import CtaSection from "@/components/sections/Cta";
import DashboardPreview from "@/components/sections/Preview";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Features/>
      <DashboardPreview/>
      <ProcessSection/>
      <CtaSection/>
      <PricingSection/>
      {/* <Testimonials/> */}
    <FAQSection/>
    
      <Contact/>
      <Footer/>
    </main>
  );
}