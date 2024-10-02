import Features from "../../components/Features";
import Header from "../../components/Header";
import Introduce from "../../components/Introduce";
import Portfolio from "../../components/Portfolio";
import "./style.scss";

function MainCV() {
  return (
    <>
      <Header></Header>
      <Introduce></Introduce>
      <Features></Features>
      <Portfolio></Portfolio>
    </>
  );
}

export default MainCV;
