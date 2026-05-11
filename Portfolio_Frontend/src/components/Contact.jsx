import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Local dev: http://localhost:4000, Production: Vercel backend URL
    const API_URL = import.meta.env.VITE_API_URL || 'https://portfoliobackend-three.vercel.app';

    try {
      const response = await axios.post(
        `${API_URL}/hire`,
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        toast.success('Message sent successfully!', {
          style: { background: 'green', color: '#fff' },
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (error) {
      toast.error('Error: ' + (error.message || 'Something went wrong'), {
        style: { background: 'red', color: '#fff' },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <h2 className="heading">
        Contact <span>Me!</span>
        <span className="animate scroll" style={{ '--i': 1 }}></span>
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className="focus"></span>
          </div>
          <span className="animate scroll" style={{ '--i': 3 }}></span>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input
              type="number"
              placeholder="Mobile Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Email Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <span className="focus"></span>
          </div>
          <span className="animate scroll" style={{ '--i': 5 }}></span>
        </div>

        <div className="textarea-field">
          <textarea
            cols="30"
            rows="10"
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <span className="focus"></span>
          <span className="animate scroll" style={{ '--i': 7 }}></span>
        </div>

        <div className="btn-box btns">
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
          <span className="animate scroll" style={{ '--i': 9 }}></span>
        </div>
      </form>
    </section>
  );
};

export default Contact;
