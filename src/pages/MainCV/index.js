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

function MainCV() {
  const [information, setInformation] = useState("");
  const [features, setFeatures] = useState("");
  const [projects, setProjects] = useState("");
  const [resume, setResume] = useState("");
  const [contactId, setContactId] = useState("");

  useEffect(() => {
    // Lấy tất cả các phần tử <section> trên trang
    const sections = document.querySelectorAll("section");
    // Lấy tất cả các liên kết <a> trong menu điều hướng của header
    const navLinks = document.querySelectorAll(".header__right a");

    // Hàm xử lý khi cuộn trang
    const handleScroll = () => {
      let current = ""; // Biến lưu trữ ID của phần tử hiện tại đang cuộn đến

      // Lặp qua từng phần tử <section> để xác định vị trí của nó trên trang
      sections.forEach((section) => {
        const sectionTop = section.offsetTop; // Vị trí của phần tử tính từ đầu trang
        const sectionHeight = section.clientHeight; // Chiều cao của phần tử

        // Kiểm tra xem phần tử có nằm trong vùng nhìn thấy của người dùng không
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          // Nếu đúng, lưu trữ ID của phần tử này vào biến current
          current = section.getAttribute("id");
        }
      });

      // Lặp qua tất cả các liên kết trong menu điều hướng
      navLinks.forEach((link) => {
        // Xóa lớp "focus" khỏi tất cả các liên kết
        link.classList.remove("focus");

        // Nếu liên kết trỏ tới phần tử hiện tại đang được cuộn đến, thêm lớp "focus"
        if (link.getAttribute("href").substring(1) === current) {
          link.classList.add("focus");
        }
      });
    };

    // Thêm sự kiện "scroll" để gọi hàm handleScroll khi cuộn trang
    window.addEventListener("scroll", handleScroll);

    // Dọn dẹp sự kiện khi component bị gỡ bỏ
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Mảng rỗng để đảm bảo useEffect chỉ chạy một lần khi component được gắn vào

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  const { slug } = useParams();

  // Function to fetch data
  const fetchInfo = async () => {
    setInformation(await getInfomationCV(slug));
    setFeatures(await getFeatureCV(slug));
    setProjects(await getProjectCV(slug));
    setResume(await getResumeCV(slug));
    setContactId(await getContactId(slug));
  };

  useEffect(() => {
    fetchInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <>
      <div className="maincv">
        <Header />
        <Introduce information={information} />
        <Features features={features.skills} />
        <Portfolio projects={projects.projects} />
        <Resume resume={resume} />
        <Contact information={information} contactId={contactId} />
        <Footer />
      </div>
    </>
  );
}

export default MainCV;
