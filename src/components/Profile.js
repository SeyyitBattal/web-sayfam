import { useContext } from "react";
import { myInfo, aboutMe, profileData } from "../data/ProfileData";
import { websiteContext } from "../contexts/websiteContext";

export const Profile = () => {
  const { language } = useContext(websiteContext);
  return (
    <div className="profileSection">
      <h1 className="mb-6 text-5xl font-bold ">
        {profileData[language].title}
      </h1>

      <div className="profileAndAbout">
        <div className="profile">
          <h1 className="mb-2 lg:text-4xl text-indigo-700 dark:text-indigo-200 font-medium max-lg:text-3xl max-lg:text-center">
            {profileData[language].title}
          </h1>

          {myInfo.map((item, key) => (
            <div className="basic-info max-sm:pl-4 ">
              <div className="profil-detay flex  max-sm:mb-3 max-sm:pl-3 max-lg:mx-auto  ">
                <div className=" lg:w-[150px] max-sm:text-lg pr-5 sm:text-lg  lg:text-xl h-full text-black dark:text-white font-medium  sm:m-0 ">
                  <p className=" pb-2">Doğum tarihi</p>
                  <p className=" pb-2">İkamet Şehri</p>
                  <p className=" pb-2">Eğitim Durumu</p>
                  <p className=" pb-2">Tercih Ettiği Rol</p>
                </div>
                <div className="lg:w-[170px] max-sm:w-[170px] sm:w-[170px] max-sm:text-lg sm:text-lg lg:text-xl h-full lg:m-auto sm:m-0 text-black dark:text-white   ">
                  <p className=" pb-2">{item.dogumTrh}</p>
                  <p className=" pb-2">{item.ikametgah}</p>
                  <p className=" pb-2">{item.egitim}</p>
                  <p className=" pb-2">{item.rolTercihi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" aboutMe about-box lg:w-1/2 sm:w-9/12 max-sm:w-9/12 max-lg:px-4  max-sm:m-auto  max-sm:px-4   max-sm:mt-5 sm:mx-auto  ">
          <h3 className="mb-2 lg:text-4xl text-indigo-700 dark:text-indigo-200 font-medium max-lg:text-3xl max-lg:text-center ">
            {profileData[language].hakkimda}
          </h3>
          <div className=" text-black dark:text-white  lg:text-xl sm:text-lg max-lg:px-5  ">
            <p className="lg:pb-3 max-sm:pb-3 sm:pb-3">{aboutMe[0].about}</p>
            <p className="">{aboutMe[1].about1}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
