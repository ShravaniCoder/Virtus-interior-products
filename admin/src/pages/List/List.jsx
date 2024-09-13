import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/project/list`);
      console.log("Fetched Data:", response.data);

      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching projects");
      }
    } catch (error) {
      console.error("Error fetching list:", error);
      toast.error("Network error or failed to connect to the backend");
    } finally {
      setLoading(false); // Set loading to false after fetching data
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
        toast.success("removing project");
      }
    } catch (error) {
      console.error("Error removing project:", error);
      toast.error("Failed to remove project");
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
        {loading ? (
          <p>Loading...</p> // Display loader while data is being fetched
        ) : list.length > 0 ? (
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
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default List;
