import { infoDataEN, infoDataTR } from "../data/BodyData";
import Skills from "./Skills";
import { profileDataEN } from "../data/ProfileData";
import { ProjectsData } from "../data/ProjectsData";
import { Profile } from "./Profile";

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
          <img src="C:\Files_Workintech\Projects\Frontend-Challenge\web-sayfam\src\foto\github.svg" />
          GitHub
        </button>
        <button className="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <img src="C:\Files_Workintech\Projects\Frontend-Challenge\web-sayfam\src\foto\LinkedIn.svg" />
          Linkedin
        </button>
      </div>
      <div className="bg-indigo-300">
        <img
          src="C:\Files_Workintech\Projects\Frontend-Challenge\web-sayfam\src\foto\Resim2.jpg"
          className="object-cover h-48 w-96"
          alt="Seyyit Battal Arvas"
        />
      </div>
      <Skills />
      <hr />
      <Profile />
      <hr />
      <ProjectsData />
    </div>
  );
};

export default MyBody;
