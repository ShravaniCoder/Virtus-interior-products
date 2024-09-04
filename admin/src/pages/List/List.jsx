import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = "https://virtus-interior-products-backend.onrender.com";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/project/list`);
      console.log("Fetched Data:", response.data); // Log the fetched data

      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching projects");
      }
    } catch (error) {
      console.error("Error fetching list:", error);
      toast.error("Network error or failed to connect to the backend");
    }
  };

  const removeProject = async (projectId) => {
    try {
      const response = await axios.post(`${url}/api/project/remove`, {
        id: projectId,
      });
      if (response.data.success) {
        toast.success("Project removed successfully");
        setList((prevList) =>
          prevList.filter((item) => item._id !== projectId)
        );
      } else {
        toast.error("Failed to remove the project");
      }
    } catch (error) {
      console.error("Error removing project:", error);
      toast.error("Network error or failed to connect to the backend");
    }
  };

  useEffect(() => {
    fetchList(); // Fetch the list when the component mounts
  }, []); // Empty dependency array means this runs once when the component mounts

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
        {list.length > 0 ? (
          list.map((item, index) => (
            <div key={index} className="list-table-format">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p
                onClick={() => removeProject(item._id)}
                className="cursor-pointer text-red-500"
              >
                Delete
              </p>
            </div>
          ))
        ) : (
          <p>No projects found.</p> // Handle case where no data is fetched
        )}
      </div>
    </div>
  );
};

export default List;
