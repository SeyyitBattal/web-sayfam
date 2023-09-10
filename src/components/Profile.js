import { myInfo, aboutMe, profileDataEN } from "../data/ProfileData";

export const Profile = () => {
  return (
    <div className="profileSection">
      <h1 className="mb-6 text-5xl font-bold ">{profileDataEN.title}</h1>

      <div className="profileAndAbout">
        <div>
          <h1 className="mb-2 lg:text-4xl text-indigo-700 font-medium max-lg:text-3xl max-lg:text-center">
            {profileDataEN.title}
          </h1>

          {myInfo.map((item) => (
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
        </div>

        <div className="about-box lg:w-1/2 sm:w-9/12 max-sm:w-9/12 max-lg:px-4  max-sm:m-auto  max-sm:px-4   max-sm:mt-5 sm:mx-auto  ">
          <h3 className="mb-2 lg:text-4xl text-indigo-700 font-medium max-lg:text-3xl max-lg:text-center ">
            About Me
          </h3>
          <div className=" text-black lg:text-xl sm:text-lg max-lg:px-5  ">
            <p className="lg:pb-3 max-sm:pb-3 sm:pb-3">{aboutMe[0].about}</p>
            <p className="">{aboutMe[1].about1}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
