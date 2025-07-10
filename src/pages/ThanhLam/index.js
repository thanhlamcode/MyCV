import Footer from "../../components/Client/Footer";
import Contact from "../../components/Client/Contact";
import Features from "../../components/Client/Features";
import Header from "../../components/Client/Header";
import Introduce from "../../components/Client/Introduce";
import Portfolio from "../../components/Client/Portfolio";
import Resume from "../../components/Client/Resume";
import WOW from "wowjs";
import "animate.css";
import "./style.scss";
import { useEffect, useState } from "react";
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
      setLoading(true); // Bật trạng thái loading
      const [information, features, projects, resume, contactId] =
        await Promise.all([
          getInfomationCV("thanhlam"),
          getFeatureCV("thanhlam"),
          getProjectCV("thanhlam"),
          getResumeCV("thanhlam"),
          getContactId("thanhlam"),
        ]);
      setData({ information, features, projects, resume, contactId });
      setLoading(false); // Tắt trạng thái loading khi dữ liệu đã được tải
    };
    fetchData();
  }, []); // Dependency array rỗng, chỉ chạy 1 lần khi mount

  useEffect(() => {
    const wow = new WOW.WOW({ live: false });
    wow.init();
  }, []);

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
            ? `Professional CV of ${data.information.fullName} | Web Developer Portfolio`
            : "Default Title"}
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content={
            data.information?.description ||
            "Explore the professional portfolio and CV of a skilled web developer."
          }
        />
        <meta
          property="og:title"
          content={`Professional CV of ${data.information?.fullName || "a Web Developer"
            }`}
        />
        <meta
          property="og:description"
          content={
            data.information?.description ||
            "Discover the CV and portfolio showcasing web development skills and projects."
          }
        />
        <meta
          property="og:url"
          content={`https://dtl-cv.vercel.app/thanh lam`}
        />
        <meta
          property="og:image"
          content={
            data.information?.profilePicture // Thay thế bằng đường dẫn ảnh mặc định nếu không có
          }
        />
        <link
          rel="canonical"
          href={`https://dtl-cv.vercel.app/thanh lam`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: data.information?.fullName || "Default Name",
            jobTitle: "Web Developer, Data Analysis",
            url: `https://dtl-cv.vercel.app/thanh lam`,
            image:
              data.information?.profilePicture || "/default-profile-image.jpg",
            description:
              data.information?.description ||
              "A skilled web developer specializing in creating professional portfolios.",
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
