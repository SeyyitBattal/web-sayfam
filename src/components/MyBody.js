import { infoDataEN, infoDataTR } from "../data/BodyData";
import { skillsData } from "../data/SkillsData";
import { profileDataEN, aboutMe } from "../data/ProfileData";
import { projectsData } from "../data/ProjectsData";
import { ProjectsData } from "../data/ProjectsData";
import { hakkimda } from "../data/ProfileData";

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
        <h1 className="mb-2 lg:text-4xl text-indigo-700 font-medium max-lg:text-3xl max-lg:text-center">
          {profileDataEN.title}
        </h1>

        <div className="profileAndAbout">
          {hakkimda.map((item) => (
            <div className="basic-info max-sm:pl-4 ">
              <div className="profil-detay flex max-lg:w-[300px] lg:h-[222px] max-sm:mb-3 max-sm:pl-3 sm:mb-3 max-lg:mx-auto ">
                <div className=" lg:w-[150px]  max-sm:text-lg pr-5 sm:text-lg  lg:text-xl h-full text-black font-medium  sm:m-0 ">
                  <p className=" pb-2">Doğum tarihi</p>
                  <p className=" pb-2">İkamet Şehri</p>
                  <p className=" pb-2">Eğitim Durumu</p>
                  <p className=" pb-2">Tercih Ettiği Rol</p>
                </div>
                <div className="lg:w-[170px] max-sm:w-[170px] sm:w-[170px] max-sm:text-lg sm:text-lg lg:text-xl h-full lg:m-auto sm:m-0 text-black   ">
                  <p className=" pb-2">{item.dogumTrh}</p>
                  <p className=" pb-2">{item.ikametgah}</p>
                  <p className=" pb-2">{item.egitim}</p>
                  <p className=" pb-2">{item.rolTercihi}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="about-box lg:w-1/3 sm:w-9/12 max-sm:w-9/12 max-lg:px-4  max-sm:m-auto  max-sm:px-4   max-sm:mt-5 sm:mx-auto  ">
            <h3 className="mb-2 lg:text-4xl text-indigo-700 font-medium max-lg:text-3xl max-lg:text-center ">
              About Me
            </h3>
            <div className="hakkımda-detay text-black lg:text-xl sm:text-lg max-lg:px-5  ">
              <p className="lg:pb-3 max-sm:pb-3 sm:pb-3">{aboutMe[0].about}</p>
              <p className="">{aboutMe[1].about1}</p>
            </div>
          </div>
        </div>
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
