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
import { useParams } from "react-router-dom";
import {
  getContactId,
  getFeatureCV,
  getInfomationCV,
  getProjectCV,
  getResumeCV,
} from "../../service/maincv";
import { Puff } from "react-loader-spinner";

function MainCV() {
  const [data, setData] = useState({
    information: "",
    features: "",
    projects: "",
    resume: "",
    contactId: "",
  });
  const [loading, setLoading] = useState(true); // State để kiểm soát loading
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Bật trạng thái loading
      const [information, features, projects, resume, contactId] =
        await Promise.all([
          getInfomationCV(slug),
          getFeatureCV(slug),
          getProjectCV(slug),
          getResumeCV(slug),
          getContactId(slug),
        ]);
      setData({ information, features, projects, resume, contactId });
      setLoading(false); // Tắt trạng thái loading khi dữ liệu đã được tải
    };
    fetchData();
  }, [slug]);

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
    <div className="maincv">
      <Header />
      <Introduce information={data.information} />
      <Features features={data.features.skills} />
      <Portfolio projects={data.projects.projects} />
      <Resume resume={data.resume} />
      <Contact information={data.information} contactId={data.contactId} />
      <Footer />
    </div>
  );
}

export default MainCV;
