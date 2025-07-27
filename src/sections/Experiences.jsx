import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full px-2 sm:px-0" id="work">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
