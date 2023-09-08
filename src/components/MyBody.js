import { infoDataEN, infoDataTR } from "../data/BodyData";
import { skillsData } from "../data/SkillsData";
import { profileDataEN, profileDataTR } from "../data/ProfileData";
import { projectsData } from "../data/ProjectsData";
import { ProjectsData } from "../data/ProjectsData";

const MyBody = () => {
  return (
    <div className="bodyDiv">
      <p>{infoDataEN.isim}</p>
      <h1 className="mb-6 text-5xl font-bold">{infoDataEN.slogan}</h1>
      <p>{infoDataEN.tanitim}</p>
      <div className="bodyButtons">
        <button className="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Hire me
        </button>
        <button className="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          GitHub
        </button>
        <button className="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Linkedin
        </button>
      </div>
      <div className="bg-indigo-300">
        <img
          src="C:\Files_Workintech\Projects\Frontend-Challenge\web-sayfam\src\photos\Resim2.jpg"
          className="object-cover h-48 w-96"
          alt="Seyyit Battal Arvas"
        />
      </div>
      <div className="skillsSection">
        <h1 className="mb-6 text-5xl font-bold">{skillsData.title}</h1>

        <h1 className="mb-6 text-3xl  text-indigo-700">{skillsData.jsTitle}</h1>
        <p>{skillsData.jsParagraph}</p>
        <h1 className="mb-6 text-3xl  text-indigo-700">
          {skillsData.reactTitle}
        </h1>
        <p>{skillsData.reactParagraph}</p>
        <h1 className="mb-6 text-3xl  text-indigo-700">
          {skillsData.nodeTitle}
        </h1>
        <p>{skillsData.nodeParagraph}</p>
      </div>
      <hr />
      <div className="profileSection">
        <h1 className="mb-6 text-5xl font-bold ">{profileDataEN.title}</h1>

        <h1 className="mb-6 text-3xl  text-indigo-700">
          {profileDataEN.title}
        </h1>
        <label className="font-bold">{profileDataEN.dogumTarihi} </label>
        <label> 30.03.1997</label>
        <label className="font-bold">{profileDataEN.sehir} </label>
        <label> İstanbul</label>
        <label className="font-bold">{profileDataEN.egitim} </label>
        <label> Gazi Uni. Enerji Müh. Lisans, 2019</label>
        <label className="font-bold">{profileDataEN.rol} </label>
        <label> Frontend, UI</label>

        <h1 className="mb-6 text-3xl text-indigo-700">
          {profileDataEN.hakkindaBaslik}
        </h1>
        <p>{profileDataEN.hakkindaParagraf}</p>
      </div>
      <hr />
      <div className="projectsSection">
        <h1 className="mb-6 text-3xl  text-indigo-700">
          {projectsData.proje1Baslik}
        </h1>
        <div>{ProjectsData()}</div>

        <h1 className="mb-6 text-3xl  text-indigo-700">
          {projectsData.proje2Baslik}
        </h1>
        <div>{ProjectsData()}</div>
        <h1 className="mb-6 text-3xl  text-indigo-700">
          {projectsData.proje3Baslik}
        </h1>
        <div>{ProjectsData()}</div>
      </div>
    </div>
  );
};

export default MyBody;
