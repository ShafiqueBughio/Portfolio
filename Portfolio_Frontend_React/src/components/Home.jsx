import { useEffect, useRef } from 'react';
// Replace new_pic.jpg with new_pic.png (transparent bg) from remove.bg
import profileImg from '../assets/new_pic.png';
import cvPdf from '../assets/Shafique u Rehman CV.pdf';
import { FaGithub } from "react-icons/fa";

const Home = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Trigger show-animate on mount
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.classList.add('show-animate');
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home show-animate" id="home" ref={sectionRef}>
      {/* Hexagon with cyan fill + person image on top */}
      <div className="home-img-hex">
        {/* Wrapper gets glow filter — SVG shape so shadow is NOT cut off */}
        <div className="hex-bg-wrapper">
          {/* Rounded hexagon SVG — path with rounded corners */}
          <svg
            className="hex-shape"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 8
                 Q104 8 107 10
                 L188 55
                 Q192 57 192 62
                 L192 138
                 Q192 143 188 145
                 L107 190
                 Q104 192 100 192
                 Q96 192 93 190
                 L12 145
                 Q8 143 8 138
                 L8 62
                 Q8 57 12 55
                 L93 10
                 Q96 8 100 8 Z"
              fill="#00abf0"
            />
          </svg>
        </div>
        {/* Person image sits centered on top, overflows hexagon */}
        <img src={profileImg} alt="Shafique ur Rehman" className="hex-photo" />
      </div>

      <div className="home-content">

        <h1>
          Hi, I&apos;m <span>Shafique</span>
          <span className="animate" style={{ '--i': 2 }}></span>
        </h1>
        <div className="text-animate">
          <h3>MERN Developer</h3>
          <span className="animate" style={{ '--i': 3 }}></span>
        </div>
        <p>
          Hello there! I am Shafique-ur-Rehman, a passionate and skilled MERN stack developer
          with expertise in MongoDB, Express.js, React.js, Next.js and Node.js. Over the years, I have
          honed my skills and channeled my creativity into building dynamic, responsive, and
          full-stack applications. My portfolio is a testament to my dedication and proficiency
          in both frontend and backend development, where I seamlessly integrate modern
          technologies to craft exceptional user experiences.
          <span className="animate" style={{ '--i': 4 }}></span>
        </p>
        <div className="btn-box">
          <a href="#contact" className="btn">Hire Me</a>
          <a href={cvPdf} className="btn" download>My Resume</a>
          <span className="animate" style={{ '--i': 5 }}></span>
        </div>
      </div>

      <div className="home-sci">
        <a href="https://github.com/ShafiqueBughio/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
          <a href="https://www.linkedin.com/in/shafique-ur-rehman-5218b224b/" target="_blank" rel="noreferrer">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="bx bxl-twitter"></i>
        </a>
        <span className="animate" style={{ '--i': 6 }}></span>
      </div>

      <div className="Home-imgHover"></div>
    </section>
  );
};

export default Home;
