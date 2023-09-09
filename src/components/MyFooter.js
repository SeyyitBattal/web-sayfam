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
    <div>
      <h1 className="mb-6 text-4xl font-bold">{footerData.footerSloganEN}</h1>
      <label className="underline dark:text-pink-600">{footerData.mail}</label>
      <a
        href="#"
        className="font-medium text-blue-600 dark:text-slate-950 hover:underline"
      >
        Personal Blog
      </a>
      <a
        href="#"
        className="font-medium text-blue-600 dark:text-green-500 hover:underline"
      >
        Github
      </a>
      <a
        href="#"
        className="font-medium text-blue-600 dark:text-blue-600 hover:underline"
      >
        Linkedin
      </a>
      <div className=" flex flex-col items-center my-20 gap-6 mx-8 bg-white ">
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
