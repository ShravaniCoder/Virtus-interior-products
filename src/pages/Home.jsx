
import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay,  Navigation } from "swiper/modules";


const Home = () => {
  const data = [
    {
      id: 1,
      bgImg: "../../public/homepage/img1.png",
      title: "",
      desc: "",
    },
    {
      id: 2,
      bgImg: "../../public/homepage/img1.png",
      title: "",
      desc: "",
    },
    {
      id: 3,
      bgImg: "../../public/homepage/img1.png",
      title: "",
      desc: "",
    },
    {
      id: 4,
      bgImg: "../../public/homepage/img1.png",
      title: "",
      desc: "",
    },
    {
      id: 5,
      bgImg: "../../public/homepage/img1.png",
      title: "",
      desc: "",
    },
  ];

  return (
    <Layout>
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper w-full h-auto"
        >
          {data.map((data) => (
            <SwiperSlide
              key={data.id}
              className="w-full md:h-[70vh] relative"
              style={{
                backgroundImage: `url(${data.bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex items-center justify-center w-full h-full">
                <div
                  className="flex items-center justify-center w-[40%] h-[40vh]"
                  style={{ backgroundColor: "rgba(79, 139, 173, 0.5)" }}
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  );
}

export default Home;
