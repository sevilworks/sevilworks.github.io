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
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[-40px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center gap-10`}>
        {/* Left: Decorative line and dot */}
        <div className="flex flex-row lg:flex-col justify-center items-center mb-6 lg:mb-0 w-full lg:w-auto">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 lg:sm:h-80 lg:h-40 h-10 violet-gradient" />
        </div>
        {/* Center: Text */}
        <div className="flex flex-col justify-center w-full lg:w-auto">
          <h1 className={`${styles.heroHeadText} text-white mb-4`}>
            Hi, I'm <span className="text-[#915EFF]">Amen</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 mb-4 text-white-100`}>
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
          <div className="bg-black-100 p-6 rounded-xl shadow-lg mt-6 w-full">
            <h2 className="text-xl font-bold text-white mb-2">In Short</h2>
            <p className="text-secondary text-base">
              IT Student passionate about Web Development, Ethical hacking, and Penetration Testing. Eager to join innovative teams and contribute with my skills and drive.
            </p>
          </div>
        </div>
        {/* Right: Terminal only (no card, no 3D canvas) */}
        <div className="flex-1 flex flex-col justify-center items-center w-full lg:w-auto mt-8 lg:mt-0">
          <div className="bg-black/80 rounded-lg border border-gray-600 shadow-2xl max-w-lg w-full lg:w-[520px]">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-sm text-gray-400">terminal</div>
            </div>
            <div className="p-4 h-48 overflow-hidden">
              <pre className="text-green-400 font-mono text-sm whitespace-pre-line">
                {terminalText}
                <span className="animate-pulse">|</span>
              </pre>
            </div>
          </div>
          {/* Social Media & Links Card */}
          <div className="flex flex-row flex-wrap gap-4 mt-6 justify-center">
            <a href="https://github.com/sevilworks" target="_blank" rel="noopener noreferrer" className="bg-black-100 p-3 rounded-xl shadow flex items-center justify-center hover:bg-[#333] transition">
              <img src={githubIcon} alt="GitHub" className="w-7 h-7" />
            </a>
            <a href="https://linkedin.com/in/sevildoes" target="_blank" rel="noopener noreferrer" className="bg-black-100 p-3 rounded-xl shadow flex items-center justify-center hover:bg-[#0077b5] transition">
              <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7" />
            </a>
            <a href="mailto:esta3969@gmail.com" className="bg-black-100 p-3 rounded-xl shadow flex items-center justify-center hover:bg-[#c71610] transition">
              <img src={emailIcon} alt="Email" className="w-7 h-7" />
            </a>
            {/* Add more platforms as needed */}
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
