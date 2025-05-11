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
    label: "INT",
    value: 95
  }, {
    label: "DEX",
    value: 85
  }, {
    label: "WIS",
    value: 90
  }, {
    label: "CHA",
    value: 80
  }];
  return <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-pixel text-gameboy-dark dark:text-gameboy-accent mb-12 text-center">
          PLAYER STATS
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Character Card */}
          <div className="flex-1 game-card">
            <h3 className="font-pixel text-xl text-gameboy-dark dark:text-gameboy-accent mb-4">CHARACTER INFO</h3>
            
            <div className="mb-8">
              <p className="font-pixel text-sm text-gameboy-dark dark:text-gameboy-light mb-4">
                NAME: TANAY GAWADE
              </p>
              <p className="font-pixel text-sm text-gameboy-dark dark:text-gameboy-light mb-4">
                CLASS: AI SPECIALIST
              </p>
              <p className="font-pixel text-sm text-gameboy-dark dark:text-gameboy-light mb-4">
                LEVEL: MASTER'S DEGREE
              </p>
            </div>

            <h4 className="font-pixel text-sm text-gameboy-dark dark:text-gameboy-accent mb-2">ATTRIBUTES</h4>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(stat => <div key={stat.label} className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span className="font-pixel text-xs text-gameboy-dark dark:text-gameboy-light">{stat.label}</span>
                    <span className="font-pixel text-xs text-gameboy-dark dark:text-gameboy-light">{stat.value}/100</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{
                  width: `${stat.value}%`
                }}></div>
                  </div>
                </div>)}
            </div>

            <h4 className="font-pixel text-sm text-gameboy-dark dark:text-gameboy-accent mb-2">EQUIPMENT</h4>
            <ul className="font-pixel text-xs text-gameboy-dark dark:text-gameboy-light space-y-1 mb-4">
              <li>- MSc IN ARTIFICIAL INTELLIGENCE [YESHIVA UNIVERSITY]</li>
              <li>- BSc IN ELECTRONICS ENGINEERING [UNIVERSITY OF MUMBAI]</li>
            </ul>

            <h4 className="font-pixel text-sm text-gameboy-dark dark:text-gameboy-accent mb-2">SPECIAL ABILITIES</h4>
            <ul className="font-pixel text-xs text-gameboy-dark dark:text-gameboy-light space-y-1">
              <li>- Segmentation & Image Processing    Proficiency </li>
              <li>- Time-Series Forecasting</li>
              <li>- Generative AI & LLMs </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="flex-1 game-card">
            <h3 className="font-pixel text-xl text-gameboy-dark dark:text-gameboy-accent mb-6">SKILL TREE</h3>

            <div className="space-y-6">
              {skills.map(skill => <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-pixel text-sm text-gameboy-dark dark:text-gameboy-light">{skill.name}</span>
                    <span className="font-pixel text-sm text-gameboy-dark dark:text-gameboy-light">LVL {Math.floor(skill.level / 10)}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{
                  width: `${skill.level}%`
                }}></div>
                  </div>
                </div>)}
            </div>

            <div className="mt-8 p-4 border-2 border-dashed border-gameboy-dark dark:border-gameboy-accent">
              <h4 className="font-pixel text-sm text-gameboy-dark dark:text-gameboy-accent mb-2">BIO</h4>
              <p className="text-gameboy-dark dark:text-gameboy-light text-sm">
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