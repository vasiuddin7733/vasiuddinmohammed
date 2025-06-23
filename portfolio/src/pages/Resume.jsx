import React from "react";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-800">My Resume</h1>
        <a
          href="/vasiuddinmohammed/Vasiuddin_Mohammed_CV.pdf"
          download
          className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          <Download className="mr-2" size={18} /> Download PDF
        </a>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Professional Summary</h2>
        <p className="text-gray-600">
          Full-Stack Developer with 4+ years of experience in scalable web & mobile app development
          using React.js, Node.js, NestJS, Vite.js, and Tailwind CSS. Currently focusing on Machine
          Learning and AI projects at Neue Fische.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Technical Skills</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          {[
            "React.js", "Next.js", "Node.js", "NestJS", "Tailwind CSS", "Vite", "TypeScript",
            "Redux", "GraphQL", "MongoDB", "PostgreSQL", "Docker", "Jest", "Cypress"
          ].map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Autohaus Royal GmbH (2022–2023)</h3>
            <p className="text-gray-600">
              Built scalable automotive systems using microservices, React, NestJS, TypeORM,
              PostgreSQL. Developed 15+ APIs and UIs with performance focus.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">elsweyer+hoffmann GmbH (2020–2021)</h3>
            <p className="text-gray-600">
              Created education and event platforms using React, GraphQL, Tailwind CSS. Projects
              include Seidual, Ausbildungplatz, Virtual Event.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Humachine Tech (2019–2020)</h3>
            <p className="text-gray-600">
              Developed mobile apps in Flutter and web apps in React/Node. Projects included
              Zuhauseisthier, Elearning Admin, Rental GraphQL.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Education</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Neue Fische Bootcamp, Data Science & AI (2025 – Ongoing)</li>
          <li>MBA in Technology Management – University College (2013–2016)</li>
          <li>BSc in Computer Science – Kakatiya University (2010–2013)</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
