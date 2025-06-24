import React from 'react';

export default function Home() {
    return (
        <div className="font-sans bg-gray-100 min-h-screen text-gray-800">
            <header className="bg-green-600 text-white text-center p-6">
                <h1 className="text-4xl font-bold">Vasiuddin Mohammed</h1>
                <p className="text-xl mt-2">Full-Stack Web Developer | Aspiring Data Scientist</p>
            </header>

            <nav className="flex justify-center bg-gray-800 text-white">
                <a href="#about" className="p-4 hover:bg-green-600">About Me</a>
                <a href="#skills" className="p-4 hover:bg-green-600">Skills</a>
                <a href="#experience" className="p-4 hover:bg-green-600">Experience</a>
                <a href="#education" className="p-4 hover:bg-green-600">Education</a>
                <a href="#projects" className="p-4 hover:bg-green-600">Projects</a>
                <a href="#contact" className="p-4 hover:bg-green-600">Contact</a>
            </nav>

            <main className="p-8 space-y-16">
                <section id="about">
                    <h2 className="text-3xl font-semibold text-green-600 mb-4">About Me</h2>
                    <p>Full-Stack Developer with 4 years of experience building scalable web applications. Currently focused on Data Science, Machine Learning, and AI using Python. Fluent in English and intermediate in German.</p>
                </section>

                <section id="skills">
                    <h2 className="text-3xl font-semibold text-green-600 mb-4">Technical Skills</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Frontend:</strong> JavaScript, TypeScript, React, Next.js, Vue.js, Tailwind CSS, Ant Design</li>
                        <li><strong>Backend:</strong> Node.js, Nest.js, Express.js, TypeORM, Mongoose, REST API, Apollo GraphQL</li>
                        <li><strong>Databases:</strong> MongoDB, PostgreSQL, MySQL, CockroachDB</li>
                        <li><strong>DevOps:</strong> Docker, Docker Compose, Git, GitHub, Jira</li>
                        <li><strong>Data Science:</strong> Python, Pandas, NumPy, Scikit-learn, TensorFlow, Keras, Jupyter</li>
                    </ul>
                </section>

                <section id="experience">
                    <h2 className="text-3xl font-semibold text-green-600 mb-4">Experience</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold">Academy Neue Fische (2025 - Present)</h3>
                            <ul className="list-disc list-inside ml-4">
                                <li>Housing Data EDA: Identified key factors increasing property values by 45%.</li>
                                <li>Tourism ML Model: Predicted tourist behavior with F1-score of 0.79.</li>
                                <li>Alzheimer's Detection: CNN classifier with 99% validation accuracy.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">Autohaus Royal GmbH (2024)</h3>
                            <ul className="list-disc list-inside ml-4">
                                <li>Developed microservices with Nest.js, TypeORM, Docker Compose.</li>
                                <li>Created high-performance UI components with React, Next.js, Ant Design.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">elsweyer+hoffmann GmbH (2022 - 2023)</h3>
                            <ul className="list-disc list-inside ml-4">
                                <li>Built web apps handling 100K+ users/month with React, GraphQL.</li>
                                <li>Improved frontend performance by 30% and usability by 40%.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">Humachine Technologies (2020 - 2021)</h3>
                            <ul className="list-disc list-inside ml-4">
                                <li>Developed cross-platform mobile apps using Flutter and Dart.</li>
                                <li>Improved web app performance and optimized build processes.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="education">
                    <h2 className="text-3xl font-semibold text-green-600 mb-4">Education & Certifications</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>MBA in Technology Management (2013-2016)</li>
                        <li>B.Sc. in Computer Science (2007-2013)</li>
                        <li>ISTQB CTFL v4.0 (2024)</li>
                        <li>UX Design Foundations (2022)</li>
                        <li>React, Node.js, MongoDB, Frontend Development Certifications</li>
                    </ul>
                </section>

                <section id="projects">
                    <h2 className="text-3xl font-semibold text-green-600 mb-4">Projects</h2>
                    <p>More project details available on my <a href="https://github.com/vasiuddin7733" target="_blank" className="text-blue-600 underline">GitHub</a>.</p>
                </section>

                <section id="contact">
                    <h2 className="text-3xl font-semibold text-green-600 mb-4">Contact</h2>
                    <p>Email: <a href="mailto:vasiuddin.mohammed1@gmail.com" className="text-blue-600 underline">vasiuddin.mohammed1@gmail.com</a></p>
                    <p>Phone: +49 17675865067</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/vasiuddin7733/" target="_blank" className="text-blue-600 underline">vasiuddin7733</a></p>
                </section>
            </main>

            <footer className="text-center p-4 bg-gray-800 text-white mt-12">
                <p>&copy; 2025 Vasiuddin Mohammed</p>
            </footer>
        </div>
    );
}
