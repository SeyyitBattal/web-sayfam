import { footerData } from "../data/FooterData";

const MyFooter = () => {
  return (
    <div>
      <h1 className="mb-6 text-4xl font-bold">{footerData.footerSloganEN}</h1>
      <label className="underline dark:text-pink-600">{footerData.mail}</label>
      <a
        href="#"
        class="font-medium text-blue-600 dark:text-slate-950 hover:underline"
      >
        Personal Blog
      </a>
      <a
        href="#"
        class="font-medium text-blue-600 dark:text-green-500 hover:underline"
      >
        Github
      </a>
      <a
        href="#"
        class="font-medium text-blue-600 dark:text-blue-600 hover:underline"
      >
        Linkedin
      </a>
    </div>
  );
};

export default MyFooter;
