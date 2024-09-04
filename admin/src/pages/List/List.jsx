import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = "https://virtus-interior-products-backend.onrender.com";
  const [list, setList] = useState([]);
  const [isRemoving, setIsRemoving] = useState(false); // Track removal status

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/project/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching projects");
      }
    } catch (error) {
      console.error("Error fetching list:", error);
    }
  };

  const removeProject = async (projectId) => {
    try {
      setIsRemoving(true); // Set removal status to true
      const response = await axios.post(`${url}/api/project/remove`, {
        id: projectId,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        setList((prevList) =>
          prevList.filter((item) => item._id !== projectId)
        );
      } else {
        toast.error("Error removing project");
      }
    } catch (error) {
      console.error("Error removing project:", error);
    } finally {
      setIsRemoving(false); // Set removal status back to false
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add">
      <p>All Project List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className="list-table-format">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p
              onClick={() => !isRemoving && removeProject(item._id)} // Prevent action while removing
              className={`cursor-pointer text-red-500 ${
                isRemoving ? "opacity-50" : ""
              }`}
            >
              {isRemoving ? "Removing..." : "Delete"}{" "}
              {/* Show "Removing..." when in progress */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
