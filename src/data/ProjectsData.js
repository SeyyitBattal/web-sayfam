export const projectsData = {
  proje1Baslik: "Proje 1",
  projelerParagraf: "xxx",
  proje2Baslik: "Proje 2",
  proje3Baslik: "Proje 3",
};

export const ProjectsData = () => {
  return (
    <div>
      <p>{projectsData.projelerParagraf}</p>
      <div className="bodyButtons">
        <button className="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white  py-1 px-1 border border-blue-500 hover:border-transparent rounded">
          react
        </button>
        <button className="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded">
          redux
        </button>
        <button className="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded">
          axios
        </button>
      </div>
      <a
        href="#"
        class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
      >
        Github
      </a>
      <a
        href="#"
        class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
      >
        View Site
      </a>
    </div>
  );
};
