import PropTypes from "prop-types";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const ProjectItem = ({ id, name, description, image }) => {
  const { url } = useContext(StoreContext);

  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col gap-4" key={id}>
      <div>
        <img
          src={image.startsWith("http") ? image : `${url}/images/${image}`}
          className="h-[320px] w-full object-cover"
          alt={name}
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold mx-4">{name}</h2>
      </div>
      <div>
        <p className="text-gray-700 mx-4 mb-4">{description}</p>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectItem;
