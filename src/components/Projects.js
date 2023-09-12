import { React, useContext } from "react";
import { ProjectsData } from "../data/ProjectsData";
import { websiteContext } from "../contexts/websiteContext";

export default function Projects() {
  const { language } = useContext(websiteContext);

  return (
    <div className="projectsSection">
      <h1 className="mb-6 text-5xl font-bold">
        {ProjectsData[language].title}
      </h1>
      {ProjectsData[language].projectsArray.map((project, index) => (
        <div className="projects-boxes" key={index}>
          <div className="mb-9">
            <div className="p1 flex max-sm:mx-4 max-lg:flex-col max-lg:m-8 lg:mx-auto bg-white dark:bg-slate-800 rounded-lg max-sm:flex-col">
              <div className="image lg:w-9/12 max-lg:w-full max-sm:w-full max-sm:mb-3 ">
                <a href={project.siteLink}>
                  <img
                    className="lg:w-[360px] lg:h-[360px] rounded-lg"
                    src={project.img}
                    alt="calculator"
                  />
                </a>
              </div>
              <div className="p-text w-full max-lg:p-8 m-auto">
                <div>
                  <h2 className="p1-baslik lg:pb-6 max-sm:pb-3 sm:pb-4 sm:text-2xl text-indigo-700 dark:text-indigo-200 lg:text-3xl max-sm:text-2xl font-semibold max-lg:pt-4">
                    {project.title}
                  </h2>
                  <p className="p1-aciklama lg:pb-6 lg:text-xl max-lg:pb-4 text-slate-500 dark:text-white">
                    {project.descripton}
                  </p>
                </div>

                <div className="buttons flex lg:mb-6 max-lg:pb-4 gap-3 flex-wrap">
                  {project.buttons.map((herBiri, index) => (
                    <button
                      key={index}
                      className="bg-transparent text-blue-800 dark:bg-gray-700 hover:bg-blue-800 dark:text-indigo-300 font-semibold hover:text-white py-1 px-4 border border-indigo-300 hover:border-transparent rounded"
                    >
                      {herBiri}
                    </button>
                  ))}
                </div>

                <div className="link flex gap-3 text-indigo-700 dark:text-white text-decoration-line: underline max-sm:pb-3 viewGithub">
                  <a href={project.siteLink} target="_blank">
                    View Site
                  </a>
                  <a href={project.githubLink} target="_blank">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
