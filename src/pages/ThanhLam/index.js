import Footer from "../../components/Client/Footer";
import Contact from "../../components/Client/Contact";
import Features from "../../components/Client/Features";
import Header from "../../components/Client/Header";
import Introduce from "../../components/Client/Introduce";
import WorkExperience from "../../components/Client/WorkExperience";
import Portfolio from "../../components/Client/Portfolio";
import Resume from "../../components/Client/Resume";
import "./style.scss";
import { useState, useEffect } from "react";
import {
  getContactId,
  getFeatureCV,
  getInfomationCV,
  getProjectCV,
  getResumeCV,
} from "../../service/maincv";
import { Puff } from "react-loader-spinner";
import AnimatedCursor from "react-animated-cursor";
import { Helmet } from "react-helmet";

function ThanhLam() {
  const [data, setData] = useState({
    information: "",
    features: "",
    projects: "",
    resume: "",
    contactId: "",
  });
  const [loading, setLoading] = useState(true); // State để kiểm soát loading

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [information, features, projects, resume, contactId] =
        await Promise.all([
          getInfomationCV("thanhlam"),
          getFeatureCV("thanhlam"),
          getProjectCV("thanhlam"),
          getResumeCV("thanhlam"),
          getContactId("thanhlam"),
        ]);
      setData({ information, features, projects, resume, contactId });
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (loading) return;
    const targets = document.querySelectorAll(
      '.we-card, .features .box, .portfolio .box, .tl-card,' +
      '.contact .wrap-left, .contact form,' +
      '.we-subtitle, .we-title,' +
      '.features h3, .features h1,' +
      '.portfolio h3, .portfolio h1,' +
      '.tl-heading, .contact h3, .contact h1'
    );
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    targets.forEach(el => { el.classList.add('scroll-reveal'); obs.observe(el); });
    return () => obs.disconnect();
  }, [loading]);


  if (loading) {
    // Hiển thị loading khi trạng thái loading là true
    return (
      <div className="loading-container">
        <Puff
          visible={true}
          height={80}
          width={80}
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow" />
        <title>
          {data.information?.fullName
            ? `${data.information.fullName} — PHP / Symfony Backend Developer`
            : "Đoàn Thanh Lâm — PHP / Symfony Backend Developer"}
        </title>
        <meta
          name="description"
          content={
            data.information?.description ||
            "PHP/Symfony Backend Developer with 1.5 years building a production multi-tenant POS platform. Specialising in event-driven architecture, Kafka/CDC pipelines, and REST API design with API Platform 4."
          }
        />
        <meta
          property="og:title"
          content={`${data.information?.fullName || "Đoàn Thanh Lâm"} — PHP / Symfony Backend Developer`}
        />
        <meta
          property="og:description"
          content={
            data.information?.description ||
            "Backend Developer with 1.5 years on a production multi-tenant POS platform — Symfony 7, API Platform 4, Kafka/CDC, RabbitMQ. Top 40 / 430+ teams YDCC 2025."
          }
        />
        <meta property="og:url" content="https://doanthanhlam.vercel.app/" />
        <meta
          property="og:image"
          content={data.information?.profilePicture || "/logo192.png"}
        />
        <link rel="canonical" href="https://doanthanhlam.vercel.app/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: data.information?.fullName || "Đoàn Thanh Lâm",
            jobTitle: "Backend Developer — PHP / Symfony",
            url: "https://doanthanhlam.vercel.app/",
            image: data.information?.profilePicture || "/logo192.png",
            description:
              data.information?.description ||
              "PHP/Symfony Backend Developer specialising in event-driven architecture, CDC pipelines, and REST API design.",
          })}
        </script>
      </Helmet>
      <div className="maincv">
        <AnimatedCursor
          innerSize={10} // Kích thước chấm nhỏ bên trong
          outerSize={40} // Kích thước vòng ngoài
          color="255, 255, 255" // Màu trắng cho cả vòng ngoài và chấm
          outerAlpha={0.3} // Độ trong suốt của vòng ngoài
          innerScale={1} // Tỷ lệ phóng to khi hover cho chấm
          outerScale={1.5} // Tỷ lệ phóng to vòng ngoài khi hover
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        <Header />
        <Introduce information={data.information} />
        <WorkExperience />
        <Features features={data.features.skills} />
        <Portfolio projects={data.projects.projects} />
        <Resume resume={data.resume} />
        <Contact information={data.information} contactId={data.contactId} />
        <Footer />
      </div>
    </>
  );
}

export default ThanhLam;
