import calculator from "../foto/calculator.png";
import taskList from "../foto/TaskList.png";

export const ProjectsData = () => {
  return (
    <div className="projectsSection ">
      <h1 className="mb-6 text-5xl font-bold">Projects</h1>
      <div className="projects-boxes ">
        <div className="box-1 mb-9 ">
          <div className="p1 flex max-sm:mx-4 max-lg:flex-col max-lg:m-8  lg:mx-auto bg-white dark:bg-slate-800   rounded-lg max-sm:flex-col">
            <div className="image lg:w-9/12 max-lg:w-full  max-sm:w-full max-sm:mb-3 ">
              <a href="https://calculator-rouge-beta.vercel.app/">
                <img
                  className=" lg:w-[360px] lg:h-[360px] rounded-lg"
                  src={calculator}
                  alt="calculator"
                />
              </a>
            </div>
            <div className="p-text w-full  max-lg:p-8  m-auto">
              <div className="">
                <h2 className="p1-baslik lg:pb-6 max-sm:pb-3 sm:pb-4 sm:text-2xl text-indigo-700 dark:text-indigo-200 lg:text-3xl max-sm:text-2xl font-semibold  max-lg:pt-4">
                  Modern Calculator
                </h2>
                <p className="p1-aciklama lg:pb-6 lg:text-xl max-lg:pb-4 text-slate-500 dark:text-white">
                  A simple, customizable, minimal setup cookie plugin that
                  allows your users to select which cookies to accept or
                  decline. This was created with vanilla JS, SCSS and Parcel
                  Bundler and is available as a NPM package and the git
                  repository makes any type of customization to code and themes
                  possible.
                </p>
              </div>

              <div className="buttons flex lg:mb-6 max-lg:pb-4 gap-3 flex-wrap ">
                <button className="bg-transparent text-blue-800 dark:bg-gray-700 hover:bg-blue-800 dark:text-indigo-300 font-semibold hover:text-white  py-1 px-4 border border-indigo-300 hover:border-transparent rounded">
                  react
                </button>
                <button className="bg-transparent dark:bg-gray-700 hover:bg-blue-800 text-blue-700 font-semibold dark:text-indigo-300 hover:text-white py-1 px-4 border border-indigo-300 hover:border-transparent rounded">
                  redux
                </button>
                <button className="bg-transparent dark:bg-gray-700 hover:bg-blue-800 text-blue-700 font-semibold dark:text-indigo-300 hover:text-white py-1 px-4 border border-indigo-300 hover:border-transparent rounded">
                  axios
                </button>
              </div>
              <div className="link flex gap-3 text-indigo-700 dark:text-white text-decoration-line: underline max-sm:pb-3 viewGithub">
                <a
                  href="https://calculator-rouge-beta.vercel.app/"
                  target="_blank"
                >
                  View Site
                </a>
                <a
                  href="https://github.com/SeyyitBattal/fsweb-s9g2-task-yonetimi-2"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="box-2 mb-9">
          <div className="p1 flex   max-sm:mx-4 max-lg:flex-col max-lg:m-8  lg:mx-auto bg-white dark:bg-slate-800  rounded-lg max-sm:flex-col">
            <div className="image lg:w-9/12 max-lg:w-full  max-sm:w-full max-sm:mb-3">
              <a href="https://task-list-with-deadline.vercel.app/">
                <img
                  className=" lg:w-[360px] lg:h-[360px] rounded-lg"
                  src={taskList}
                  alt="Task List"
                />
              </a>
            </div>
            <div className="p-text w-full  max-lg:p-8  m-auto">
              <div className="">
                <h2 className="p1-baslik lg:pb-6 max-sm:pb-3 sm:pb-4 sm:text-2xl text-indigo-700 dark:text-indigo-200 lg:text-3xl max-sm:text-2xl font-semibold  max-lg:pt-4">
                  Task list with deadline
                </h2>
                <p className="p1-aciklama lg:pb-6 lg:text-xl max-lg:pb-4 text-slate-500 dark:text-white">
                  A simple, customizable, minimal setup cookie plugin that
                  allows your users to select which cookies to accept or
                  decline. This was created with vanilla JS, SCSS and Parcel
                  Bundler and is available as a NPM package and the git
                  repository makes any type of customization to code and themes
                  possible.
                </p>
              </div>

              <div className="buttons flex lg:mb-6 max-lg:pb-4 gap-3 flex-wrap">
                <button className="bg-transparent text-blue-800 dark:bg-gray-700 hover:bg-blue-800 dark:text-indigo-300 font-semibold hover:text-white  py-1 px-4 border border-indigo-300 hover:border-transparent rounded">
                  react
                </button>
                <button className="bg-transparent text-blue-800 dark:bg-gray-700 hover:bg-blue-800 dark:text-indigo-300 font-semibold hover:text-white  py-1 px-4 border border-indigo-300 hover:border-transparent rounded">
                  redux
                </button>
                <button className="bg-transparent text-blue-800 dark:bg-gray-700 hover:bg-blue-800 dark:text-indigo-300 font-semibold hover:text-white  py-1 px-4 border border-indigo-300 hover:border-transparent rounded">
                  axios
                </button>
              </div>
              <div className="link flex gap-3 text-indigo-700  dark:text-white text-decoration-line: underline max-sm:pb-3 viewGithub">
                <a
                  href="https://task-list-with-deadline.vercel.app/"
                  target="_blank"
                >
                  View Site
                </a>
                <a
                  href="https://github.com/SeyyitBattal/fsweb-s9g2-task-yonetimi-2"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="box-3 mb-9">
          <div className="p1 flex   max-sm:mx-4 max-lg:flex-col max-lg:m-8  lg:mx-auto bg-white dark:bg-slate-800  rounded-lg max-sm:flex-col">
            <div className="image lg:w-9/12 max-lg:w-full  max-sm:w-full max-sm:mb-3">
              <a href="">
                <img
                  className=" lg:w-[360px] lg:h-[360px] rounded-lg"
                  src=""
                  alt=""
                />
              </a>
            </div>
            <div className="p-text w-full  max-lg:p-8  m-auto">
              <div className="">
                <h2 className="p1-baslik lg:pb-6 max-sm:pb-3 sm:pb-4 sm:text-2xl text-indigo-700 dark:text-indigo-200 lg:text-3xl max-sm:text-2xl font-semibold  max-lg:pt-4">
                  PROJE ADI 3
                </h2>
                <p className="p1-aciklama lg:pb-6 lg:text-xl max-lg:pb-4 text-slate-500 dark:text-white">
                  A simple, customizable, minimal setup cookie plugin that
                  allows your users to select which cookies to accept or
                  decline. This was created with vanilla JS, SCSS and Parcel
                  Bundler and is available as a NPM package and the git
                  repository makes any type of customization to code and themes
                  possible.
                </p>
              </div>

              <div className="buttons flex lg:mb-6 max-lg:pb-4 gap-3 flex-wrap">
                <button className="bg-transparent text-blue-800 dark:bg-gray-700 hover:bg-blue-800 dark:text-indigo-300 font-semibold hover:text-white  py-1 px-4 border border-indigo-300 hover:border-transparent rounded">
                  react
                </button>
                <button className="bg-transparent text-blue-800 dark:bg-gray-700 hover:bg-blue-800 dark:text-indigo-300 font-semibold hover:text-white  py-1 px-4 border border-indigo-300 hover:border-transparent rounded">
                  redux
                </button>
                <button className="bg-transparent text-blue-800 dark:bg-gray-700 hover:bg-blue-800 dark:text-indigo-300 font-semibold hover:text-white  py-1 px-4 border border-indigo-300 hover:border-transparent rounded">
                  axios
                </button>
              </div>
              <div className="link flex gap-3 text-indigo-700 dark:text-white text-decoration-line: underline max-sm:pb-3 viewGithub">
                <a href="" target="_blank">
                  View Site
                </a>
                <a href="" target="_blank">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
