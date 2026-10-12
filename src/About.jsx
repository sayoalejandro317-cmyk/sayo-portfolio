const About = () => {
  return (
    <div className="max-w-3xl mx-auto border border-gray-800 p-6 mb-4 rounded-lg shadow-sm bg-[#1a1a1a]">
      <h2 className="text-3xl font-bold  mb-4">About Me</h2>
      
      <h3 className="text-xl font-semibold mt-4 text-cyan-500">Background</h3>
      <p className=" mt-2">
        I am currently studying computer science with a focus on web development. 
        I enjoy building things from scratch and solving logic problems.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-cyan-500">Skills & Interests</h3>
      <ul className="list-disc pl-5 mt-2">
        <li>Project Management and Leadership</li>
        <li>Graphic Designer</li>
        <li>HTML, CSS, and basic JavaScript (still mastering)</li>
        <li>Learning ReactJS and Tailwind CSS (a noob learner)</li>
        <li>UI/UX Design principles</li>
      </ul>
    </div>

    
  );
};

export default About;