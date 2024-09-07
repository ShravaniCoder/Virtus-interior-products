import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import Homeimg0 from "../../src/assets/Img/homepage/HomeImg0.jpg";
import Homeimg1 from "../../src/assets/Img/homepage/Corridor.jpg";
import Homeimg2 from "../../src/assets/Img/pr0ducts/Expansion Joints Cover/Expansion Joints Cover.jpg";
import Homeimg3 from "../../src/assets/Img/pr0ducts/Partition/Glass.jpg";
import Homeimg4 from "../../src/assets/Img/pr0ducts/Flooring/Flooring.jpg";
import Picture1 from "../../src/assets/Img/about/Picture1.jpg";
import Picture2 from "../../src/assets/Img/about/Picture2.jpg";
import Picture3 from "../../src/assets/Img/about/Picture3.jpg";
import Picture4 from "../../src/assets/Img/about/Picture4.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/products");
  };

  const data = [
    {
      id: 1,
      bgImg: Homeimg0,
      heading: "A Project Matrix & Virtus Interior Products ",
      title: "Standard Metal Ceiling",
      desc: "Bring your unique ideas to life in beautiful spaces",
      backgroundPosition: "center center", // Customize this value as needed
    },
    {
      id: 2,
      bgImg: Homeimg1,
      heading: "A Project Matrix & Virtus Interior Products ",
      title: "Customized Ceiling",
      desc: "Elevate your space with custom made ceilings.",
      backgroundPosition: "center top", // Customize this value as needed
    },
    {
      id: 3,
      bgImg: Homeimg2,
      heading: "A Project Matrix & Virtus Interior Products ",
      title: "Expansion Joint Cover",
      desc: "Expansion joints that keep you connected.",
      backgroundPosition: "center center", // Customize this value as needed
    },
    {
      id: 4,
      bgImg: Homeimg3,
      heading: "A Project Matrix & Virtus Interior Products ",
      title: "Glass Partition",
      desc: "Partitions that reflect modern design.",
      backgroundPosition: "center left", // Customize this value as needed
    },
    {
      id: 5,
      bgImg: Homeimg4,
      heading: "A Project Matrix & Virtus Interior Products ",
      title: "Flooring",
      desc: "Step up to superior flooring solutions.",
      backgroundPosition: "center bottom", // Customize this value as needed
    },
  ];

  const dataImg = [
    {
      id: 1,
      bgImg: Picture1,
      backgroundPosition: "center center", // Customize this value as needed
    },
    {
      id: 2,
      bgImg: Picture2,
      backgroundPosition: "center top", // Customize this value as needed
    },
    {
      id: 3,
      bgImg: Picture3,
      backgroundPosition: "center bottom", // Customize this value as needed
    },
    {
      id: 4,
      bgImg: Picture4,
      backgroundPosition: "center left", // Customize this value as needed
    },
  ];

  return (
    <Layout>
      <div className="bg-white">
        <div className="w-screen h-[97vh] overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            {data.map((item) => (
              <SwiperSlide
                key={item.id}
                className="w-full h-full relative top-0"
                style={{
                  backgroundImage: `url(${item.bgImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: item.backgroundPosition,
                  backgroundRepeat: "no-repeat",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Add shadow here
                }}
              >
                <div className="flex items-end justify-center w-full h-full relative z-10">
                  <div className="flex items-center justify-center w-[95%] md:w-[50%] lg:w-[40%] h-[30vh] md:h-[40vh] bg-white/75 rounded-sm">
                    <div className="text-center px-2">
                      <p className="text-xl md:text-3xl italic font-lato font-medium text-[#4F8BAD]">
                        {item.heading}
                      </p>
                      <p className="mt-5 text-base italic text-black md:text-xl lg:text-xl animate-nav-up">
                        {item.desc}
                      </p>
                      <h1 className="text-2xl mt-5 italic text-[#455D8B] md:text-3xl lg:text-4xl font-semibold animate-nav-up">
                        {item.title}
                      </h1>

                      <button
                        className="mt-5 italic border-2 font-semibold py-2 px-6 font-lato mb-5 border-[#4F8BAD] rounded-sm text-[#4F8BAD] hover:text-[#E5901F] hover:border-[#E5901F]"
                        onClick={handleButtonClick}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="py-16">
          <div className="p-2 md:pl-[2rem] lg:pl-[2rem] xl:pl-[4rem] font-roboto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="mr-5">
                <h1 className="py-7 text-5xl text-black/75">About Us</h1>
                <p className=" text-[#455D8B] text-lg md:text-xl pb-5 font-semibold">
                  creating BEAUTIFUL spaces
                </p>
                <p className="pb-5 md:text-lg text-base text-black/70">
                  A Project Matrix and Virtus Interior Products are channel
                  partner for Aerolite Industries Pvt Ltd. Over Maharashtra,
                  Gujrat, Goa. We are also sole marketing partners of standard
                  metal ceiling and customized metal products for western India.
                </p>
                <p className="pb-5 md:text-lg text-base text-black/70">
                  Our sister concern A Project Matrix are contractors and
                  dealers for all leading false ceiling companies cooperating in
                  India since 15 years . Our expertise is to render service to
                  all leading companies in India in healthcare, Infraprojects,
                  Office spaces, Education, auditoriums, Industries.
                </p>
                <h2 className="pb-5 text-2xl md:text-3xl text-[#4F8BAD]">
                  Aerolite Customised Ceiling Systems
                </h2>

                <p className="pb-5 md:text-lg text-base text-black/70">
                  Aerolite offers a range of make in India modular ceiling
                  products like lightweight calcium silicate system, standard
                  metal works and customized metal solutions for walls and
                  ceiling. Aerolite is a leading company in modular ceiling
                  industries since last 2.5 decades capturing the interest and
                  imagination of leading architects, specifiers, consultants pan
                  India.
                </p>
                <p className="pb-16 md:text-lg text-base text-black/70">
                  The company puts combination of innovative and outstanding
                  products and services as top priority, constructive dialogue
                  with prospective customers having diverse requirement,
                  supported by highly qualified & technically specialized team
                  offering advice and guidance.
                </p>
              </div>
              <div className="relative w-full h-96 md:h-auto">
                {" "}
                {/* Ensure container has a height */}
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  className="w-full h-full"
                >
                  {dataImg.map((item) => (
                    <SwiperSlide
                      key={item.id}
                      className="w-full h-full rounded-sm"
                      style={{
                        backgroundImage: `url(${item.bgImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: item.backgroundPosition,
                        backgroundRepeat: "no-repeat",
                      }}
                    ></SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
