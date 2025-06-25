export default function Home() {
  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-8">
      <h1 className="text-4xl font-bold text-green-700 text-center">Vasiuddin Mohammed</h1>
      <p className="text-center text-lg">Full-Stack Web Developer | Aspiring Data Scientist</p>

      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Professional Summary</h2>
        <p>Full-Stack Developer with 4 years of experience building scalable, maintainable web applications. Passionate about clean code, performance, and expanding skills in Data Science and AI using Python.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Technical Skills</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Frontend: JavaScript, TypeScript, React, Next.js, Vue.js, Tailwind CSS</li>
          <li>Backend: Node.js, Nest.js, Express.js, TypeORM, GraphQL</li>
          <li>Databases: MongoDB, PostgreSQL, MySQL, CockroachDB</li>
          <li>DevOps: Docker, Docker Compose, Git, GitHub, Jira</li>
          <li>Data Science: Python, Pandas, NumPy, Scikit-learn, TensorFlow, Keras</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Contact</h2>
        <p>Email: <a href="mailto:vasiuddin.mohammed1@gmail.com" className="text-blue-600 underline">vasiuddin.mohammed1@gmail.com</a></p>
        <p>Phone: +49 17675865067</p>
        <p>GitHub: <a href="https://github.com/vasiuddin7733" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">vasiuddin7733</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/vasiuddin7733/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">vasiuddin7733</a></p>
      </section>
    </div>
  );
}
