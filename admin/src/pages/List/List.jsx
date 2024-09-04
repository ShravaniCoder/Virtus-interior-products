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
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching projects");
      }
    } catch (error) {
      console.error("Error fetching list:", error); // Log the error
      // Remove or comment out the toast.error line
      // toast.error("Network error");
    }
  };

 const removeProject = async (projectId) => {
   try {
     const response = await axios.post(`${url}/api/project/remove`, {
       id: projectId,
     });
     if (response.data.success) {
       toast.success(response.data.message);
       setList((prevList) => prevList.filter((item) => item._id !== projectId)); // Update the list state
     } else {
       toast.success("Removing project");
     }
   } catch (error) {
     console.error("Error removing project:", error);
     // Remove or comment out the toast.error line
     // toast.error("Network error");
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
              onClick={() => removeProject(item._id)}
              className="cursor-pointer text-red-500"
            >
              Delete
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
