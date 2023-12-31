import { skillsData } from "../data/SkillsData";
const Skills = () => {
  return (
    <>
      <h1 className="mb-6 mt-20 text-5xl font-bold">{skillsData.title}</h1>
      <div className="skillsSection mb-6">
        <div className="skills-js">
          <h1 className="mb-6 lg:text-4xl text-indigo-700 dark:text-indigo-200  font-medium max-lg:text-3xl max-lg:text-center">
            {skillsData.jsTitle}
          </h1>
          <p>{skillsData.paragraph}</p>
        </div>
        <div className="skills-react mx-6">
          <h1 className="mb-6 lg:text-4xl text-indigo-700 dark:text-indigo-200 font-medium max-lg:text-3xl max-lg:text-center">
            {skillsData.reactTitle}
          </h1>
          <p>{skillsData.paragraph}</p>
        </div>
        <div className="skills-node ">
          <h1 className="mb-6 lg:text-4xl text-indigo-700 dark:text-indigo-200 font-medium max-lg:text-3xl max-lg:text-center">
            {skillsData.nodeTitle}
          </h1>
          <p>{skillsData.paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
