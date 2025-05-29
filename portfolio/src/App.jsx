import React from "react";

const App = () => (
  <div>
    <header>
      <h1>Hi, I'm Vasiuddin Mohmmed</h1>
      <p>Full Stack JavaScript Developer | Node.js | React</p>
    </header>

    <section id="about">
      <h2>About Me</h2>
      <p>
        I’m a passionate Full Stack JavaScript Developer with experience building scalable web apps using modern technologies like React, Node.js, Express, and MongoDB. I love solving problems and turning ideas into reality through clean, maintainable code.
      </p>
    </section>

    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>🌐 HTML, CSS, JavaScript (ES6+)</li>
        <li>⚛️ React, Redux, Next.js</li>
        <li>🛠️ Node.js, Express.js</li>
        <li>🗃️ MongoDB, Mongoose</li>
        <li>🧪 Jest, Postman</li>
        <li>🔧 Git, GitHub, Vercel</li>
      </ul>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <div>
        <h3>🛒 E-Commerce Store</h3>
        <p>Built with MERN stack, supports user auth, cart, and payments via Stripe.</p>
        <a href="https://github.com/yourusername/ecommerce-store">GitHub</a>
      </div>
      <div>
        <h3>📋 Task Manager API</h3>
        <p>Node.js + MongoDB REST API for managing tasks with JWT auth.</p>
        <a href="https://github.com/yourusername/task-manager-api">GitHub</a>
      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>📧 Email: vasiuddin@example.com</p>
      <p>💼 LinkedIn: <a href="https://linkedin.com/in/vasiuddin">linkedin.com/in/vasiuddin</a></p>
      <p>💻 GitHub: <a href="https://github.com/vasiuddin">github.com/vasiuddin</a></p>
    </section>

    <footer>
      <p>© 2025 Vasiuddin Mohmmed. All rights reserved.</p>
    </footer>
  </div>
);

export default App;
