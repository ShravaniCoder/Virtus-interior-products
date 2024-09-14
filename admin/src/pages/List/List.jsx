import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false); // Toggle edit mode
  const [currentProject, setCurrentProject] = useState({}); // Project to edit

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
      toast.error("Network error or failed to connect to the backend");
    } finally {
      setLoading(false);
    }
  };

  const editProject = async (project) => {
    try {
      const response = await axios.post(`${url}/api/project/edit`, {
        id: project._id,
        name: project.name,
        description: project.description,
        image: project.image,
      });
      if (response.data.success) {
        toast.success("Project updated successfully");
        fetchList(); // Refresh list after editing
        setEditMode(false); // Exit edit mode
      } else {
        toast.error("Error updating project");
      }
    } catch (error) {
      console.error("Error editing project:", error);
      toast.error("Failed to edit project");
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
        toast.success("Removing project");
      }
    } catch (error) {
      console.error("Error removing project:", error);
      toast.error("Failed to remove project");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleEditClick = (project) => {
    setCurrentProject(project);
    setEditMode(true); // Enable edit mode when clicking the edit button
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject({ ...currentProject, [name]: value });
  };

  const handleEditSubmit = () => {
    editProject(currentProject);
  };

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
          <p>Loading...</p>
        ) : list.length > 0 ? (
          list.map((item, index) => (
            <div key={index} className="list-table-format">
              {editMode && currentProject._id === item._id ? (
                <div className="edit-form flex items-center justify-between gap-10 ml-24">
                  <input
                    type="text"
                    name="name"
                    className="border px-3"
                    value={currentProject.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="description"
                    className="border px-3"
                    value={currentProject.description}
                    onChange={handleInputChange}
                  />

                  <button
                    onClick={handleEditSubmit}
                    className="bg-green-500 text-white rounded-lg px-5"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="bg-red-500 text-white rounded-lg px-5"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                  <p
                    onClick={() => handleEditClick(item)}
                    className="cursor-pointer text-blue-500"
                  >
                    Edit
                  </p>
                  <p
                    onClick={() => removeProject(item._id)}
                    className="cursor-pointer text-red-500"
                  >
                    Delete
                  </p>
                </>
              )}
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
