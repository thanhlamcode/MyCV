import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import Features from "../../components/Features";
import Header from "../../components/Header";
import Introduce from "../../components/Introduce";
import Portfolio from "../../components/Portfolio";
import Resume from "../../components/Resume";
import WOW from "wowjs";
import "animate.css";
import "./style.scss";
import { useEffect } from "react";

function MainCV() {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  return (
    <>
      <Header />
      <Introduce />
      <Features />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default MainCV;
