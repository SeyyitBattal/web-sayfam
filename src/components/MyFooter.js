import { footerData } from "../data/FooterData";
import { useState } from "react";

const MyFooter = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-20 bg-white dark:bg-black ">
      <h1 className="mb-6 mt-20 text-5xl font-bold flex flex-wrap ml-64">
        Let's work together on <br /> your next product.
      </h1>

      <div className="footer-mail-links mt-20 flex justify-between">
        <div className="ml-64">
          👉
          <label className="underline text-pink-600 dark:text-indigo-200">
            {footerData.mail}
          </label>
        </div>
        <div className="footer-links">
          <a
            href={footerData.blog}
            className="font-medium text-black dark:text-white hover:underline"
          >
            Personal Blog
          </a>
          <a
            href={footerData.github}
            className="font-medium text-green-500 dark:text-green-500 hover:underline mx-5"
          >
            Github
          </a>
          <a
            href={footerData.linkedin}
            className="font-medium text-blue-600  dark:text-blue-600 hover:underline mr-64"
          >
            Linkedin
          </a>
        </div>
      </div>
      <div className=" flex flex-col items-center my-20 gap-6 mx-8 bg-white dark:bg-black">
        <div className="send-message">
          <button
            className=" text-4xl font-semibold text-[#4731D3] font-serif mb-8"
            onClick={handleClick}
          >
            Click here and let's talks! 😀
          </button>
          {showForm && (
            <div className="form-wrapper">
              <form
                className="form"
                action="mailto:seyyitbattalarvas3@gmail.com"
                method="POST"
              >
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <label>Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
