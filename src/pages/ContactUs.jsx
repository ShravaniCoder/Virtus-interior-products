import Layout from "../components/Layout";
import { PiPhoneTransferFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <Layout>
      <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
        <div className="absolute lg:left-0 text-left px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-36 z-10">
          <h1 className="lg:text-5xl uppercase text-xl font-semibold text-white p-4 animate-slide-down">
            Contact Us
          </h1>
          <p className="text-base md:text-xl lg:text-2xl font-light text-white p-4 animate-slide-down">
            <Link to="/">Home</Link> / <Link to="/about">Contact Us</Link>
          </p>
        </div>
        <img
          className="h-[30vh] md:h-[40vh] w-[100%] object-cover"
          src="../../src/assets/Img/contact/banner.png"
          alt="banner"
        />
      </section>
      <div className="px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-36 font-roboto">
        <div className="grid grid-cols-1 md:grid-cols-2 py-10">
          <div>
            <h1 className="text-base md:text-xl lg:text-4xl pb-4">
              VIRTUS INTERIOR PRODUCTS
            </h1>
            <p className="text-black/70">
              A/604, Mulund Kumar CHS. LTD Above State Bank,
            </p>
            <p className="text-black/70">Mhada Colony, Mulund East,</p>
            <p className="text-black/70">Mumbai 400081.</p>
            <div className="flex items-center gap-4 py-2">
              <PiPhoneTransferFill className="text-sky-600" />
              <p className="text-black/70">Phone: 9820324799 / 76661 17424</p>
            </div>
            <div className="flex items-center gap-4">
              <BiLogoGmail className="text-orange-600" />
              <p className="text-black/70">Email: suresh.virtus@gmail.com</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
