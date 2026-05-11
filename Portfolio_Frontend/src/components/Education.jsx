import { useEffect, useRef } from 'react';

const Education = () => {
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
    <section className="education" id="education" ref={sectionRef}>
      <h2 className="heading">
        My <span>Journey</span>
        <span className="animate scroll" style={{ '--i': 1 }}></span>
      </h2>

      <div className="education-row">
        {/* Education Column */}
        <div className="education-column">
          <h3 className="title">
            Education
            <span className="animate scroll" style={{ '--i': 2 }}></span>
          </h3>
          <div className="education-box">

                        <div className="education-content">
              <div className="content">
                <div className="years">
                  <i className="bx bxs-calendar"></i>2022-2026
                </div>
                <h3>BS Computer Science - IQRA University</h3>
                <p>
                  Embarking on my bachelor&apos;s journey at Iqra University in October 2022, I am
                  currently in my Final semester, maintaining a commendable CGPA of 3.2, Throughout my
                  academic experience, I have embraced every challenge and opportunity with enthusiasm
                  and dedication.
                </p>
              </div>
            </div>

                        <div className="education-content">
              <div className="content">
                <div className="years">
                  <i className="bx bxs-calendar"></i>2020-2021
                </div>
                <h3>Intermediate-Mehran College</h3>
                <p>
                  In 2022, I completed my intermediate education at Mehran degree College, achieving an A1
                  grade. Empowered with knowledge and guided by mentors, I cherish the moments of
                  growth and embrace the future&apos;s boundless possibilities.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="years">
                  <i className="bx bxs-calendar"></i>2019-2020
                </div>
                <h3>Matriculation-Rashid Morai</h3>
                <p>
                  In 2020, I attained outstanding success in Matriculation from Rashid Morai School, earning an A-grade, which reflects my dedication, hard work, and strong commitment to education.
                </p>
              </div>
            </div>
            <span className="animate scroll" style={{ '--i': 3 }}></span>
          </div>
        </div>

        {/* Experience Column */}
        <div className="education-column">
          <h3 className="title">
            Experience
            <span className="animate scroll" style={{ '--i': 5 }}></span>
          </h3>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="years">
                  <i className="bx bxs-calendar"></i>April 2026 - Present
                </div>
                <h3>Frontend Developer (Bidec Solutions)</h3>
                <p>
                  I am currently working as a Frontend Developer at Bidecsol Solutions since April 2026, where I develop modern and responsive web applications using React.js and Next.js while focusing on creating efficient, user-friendly, and scalable frontend solutions.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="years">
                  <i className="bx bxs-calendar"></i>April 2025 - February 2026
                </div>
                <h3>React Js Developer (Sands Tech)</h3>
                <p>
                 I joined Sandstech as a React.js Intern in February 2025 and successfully completed a 3-month internship. Afterward, I was hired as a full-time React.js Developer, where I worked on SaaS web applications using React.js, Next.js, and Tailwind CSS.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="years">
                  <i className="bx bxs-calendar"></i>March 2024- May 2024
                </div>
                <h3>Frontend Developer Intern (360 Xpert Solutions)</h3>
                <p>
                  I joined 360XpertSolutions as a Frontend Intern in March 2024, where I worked with React.js and developed both simple and advanced-level projects while successfully completing a 3-month internship program.
                </p>
              </div>
            </div>

            <span className="animate scroll" style={{ '--i': 6 }}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
