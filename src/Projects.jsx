import { useState } from 'react';

const ProjectCard = ({ title, shortDesc, longDesc, link }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border border-gray-800 p-6 mb-4 rounded-lg shadow-sm bg-[#1a1a1a]">
      
      <h3 className="text-2xl font-bold text-white">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-cyan-400 hover:underline transition-colors"
        >
          {title} ➚
        </a>
      </h3>
      
      <p className="text-gray-400 mt-2">{shortDesc}</p>
      
      <button
        className="mt-4 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-400 transition"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Details' : 'View More'}
      </button>

      {showDetails && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-gray-300">{longDesc}</p>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-white border-b border-gray-800 pb-2">
        My Work Samples
      </h2>
      
      {/* 3. Pass the URL into the new link="..." prop */}
      <ProjectCard 
        title="Calculator App" 
        link="https://calculator-website-sayo.vercel.app/"
        shortDesc="A web-based calculator." 
        longDesc="Built using ReactJS. It handles basic arithmetic operations like addition, subtraction, multiplication, and division." 
      />
      
      <ProjectCard 
        title="'To-do Na 'To!' - A to-do list." 
        link="https://todo-nato-list.vercel.app/"
        shortDesc="Simple to-do list." 
        longDesc="Built using ReactJS. A simple to do list for your web browser for small tasks." 
      />
    </div>
  );
};

export default Projects;