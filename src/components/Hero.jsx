import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";

const Hero = () => {
  // Terminal animation logic
  const terminalCommands = [
    'root@sevil:~$ whoami',
    'amen_allah_amari',
    'root@sevil:~$ cat skills.txt',
    'Web Development | Cybersecurity | Penetration Testing',
    'root@sevil:~$ sudo apt-get install portfolio',
    'Portfolio installed successfully ✓',
    'root@sevil:~$ ./run_portfolio.sh',
    'Loading portfolio...',
  ];
  const [terminalText, setTerminalText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < terminalCommands.length) {
        setTerminalText(prev => prev + terminalCommands[currentIndex] + '\n');
        setCurrentIndex(prev => prev + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, terminalCommands]);

  return (
    <section className="w-full bg-gradient-to-b from-primary to-black-100 py-8 sm:py-14 mb-0">
      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center gap-8 sm:gap-14`}>
        {/* Left: Decorative line and dot */}
        <div className="flex flex-row lg:flex-col justify-center items-center mb-6 lg:mb-0 w-full lg:w-auto">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 lg:sm:h-80 lg:h-40 h-8 sm:h-10 violet-gradient" />
        </div>
        {/* Center: Intro only */}
        <div className="flex flex-col w-full lg:flex-row lg:w-auto gap-8 sm:gap-14">
          <div className="flex flex-col justify-center w-full lg:w-auto">
            <h1 className={`${styles.heroHeadText} text-white mb-2 sm:mb-4 text-[2rem] sm:text-[2.5rem] lg:text-[80px]`}>
              Hi, I'm <span className="text-[#915EFF]">Amen</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 mb-2 sm:mb-4 text-white-100 text-[1rem] sm:text-[1.25rem] lg:text-[30px]`}>
              I do
              <Typewriter
                options={{
                  strings: ["Web Development", "Cybersecurity Enthusiast", "Penetration Testing"],
                  autoStart: true,
                  loop: true,
                  loopCount: Infinity,
                  deleteSpeed: "natural",
                  pauseFor: 1000,
                }}
              />
            </p>
            {/* In Short Overview Card */}
            <div className="bg-black-100 p-4 sm:p-6 rounded-xl shadow-lg mt-4 sm:mt-6 w-full">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">In Short</h2>
              <p className="text-secondary text-sm sm:text-base">
                IT Student passionate about Web Development, Ethical hacking, and Penetration Testing. Eager to join innovative teams and contribute with my skills and drive.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center mt-10">
        <div className="bg-black/80 rounded-lg border border-gray-600 shadow-2xl max-w-lg w-full lg:w-[520px]">
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-gray-800 rounded-t-lg">
            <div className="flex space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-xs sm:text-sm text-gray-400">terminal</div>
          </div>
          <div className="p-2 sm:p-4 h-32 sm:h-48 overflow-hidden">
            <pre className="text-green-400 font-mono text-xs sm:text-sm whitespace-pre-line">
              {terminalText}
              <span className="animate-pulse">|</span>
            </pre>
          </div>
        </div>
        {/* Social Media & Links Card */}
        <div className="flex flex-row flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6 justify-center">
          <a href="https://github.com/sevilworks" target="_blank" rel="noopener noreferrer" className="bg-black-100 p-2 sm:p-3 rounded-xl shadow flex items-center justify-center hover:bg-[#333] transition">
            <img src={githubIcon} alt="GitHub" className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a href="https://linkedin.com/in/sevildoes" target="_blank" rel="noopener noreferrer" className="bg-black-100 p-2 sm:p-3 rounded-xl shadow flex items-center justify-center hover:bg-[#0077b5] transition">
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a href="mailto:esta3969@gmail.com" className="bg-black-100 p-2 sm:p-3 rounded-xl shadow flex items-center justify-center hover:bg-[#c71610] transition">
            <img src={emailIcon} alt="Email" className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          {/* Add more platforms as needed */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
