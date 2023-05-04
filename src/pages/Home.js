import girl1 from "../assets/images/girl1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {
  text: {
    lineHeight: "1rem",
  },
  pText: {
    lineHeight: "1.1rem",
  },
};
function Home() {
  return (
    <main className="mainBg mainWrapper">
      <div className="mainContent">
        <section className="title-sec">
          <p style={style.pText}>Hi, I'm Ayah</p>
          <p className="m-title">Frontend</p>
          {/* <p className="m-title"> Web</p>  */}
          <p className="m-title"> Developer</p>
          <p style={style.text}>I code simple and beautiful web applications</p>
          <button className="infoBtn">Read More</button>
        </section>
        <img src={girl1} className="girl1" alt="girl" />
      </div>

      <section className="socials-sec">
            {/* <button className="infoBtn">Read More</button> */}
            <div className="icons">
                <a href="https://instagram.com/">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" className="icons ig" size="lg"/>
                </a>
                <a href="https://github.com/ayahxsheikh">
                    <FontAwesomeIcon icon="fab fa-github" className="icons gh" size="lg"/>
                </a>
                <a href="https://linkedin.com/">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="icons in" size="lg"/>
                </a>
            </div>
      </section>
    </main>
  );
}

export default Home;
