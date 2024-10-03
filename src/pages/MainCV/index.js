import Features from "../../components/Features";
import Header from "../../components/Header";
import Introduce from "../../components/Introduce";
import Portfolio from "../../components/Portfolio";
import Resume from "../../components/Resume";
import "./style.scss";

function MainCV() {
  return (
    <>
      <Header></Header>
      <Introduce></Introduce>
      <Features></Features>
      <Portfolio></Portfolio>
      <Resume></Resume>
    </>
  );
}

export default MainCV;
