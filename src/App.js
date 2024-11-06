import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './App.css';

const App = () => (
  <div>
    <section id="hero">
      <h1>Hi, I'm Vidhi</h1>
      <p>A student learning coding</p>
      <a href="#about" className="hero-button">Learn More About Me</a>
    </section>

    <section id="about">
      <h2>About Me</h2>
      <p>I'm a beginner in coding and am hoping to go into physics!</p>
    </section>

    <section id="skills">
      <h2>My Skills</h2>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML</li>
        <li>Typescript</li>
        <li>Python</li>
      </ul>
    </section>

    <section id="contact">
      <h2>Contact Me</h2>
      <p>Interested in collaborating? Feel free to reach out.</p>
      <form action="vidhiojha1@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>

    <footer>
      <p>Connect with me:</p>
      <a href="https://github.com/VidhiOOO" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/vidhi-ojha-08063b312/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="mailto:vidhiojha1@gmail.com"><FaEnvelope /></a>
    </footer>
  </div>
);
export default App;
