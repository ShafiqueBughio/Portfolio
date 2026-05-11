import { useEffect, useRef } from 'react';
import logoImg from '../assets/logo.png';
import pageIconImg from '../assets/page_icon.jpg';
import calculatorImg from '../assets/calculator.jfif';
import weatherImg from '../assets/weather logo.jfif';
import ticTacToeImg from '../assets/tic-tac-toe.jfif';
import car_price_predictor from "../assets/car_price_predictor.webp";
import serviceHub from "../assets/Service Hub Logo.png";

const projects = [
  { img: serviceHub, link: 'https://github.com/ShafiqueBughio/Service-Hub', alt: 'Service Hub' },
  { img: logoImg, link: null, alt: 'Ecommerce Website' },
  { img: pageIconImg, link: 'https://edu-university-official.netlify.app/', alt: 'University Website' },
  { img: calculatorImg, link: 'https://shafique-calculator.netlify.app/', alt: 'Calculator' },
  { img: weatherImg, link: 'https://weatherwhiz-iota.vercel.app/', alt: 'Weather App' },
  { img: ticTacToeImg, link: 'https://weatherwhiz-rzj5.vercel.app/', alt: 'Tic Tac Toe' },
  { img: car_price_predictor, link: 'https://github.com/ShafiqueBughio/Car-Price-Prediction', alt: 'Car Price Prediction' },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('show-animate');
        } else {
          sectionRef.current?.classList.remove('show-animate');
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <h2 className="heading">
        My <span>Projects</span>
        <span className="animate scroll" style={{ '--i': 1 }}></span>
      </h2>

      <div className="about-image-container">
        {projects.map((project, index) => (
          project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer" key={index}>
              <div className="about-img">
                <img src={project.img} alt={project.alt} />
                <span className="circle-spin"></span>
                <span className="animate scroll" style={{ '--i': 2 }}></span>
              </div>
            </a>
          ) : (
            <div className="about-img" key={index}>
              <img src={project.img} alt={project.alt} />
              <span className="circle-spin"></span>
              <span className="animate scroll" style={{ '--i': 2 }}></span>
            </div>
          )
        ))}
      </div>

      <div className="about-content">
        <h3>
          About Projects!
          <span className="animate scroll" style={{ '--i': 3 }}></span>
        </h3>
        <p>
          Introducing Shafique ur Rehman, a prodigious frontend web developer and a visionary
          student pursuing a BS in Computer Science at Iqra University. With an artistic mastery
          of HTML, CSS, JavaScript and React.js I have woven digital wonders, from captivating
          ecommerce websites to astonishing clones of renowned platforms like Spotify and Netflix.
          A true virtuoso in the realm of web development, their portfolio resonates with
          innovation and brilliance.
          <span className="animate scroll" style={{ '--i': 4 }}></span>
        </p>
        <div className="btn-box btns">
          <a href="#" className="btn">
            Read More
            <span className="animate scroll" style={{ '--i': 5 }}></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
