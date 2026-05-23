import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "AI Machine Marketplace Assistant",
    category: "AI / Full Stack",
    tech: "FastAPI, OpenAI, MongoDB, LangChain",
    image: "/images/marketplace.png",
  },
  {
    id: "02",
    title: "Car Rental Management System",
    category: "Full Stack Web App",
    tech: "HTML, CSS, JavaScript, Bootstrap",
    image: "/images/carrental.webp",
  },
  {
    id: "03",
    title: "Driver Behaviour Monitoring System",
    category: "Robotics + AI",
    tech: "Arduino, MPU6050, Face Recognisation",
    image: "/images/driver.webp",
  },
  {
    id: "04",
    title: "Food Delivery Application",
    category: "UI/UX",
    tech: "Figma + Canva",
    image: "/images/food.webp",
  },
  {
    id: "05",
    title: "Student Ease Mobile App",
    category: "Frontend Development",
    tech: "HTML, CSS, JavaScript",
    image: "/images/se.webp",
  },
];

const Work = () => {
  useEffect(() => {
    let timeline: gsap.core.Timeline | null = null;

    const buildScroll = () => {
      const box = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");
      if (!box.length || !container) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding =
        parseInt(window.getComputedStyle(box[0]).paddingLeft, 10) || 0;

      const translateX = Math.max(
        0,
        rect.width * box.length - (rectLeft + parentWidth) + padding / 2
      );

      timeline?.kill();
      ScrollTrigger.getById("work")?.kill();

      if (window.innerWidth <= 1024) {
        gsap.set(".work-flex", { x: 0 });
        return;
      }

      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${translateX}`,
          scrub: true,
          pin: true,
          id: "work",
          invalidateOnRefresh: true,
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        ease: "none",
      });
    };

    buildScroll();
    window.addEventListener("resize", buildScroll);

    return () => {
      window.removeEventListener("resize", buildScroll);
      timeline?.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.tech}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;