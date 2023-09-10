import Skills from "./Skills";
import { ProjectsData } from "../data/ProjectsData";
import { Profile } from "./Profile";

const MyBody = () => {
  return (
    <div className="bodyDiv">
      <Skills />
      <hr />
      <Profile />
      <hr />
      <ProjectsData />
    </div>
  );
};

export default MyBody;
