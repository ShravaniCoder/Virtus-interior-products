import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const url = "https://virtus-interior-products-backend.onrender.com/";
  const [project_list, setProjectList] = useState([]);

  const fetchProjectList = async () => {
    try {
      const response = await axios.get(url + "/api/project/list");
      setProjectList(response.data.data);
    } catch (error) {
      console.error("Error fetching project list:", error);
    }
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  const contextValue = {
    url, // Include the url in the context if needed by child components
    project_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
