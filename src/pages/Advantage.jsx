
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import banner from "../../src/assets/Img/advantage/banner (3).png";

const Advantage = () => {
  return (
    <Layout>
      <section className="mb-5 relative flex items-center bg-[#807f7c] font-lato">
        <div className="absolute lg:left-0 text-left px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-36 z-10">
          <h1 className="lg:text-5xl uppercase text-xl font-semibold text-white p-4 animate-slide-down">
            AEROLITE ADVANTAGE
          </h1>
          <p className="text-base md:text-xl lg:text-2xl font-light text-white p-4 animate-slide-down">
            <Link to="/">Home</Link> / <Link to="/advantage">Advantage</Link>
          </p>
        </div>
        <img
          className="h-[30vh] md:h-[40vh] w-[100%] object-cover"
          src={banner}
          alt="banner"
        />
      </section>
      <section className="p-2 md:px-[2rem] lg:px-[2rem] xl:px-36 font-roboto">
        <div className="bg-[#FFFCEF] border-2 border-[#f6eab9] text-black/70 font-semibold text-base px-10 py-3 rounded-tl-extraLarge rounded-br-extraLarge">
          <p className="p-3 text-left">
            AEROLITE METALWORKS IS THE INDIA’S FIRST CUSTOMIZED METAL CEILING
            SOLUTION WITH SEVERAL UNIQUE FEATURES AND MEETS ALL THE REQUIREMENTS
            OF AN IDEAL CEILING FROM A BUILDING DESIGNER’S PERSPECTIVE WITH
            SPECIAL ATTENTION TO SERVICES ABOVE CEILING .
          </p>
          <p className="p-3 ">
            AEROLITE METALWORKS ARE AVAILABLE IN A PLEASING RANGE OF SURFACE
            TEXTURES AND DESIGN OPTIONS TO MEET THE MOST DEMANDING AND CREATIVE
            REQUIREMENTS OF TODAY&#39;S INTERIORS. THE DESIGN RANGE IS AVAILABLE
            IN A WIDE RANGE OF GEOMETRIC PATTERNS WITH SUBTLE RELIEF AND
            PRESENTS A WEALTH OF EXCITING POSSIBILITIES, WHICH CAN BE USED TO
            CREATE TRULY INSPIRING AND IMPRESSIVE INTERIORS.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Advantage;
