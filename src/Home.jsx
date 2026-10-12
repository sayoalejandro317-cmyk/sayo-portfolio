import sayo from '/src/sayo.png'

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center max-w-5xl mx-auto mt-20 p-6 text-gray-300">
      
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
        <img 
          src={sayo} 
          alt="Alejandro Sayo" 
          className="w-64 md:w-[350px] object-cover rounded-md" 
        />
      </div>

      <div className="flex flex-col text-left">
        <h1 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-white tracking-wide">
          Alejandro Sayo
        </h1>
        
        <p className="text-lg leading-relaxed text-gray-300 max-w-lg mb-6">
          Greetings, I am Alejandro Sayo. You can call me Ale or Andrew.
        </p>

        <p className="text-lg leading-relaxed text-gray-300 max-w-lg mb-6">
          Currently a 3rd year BSIT Student from Cavite State University - Tanza. 
        </p>

        <p className="text-lg leading-relaxed text-gray-300 max-w-lg mb-8">
          Right now, I am just about to learn coding very seriously. On my 3rd year. Too late I think. But let us see what the Lord can do!
        </p>

    
        <div className="flex flex-wrap gap-4 font-mono text-sm text-gray-400">
          <a href="https://www.linkedin.com/feed/" target="_blank" className="hover:text-white transition-colors">LinkedIn ➚</a>
          <a href="https://www.facebook.com/sayo.alejandro.dc" target="_blank" className= "hover:text-white transition-colors">Facebook ➚</a>
        </div>
      </div>
      
    </div>
  );
};

export default Home;