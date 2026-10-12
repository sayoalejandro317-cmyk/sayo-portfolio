import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields before submitting.');
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="max-w-lg mx-auto mt-8 border border-gray-800 bg-[#1a1a1a] p-8 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <label className="flex flex-col font-semibold">
          Name
          <input 
            type="text" 
            className="border p-2 rounded mt-1 font-normal" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="flex flex-col font-semibold">
          Email
          <input 
            type="email" 
            className="border p-2 rounded mt-1 font-normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="flex flex-col font-semibold">
          Message
          <textarea 
            className="border p-2 rounded mt-1 font-normal h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>

        <button 
          type="submit" 
          className="bg-cyan-600 text-white py-3 rounded font-bold hover:bg-cyan-400 transition mt-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;