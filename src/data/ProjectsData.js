import calculator from "../foto/calculator.png";
import taskList from "../foto/TaskList.png";

export const ProjectsData = {
  tr: {
    title: "Projeler",
    site: "Site Görünümü",
    github: "Github",
    projectsArray: [
      {
        id: "1",
        title: "Modern Hesap Makinesi",
        img: calculator,
        descripton:
          "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        buttons: ["React", "Redux", "Axios"],
        siteLink: "https://calculator-rouge-beta.vercel.app/",
        githubLink:
          "https://github.com/SeyyitBattal/fsweb-s10g1-reducer-calculator",
      },
      {
        id: "2",
        title: "Son Teslim Tarihli Görev Listesi",
        img: taskList,
        descripton:
          "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        buttons: ["React", "Redux", "Axios"],
        siteLink: "https://task-list-with-deadline.vercel.app/",
        githubLink:
          "https://github.com/SeyyitBattal/fsweb-s9g2-task-yonetimi-2",
      },
    ],
  },
  en: {
    title: "Projects",
    site: "View Site",
    github: "Github",
    projectsArray: [
      {
        id: "1",
        title: "Modern Calculator",
        img: calculator,
        descripton:
          "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        buttons: ["React", "Redux", "Axios"],
        siteLink: "https://calculator-rouge-beta.vercel.app/",
        githubLink:
          "https://github.com/SeyyitBattal/fsweb-s10g1-reducer-calculator",
      },
      {
        id: "2",
        title: "Task List with Deadline",
        img: taskList,
        descripton:
          "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        buttons: ["React", "Redux", "Axios"],
        siteLink: "https://task-list-with-deadline.vercel.app/",
        githubLink:
          "https://github.com/SeyyitBattal/fsweb-s9g2-task-yonetimi-2",
      },
    ],
  },
};
