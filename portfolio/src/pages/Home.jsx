// File: src/pages/Home.tsx

import { motion } from "framer-motion";
import Button  from "@/components/ui/Button";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Vasiuddin Mohammed
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6">
          Full-Stack Developer | React, Node.js, TypeScript | Berlin
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/vasiuddin7733"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/vasiuddin7733/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
