import { useEffect, useRef } from 'react';

const codingSkills = [
  { name: 'React.js', percent: 90 },
  { name: 'Next.js', percent: 85 },
  { name: 'Node.js', percent: 65 },
  { name: 'Express.js', percent: 70 },
  { name: 'Mongo DB', percent: 65 },
  { name: 'My SQL', percent: 60 },

];

const professionalSkills = [
  { name: 'Problem Solving', percent: 85 },
  { name: 'Team Collaboration', percent: 75 },
  { name: 'Communication Skills', percent: 85 },
  { name: 'Project Management', percent: 75 },
  { name: 'Time Management', percent: 80 },
  { name: 'Quick Learning Ability', percent: 88 },


];

const Skills = () => {
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
    <section className="skills" id="skills" ref={sectionRef}>
      <h2 className="heading">
        My <span>Skills</span>
        <span className="animate scroll" style={{ '--i': 1 }}></span>
      </h2>

      <div className="skills-row">
        {/* Coding Skills */}
        <div className="skills-column">
          <h3 className="title">
            Coding Skills
            <span className="animate scroll" style={{ '--i': 2 }}></span>
          </h3>
          <div className="skills-box">
            <div className="skills-content">
              {codingSkills.map((skill) => (
                <div className="progress" key={skill.name}>
                  <h3>
                    {skill.name} <span>{skill.percent}%</span>
                  </h3>
                  <div className="bar">
                    <span style={{ width: `${skill.percent}%` }}></span>
                  </div>
                </div>
              ))}
            </div>
            <span className="animate scroll" style={{ '--i': 3 }}></span>
          </div>
        </div>

        {/* Professional Skills */}
        <div className="skills-column">
          <h3 className="title">
            Professional Skills
            <span className="animate scroll" style={{ '--i': 5 }}></span>
          </h3>
          <div className="skills-box">
            <div className="skills-content">
              {professionalSkills.map((skill) => (
                <div className="progress" key={skill.name}>
                  <h3>
                    {skill.name} <span>{skill.percent}%</span>
                  </h3>
                  <div className="bar">
                    <span style={{ width: `${skill.percent}%` }}></span>
                  </div>
                </div>
              ))}
            </div>
            <span className="animate scroll" style={{ '--i': 6 }}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
