import { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  // Default: dark mode. Persist in localStorage.
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  // Apply theme to <html> element
  useEffect(() => {
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);

      const sections = document.querySelectorAll('section');
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });

      setMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`header${sticky ? ' sticky' : ''}`}>
      <a href="#" className="logo">
        <span id="my">Port</span>folio.
        <span className="animate" style={{ '--i': 1 }}></span>
      </a>

      <div
        className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}
        id="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="animate" style={{ '--i': 1 }}></span>
      </div>

      <nav className={`navbar${menuOpen ? ' active' : ''}`}>
        <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={handleNavClick}>Home</a>
        <a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={handleNavClick}>Education</a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={handleNavClick}>Skill</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={handleNavClick}>Projects</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={handleNavClick}>Contact</a>

        {/* Theme Toggle — last in navbar */}
        <button
          className="theme-toggle"
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle theme"
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <i className={`bx ${isDark ? 'bx-sun' : 'bx-moon'}`}></i>
        </button>

        <span className="active-nav"></span>
        <span className="animate" style={{ '--i': 2 }}></span>
      </nav>
    </header>
  );
};

export default Header;
