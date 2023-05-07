import codegirl from "../assets/images/codegirl.png";
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
          <p className="m-title"> Developer</p>
          <p style={style.text}>I code simple and beautiful web applications</p>
          <a className="a" href="/about">
            <button className="infoBtn">Read More</button>
          </a>
          <section className="socials-sec">
                <div className="icons">
                    <a href="https://instagram.com/">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" className="icons ig" size="xl" />
                    </a>
                    <a href="https://github.com/ayahxsheikh">
                        <FontAwesomeIcon icon="fab fa-github" className="icons gh" size="xl"/>
                    </a>
                    <a href="https://linkedin.com/">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="icons in" size="xl" />
                    </a>
                </div>
            </section>
        </section>
        <img src={codegirl} className="codegirl" alt="girl" />
      </div>

    </main>
  );
}

export default Home;
