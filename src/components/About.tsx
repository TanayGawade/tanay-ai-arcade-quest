
import React from "react";
const About: React.FC = () => {
  const skills = [{
    name: "Machine Learning",
    level: 95
  }, {
    name: "Deep Learning",
    level: 90
  }, {
    name: "Natural Language Processing",
    level: 85
  }, {
    name: "Computer Vision",
    level: 80
  }, {
    name: "Data Analytics",
    level: 92
  }];
  const stats = [{
    label: "Technical Expertise",
    value: 95
  }, {
    label: "Problem-Solving",
    value: 90
  }, {
    label: "Adaptability",
    value: 85
  }, {
    label: "Passion",
    value: 98
  }];
  return <section id="about" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-pixel text-gameboy-dark dark:text-gameboy-accent mb-8 sm:mb-12 text-center">
          PLAYER STATS
        </h2>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
          {/* Character Card */}
          <div className="flex-1 game-card mb-6 md:mb-0">
            <h3 className="font-pixel text-lg sm:text-xl text-gameboy-dark dark:text-gameboy-accent mb-4">CHARACTER INFO</h3>
            
            <div className="mb-6 sm:mb-8">
              <p className="font-pixel text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-light mb-3 sm:mb-4">
                NAME: TANAY GAWADE
              </p>
              <p className="font-pixel text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-light mb-3 sm:mb-4">
                CLASS: AI SPECIALIST
              </p>
              <p className="font-pixel text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-light mb-3 sm:mb-4">
                LEVEL: MASTER'S DEGREE
              </p>
            </div>

            <h4 className="font-pixel text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-accent mb-2">ATTRIBUTES</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {stats.map(stat => <div key={stat.label} className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span className="font-pixel text-xs text-gameboy-dark dark:text-gameboy-light">{stat.label}</span>
                  </div>
                  <div className="progress-bar relative">
                    <div className="progress-fill flex items-center justify-center" style={{
                  width: `${stat.value}%`, height: '100%'}}>
                      <span className="font-pixel text-xs text-gameboy-dark dark:text-gameboy-light absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">{stat.value}/100</span>
                    </div>
                  </div>
                </div>)}
            </div>

            <h4 className="font-pixel text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-accent mb-2">EQUIPMENT</h4>
            <ul className="font-pixel text-xs text-gameboy-dark dark:text-gameboy-light space-y-1 mb-4">
              <li>- MSc IN ARTIFICIAL INTELLIGENCE [YESHIVA UNIVERSITY]</li>
              <li>- BSc IN ELECTRONICS ENGINEERING [UNIVERSITY OF MUMBAI]</li>
            </ul>

            <h4 className="font-pixel text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-accent mb-2">SPECIAL ABILITIES</h4>
            <ul className="font-pixel text-xs text-gameboy-dark dark:text-gameboy-light space-y-1">
              <li>- Segmentation & Image Processing    Proficiency </li>
              <li>- Time-Series Forecasting</li>
              <li>- Generative AI & LLMs </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="flex-1 game-card">
            <h3 className="font-pixel text-lg sm:text-xl text-gameboy-dark dark:text-gameboy-accent mb-5 sm:mb-6">SKILL TREE</h3>

            <div className="space-y-4 sm:space-y-6">
              {skills.map(skill => <div key={skill.name} className="mb-3 sm:mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-pixel text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-light">{skill.name}</span>
                    <span className="font-pixel text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-light">LVL {Math.floor(skill.level / 10)}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{
                  width: `${skill.level}%`
                }}></div>
                  </div>
                </div>)}
            </div>

            <div className="mt-6 sm:mt-8 p-3 sm:p-4 border-2 border-dashed border-gameboy-dark dark:border-gameboy-accent">
              <h4 className="font-pixel text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-accent mb-2">BIO</h4>
              <p className="text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-light">
                Tanay has been on an epic quest to master the art of Artificial Intelligence. 
                After completing his training at the University of Mumbai, he embarked on a journey to 
                Yeshiva University where he gained advanced AI powers. Now he uses these abilities to 
                tackle complex challenges in machine learning and AI development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
