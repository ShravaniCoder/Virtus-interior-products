
import Homeimg1 from "../../src/assets/Img/homepage/HomeIMG1.jpg";
import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

const Home = () => {
  const data = [
    {
      id: 1,
      bgImg: Homeimg1,
      title: "",
      desc: "",
    },
    {
      id: 2,
      bgImg: Homeimg1,
      title: "",
      desc: "",
    },
    {
      id: 3,
      bgImg: Homeimg1,
      title: "",
      desc: "",
    },
   
  ];

  return (
    <Layout>
      <div className="w-screen h-screen overflow-hidden mb-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full h-full"
        >
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="w-full h-full relative top-0"
              style={{
                backgroundImage: `url(${item.bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex items-end justify-center w-full h-full">
                <div className="flex items-center justify-center w-[90%] md:w-[50%] lg:w-[40%] h-[30vh] md:h-[35vh] bg-white">
                  <div className="text-center text-black px-4">
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold animate-nav-up">
                      Metal Ceilings <br /> Solutions
                    </h1>
                    <p className="mt-2 md:mt-4 text-base md:text-lg lg:text-xl animate-nav-up">
                      Bring your unique ideas to life in beautiful spaces
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  );
};

export default Home;
