import { motion } from 'framer-motion';
import React from 'react';
import { experiences, technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      {/* Divider for mobile at top of About */}
      <div className="block lg:hidden mt-10">
        <hr className="border-secondary border-t-2 mb-8" />
      </div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      {/* Responsive: Work Experience & Known Frameworks side by side */}
      <div className="mt-10 flex flex-col md:flex-row md:items-start gap-10">
        {/* Work Experience */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-xl font-bold text-white mb-4">Work Experience</h3>
          <ul className="space-y-4">
            {experiences.map((exp, idx) => (
              <li key={idx} className="bg-black-100 p-4 rounded-xl shadow">
                <div className="font-bold text-white">{exp.title}</div>
                <div className="text-secondary text-sm mb-1">{exp.company_name}</div>
                <div className="text-xs text-gray-400 mb-2">{exp.date}</div>
                <ul className="list-disc ml-5 text-secondary text-sm">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        {/* Known Frameworks & Technologies */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-xl font-bold text-white mb-4">Frameworks & Technologies</h3>
          <ul className="flex flex-wrap gap-4">
            {technologies.map((tech, idx) => (
              <li key={idx} className="flex items-center gap-2 bg-black-100 p-2 rounded shadow">
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                <span className="text-secondary text-sm">{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
