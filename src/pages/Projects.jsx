import Layout from "../components/Layout";
import banner from "../../src/assets/Img/homepage/Img7.jpg";

// Sample project data
const projects = [
  {
    id: 1,
    image: "path-to-your-image1.jpg",
    title: "Project 1",
    description: "This is a brief description of Project 1.",
  },
  {
    id: 2,
    image: "path-to-your-image2.jpg",
    title: "Project 2",
    description: "This is a brief description of Project 2.",
  },
  {
    id: 3,
    image: "path-to-your-image3.jpg",
    title: "Project 3",
    description: "This is a brief description of Project 3.",
  },
  // Add more projects as needed
];

const OurProjects = () => {
  return (
    <Layout>
      <section className="mb-10 relative flex flex-col items-center bg-[#807f7c] font-lato">
        <img
          className="h-[30vh] md:h-[40vh] w-[100%] object-cover"
          src={banner}
          alt="banner"
        />
      </section>
        <div className="px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-36 py-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg p-4">
            <img
              className="h-40 w-full object-cover rounded-t-lg"
              src={project.image}
              alt={project.title}
            />
            <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
            <p className="text-gray-700 mt-2">{project.description}</p>
          </div>
        ))}
        </div>
        </div>
    </Layout>
  );
};

export default OurProjects;
