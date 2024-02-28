import girlweb from "../assets/images/girlweb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {
  text: {
    lineHeight: "0",
  },
  pText: {
    lineHeight: "0",
  },
};
function Home() {
  return (
    <main className="mainBg mainWrapper">
      <div className="mainContent">
        <section className="title-sec">
          <p style={style.pText}>Hi, I'm Ayah</p>
          <p className="m-title">Frontend Developer</p>
          {/* <p className="m-title"> Developer</p> */}
          <p style={style.text}>creating simply user friendly applications</p>
          <a href="#/project-gallery">
            <button className="infoBtn">View Portfolio</button>
          </a>
          
        <img src={girlweb} className="codegirl" alt="girl" />
          <section className="socials-sec">
                <div className="icons">
                    <a href="https://www.instagram.com/sheikayax/">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" className="icons ig" size="l" />
                    </a>
                    <a href="https://github.com/ayahxsheikh">
                        <FontAwesomeIcon icon="fab fa-github" className="icons gh" size="l"/>
                    </a>
                    <a href="https://www.linkedin.com/in/ayah-sheikh-22942b216/">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="icons in" size=";" />
                    </a>
                </div>
            </section>
        </section>
      </div>

    </main>
  );
}

export default Home;
