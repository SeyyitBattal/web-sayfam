import Skills from "./Skills";
import { ProjectsData } from "../data/ProjectsData";
import { Profile } from "./Profile";

const MyBody = () => {
  return (
    <div className="bodyDiv">
      <Skills />
      <hr className="my-14" />
      <Profile />
      <hr className="my-14" />
      <ProjectsData />
    </div>
  );
};

export default MyBody;
