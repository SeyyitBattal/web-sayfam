import Skills from "./Skills";

import { Profile } from "./Profile";

const MyBody = () => {
  return (
    <div className="bodyDiv">
      <Skills />
      <hr className="my-14" />
      <Profile />
      <hr className="my-14" />
    </div>
  );
};

export default MyBody;
