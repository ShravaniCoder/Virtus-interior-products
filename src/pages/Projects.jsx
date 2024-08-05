
import Layout from "../components/Layout";
import banner from "../../src/assets/Img/homepage/Img7.jpg";

const OurProjects = () => {
  return (
    <Layout>
      <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
        
        <img
          className="h-[30vh] md:h-[40vh] w-[100%] object-cover"
          src={banner}
          alt="banner"
        />
      </section>
    </Layout>
  );
};

export default OurProjects;
