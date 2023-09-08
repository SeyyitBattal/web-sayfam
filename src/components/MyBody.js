import { infoDataEN, infoDataTR } from "../data/BodyData";

const MyBody = () => {
  return (
    <div className="bodyDiv">
      <p>{infoDataEN.isim}</p>
      <h1 class="mb-6 text-5xl font-bold">{infoDataEN.slogan}</h1>
      <p>{infoDataEN.tanitim}</p>
      <div className="bodyButtons">
        <button class="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Hire me
        </button>
        <button class="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          GitHub
        </button>
        <button class="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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
    </div>
  );
};

export default MyBody;
