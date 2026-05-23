import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">

                <h4>Frontend Developer Intern</h4>
                <h5>Bussibees</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Frontend Developer Intern at Bussibees, building real-world web projects while mastering HTML, CSS, JavaScript, and modern UI design.
              Passionate about creating fast, responsive, and visually impactful digital experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Intern</h4>
                <h5>Euonus IT Private Limited</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            UI/UX Design Intern at Euonus IT Private Limited, crafting modern and user-focused digital experiences.
            Currently building real-world projects, mastering design thinking, and transforming ideas into impactful interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>HG TECHNOLOGIES</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              AI/ML Intern at HG Technologies, building real-world Machine Learning & Deep Learning projects while exploring the future of Agentic AI, Generative AI, and intelligent automation. Passionate about transforming ideas into impactful AI-driven solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
