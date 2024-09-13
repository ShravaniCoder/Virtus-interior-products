import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the StoreContext
export const StoreContext = createContext();

// Create the StoreProvider component
export const StoreProvider = ({ children }) => {
  const [project_list, setProjectList] = useState([]);
 const url = import.meta.env.VITE_BACKEND_URL;

  // Function to fetch the projects from the API
  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${url}/api/project/list`);
      if (response.data.success) {
        setProjectList(response.data.data); // Update state with the fetched data
      } else {
        console.error("Error fetching projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  // useEffect to fetch projects on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  // Define the context value with the URL and project list
  const contextValue = {
    url, // Include the URL in the context if needed by child components
    project_list,
    setProjectList, // Include setProjectList if child components need to update the list
  };

  // Provide the state and updater function to the children components
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
