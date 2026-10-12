const Resume = () => {
  return (
    <div className="max-w-3xl mx-auto mt-8 border border-gray-800 bg-[#1a1a1a] p-8 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 border-b pb-2">Resume / CV</h2>
      
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-cyan-500">Education</h3>
        <div className="mt-3">
          <p className="font-bold">Bachelor of Science in Information Technology</p>
          <p>Cavite State University - Tanza Campus | 2023 - Present</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-cyan-500">Experience</h3>
        <div className="mt-3">
          <p className="font-bold">Graphic Designer</p>
          <p>Freelance | 2023 - Present</p>
          <ul className="list-disc pl-5 mt-1">
            <li>Designed graphic designs for organizations, churches, and businesses.</li>
            <li>Been part of organizations since my 1st Year College.</li>
          </ul>

       <br></br>

          <p className="font-bold">Student Leadership</p>
          <p>President - Bright and Young Technology Enthusiasts Society | AY 2025-2026, AY 2026-2027</p>
          <ul className="list-disc pl-5 mt-1">
            <li>Leading the organization on its initiatives, and projects for BSIT Students at CvSU - Tanza.</li>
            <li>Now on my second term as a leader.</li>
          </ul>

        <br></br>

        <p className="font-bold">Graphic Designer</p>
          <p>Freelance | 2023 - Present</p>
          <ul className="list-disc pl-5 mt-1">
            <li>Designed graphic designs for organizations, churches, and businesses.</li>
            <li>Been part of organizations since my 1st Year College.</li>
          </ul>

        </div>

      </div>

    </div>
  );
};

export default Resume;