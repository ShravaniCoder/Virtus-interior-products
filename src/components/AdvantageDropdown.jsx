import PropTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa";


const CloudDropdown = ({ title, content, isOpen, image, onClick }) => {
  return (
    <div>
      <button
        className={`items border-solid border-b border-t w-full p-5 flex justify-between ${
          isOpen ? "bg-[#F5A41D] text-white" : "bg-white text-black"
        } hover:bg-[#F5A41D] hover:text-white`}
        onClick={onClick}
      >
        <h2 className="cursor-pointer text-xl font-bold text-start">{title}</h2>
        <span className="plus-icon">{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </button>
      {isOpen && (
        <div className="flex flex-col md:flex-row border-solid border-2">
          <div className="md:w-[70%] w-full">
            <ul className=" p-6 mb-2 list-disc">
              {content.map((item, index) => (
                <li
                  key={index}
                  className="answer bg-transparent ml-2 mb-2 text-gray-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-[30%] w-full flex justify-center items-center p-4">
            <img src={image} alt="Illustration" className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

CloudDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  image: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CloudDropdown;
