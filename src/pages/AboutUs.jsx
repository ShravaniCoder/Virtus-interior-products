
import Layout from "../components/Layout";
import banner from "../../src/assets/Img/homepage/Img2.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers once when it comes into view
    threshold: 0.2, // Adjust threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Layout>
      <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
        
        <img
          className="h-[30vh] md:h-[40vh] w-[100%] object-cover"
          src={banner}
          alt="banner"
        />
      </section>
      <section className="p-2 md:px-[2rem] lg:px-[2rem] xl:px-36 font-roboto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="bg-gradient-to-r to-[#FFFCEF] from-[#f6eab9] shadow-xl text-black/70 text-base px-10 py-3 rounded-tl-extraLarge rounded-br-extraLarge"
        >
          <motion.p
            variants={childVariants}
            className="p-3 text-left text-base md:text-lg font-extrabold text-[#455F87]"
          >
            AEROLITE OFFERS A RANGE OF MAKE IN INDIA MODULAR CEILING PRODUCTS
            PIONEERED LIGHT WEIGHT CALCIUM SILICAT, STANDARD METAL WORKS AND
            CUSTOMIZED METAL SOLUTIONS FOR WALLS AND CEILING AEROLITE IS A
            LEADING COMPANY IN MODULAR CEILING INDUSTRIES SINCE 22 YEARS
            CAPTURING THE INTEREST AND IMAGINATION OF LEADING ARCHITECT,
            SPECIFY, CONSULTANT, PAN INDIA.
          </motion.p>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="bg-gradient-to-r from-[#FFFCEF] to-[#f6eab9] mb-10 shadow-xl text-black/70 text-base px-10 mt-4 py-3 rounded-tr-extraLarge rounded-bl-extraLarge"
        >
          <motion.p
            variants={childVariants}
            className="p-3 text-left text-base md:text-lg font-extrabold text-[#455F87]"
          >
            THE COMPANY PUTS COMBINATION OF INNOVATION AND OUTSTANDING PRODUCTS
            AND SERVICES AS OUR TOP PRIORITY, CONSTRUCTIVE DIALOGUE WITH EQUALLY
            PROSPECTIVE CUSTOMERS WITH EQUALLY DIVERSE REQUIREMENT SUPPORTED BY
            HIGHLY QUALIFIED TCHNICAL SPECIALIST OFFERING ADVICE AND GUIDENCE.
          </motion.p>
        </motion.div>
      </section>
    </Layout>
  );
};

export default AboutUs;
