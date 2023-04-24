import '../styles/about.css'
import cssLogo from '../assets/cssLogo.jpg'
import htmlLogo from '../assets/htmlLogo.jpg'
import jsLogo from '../assets/jsLogo.jpg'
import btstrapLogo from '../assets/btstrapLogo.jpg'
import jqueryLogo from '../assets/jqueryLogo.jpg'
import gitLogo from '../assets/gitLogo.jpg'
import vsLogo from '../assets/vsLogo.jpg'
import nodejsLogo from '../assets/nodejsLogo.png'
import npmLogo from '../assets/npmLogo.jpg'
import githubLogo from '../assets/githubLogo.jpg'
import reactLogo from '../assets/reactLogo.jpg'


function About(){
    return (
      
      <main className="aboutBg aboutWrapper">

        <section className="about-section">
        <h3> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe veritatis perspiciatis quibusdam eius inventore numquam fugit. Obcaecati earum at ipsam cupiditate, debitis, doloremque, facere dolores molestiae omnis eius laudantium! Amet. </h3>
        </section>

        <section className="skills-section">
            <h2 className="tools-title">Technologies and Tools</h2>
            <div className="techLogos1">
                <figure>
                    <img className="html" src={htmlLogo} alt="html-logo" />
                    <figcaption>HTML</figcaption>
                </figure>
                <figure>
                    <img className="css" src={cssLogo} alt="css-logo" />
                    <figcaption>CSS</figcaption>
                </figure>
                <figure>
                    <img className="js" src={jsLogo} alt="js-logo" />
                    <figcaption>JavaScript</figcaption>
                </figure>
                <figure>
                    <img className="jquery" src={jqueryLogo} alt="jq-logo" />
                    <figcaption>jQeury</figcaption>
                </figure>
                <figure>
                        <img className="react" src={reactLogo} alt="react-logo" />
                        <figcaption>React</figcaption>
                    </figure>
              

                <div className="techLogos2">
                    <figure>
                        <img className="vs" src={vsLogo} alt="vs-logo" />
                        <figcaption>VS Code</figcaption>
                    </figure>
                    <figure>
                        <img className="git" src={gitLogo} alt="git-logo" />
                        <figcaption>GIT</figcaption>
                    </figure>
                    <figure>
                        <img className="node" src={nodejsLogo} alt="node-logo" />
                        <figcaption>NodeJS</figcaption>
                    </figure>
                    <figure>
                        <img className="npm" src={npmLogo} alt="npm-logo" />
                        <figcaption>NPM</figcaption>
                    </figure>
                    <figure>
                        <img className="github" src={githubLogo} alt="github-logo" />
                        <figcaption>GitHub</figcaption>
                    </figure>
                  
                {/* <figure>
                    <img className="bootstrap" src={btstrapLogo} alt="bootstrap-logo" />
                    <figcaption>Bootstrap</figcaption>
                </figure> */}
                </div>

            </div>
        </section>
      </main>
      
    )
}

export default About;