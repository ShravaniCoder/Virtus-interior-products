import Layout from "../components/Layout";
import banner from "../../src/assets/Img/homepage/Img7.jpg";
import { useContext} from "react";
import { StoreContext } from "../context/StoreContext";
import ProjectItem from "../components/ProjectItem";

const OurProjects = () => {
  const { project_list } = useContext(StoreContext);

  return (
    <Layout>
      <section className="mb-10 relative flex flex-col items-center bg-[#807f7c] font-lato">
        <img
          className="h-[30vh] md:h-[40vh] w-[100%] object-cover"
          src={banner}
          alt="banner"
        />
      </section>
      <div className="px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-20 py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project_list.length > 0 ? (
            project_list.map((item, index) => (
              <ProjectItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))
          ) : (
            <p>No projects available.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default OurProjects;
