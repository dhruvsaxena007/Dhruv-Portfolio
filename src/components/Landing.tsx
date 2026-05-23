import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>

            <h1>
              DHRUV
              <br />
              <span>SAXENA</span>
            </h1>

            <p className="landing-desc">
              AI Developer • Full Stack Engineer • Creative Technologist
            </p>

            <div className="landing-buttons">
              <a
                href="/Dhruv_Saxena_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="landing-btn"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="landing-info">
            <h3>A Creative</h3>

            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Tech</div>
              <div className="landing-h2-2">FullStack</div>
            </h2>

            <h2>
              <div className="landing-h2-info">
                Inovator
              </div>

              <div className="landing-h2-info-1">
                Developer
              </div>
            </h2>
          </div>
        </div>

        {children}
      </div>
    </>
  );
};

export default Landing;
