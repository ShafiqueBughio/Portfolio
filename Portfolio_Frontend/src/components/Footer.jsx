import { useEffect, useRef } from 'react';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const shouldShow =
          window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight;
        footerRef.current.classList.toggle('show-animate', shouldShow);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-text">
        <p>Copyright &copy; 2026 by Shafique-ur-Rehman | All Right Reserved.</p>
        <span className="animate scroll" style={{ '--i': 1 }}></span>
      </div>
      <div className="footer-icontop">
        <a href="#">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
        <span className="animate scroll" style={{ '--i': 3 }}></span>
      </div>
    </footer>
  );
};

export default Footer;
