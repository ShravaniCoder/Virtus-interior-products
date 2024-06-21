import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import banner from "../../src/assets/Img/features/banner.png";

const Features = () => {
  return (
    <Layout>
      <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
        <div className="absolute lg:left-0 text-left px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-36 z-10">
          <h1 className="lg:text-5xl uppercase text-xl font-semibold text-white p-4 animate-slide-down">
            Features
          </h1>
          <p className="text-base md:text-xl lg:text-2xl font-light text-white p-4 animate-slide-down">
            <Link to="/">Home</Link> / <Link to="/features">Features</Link>
          </p>
        </div>
        <img
          className="h-[30vh] md:h-[40vh] w-[100%] object-cover"
          src={banner}
          alt="banner"
        />
      </section>
    </Layout>
  );
};

export default Features;
