import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ReCAPTChHA from 'react-google-recaptcha';
import { useState } from "react";

const Footer = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleRecaptchaChange = (value) => {
    if (value) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };
  return (
    <>
      <div className="bg-[#2B2E31] h-auto">
        <div className="px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-36">
          <div className="py-4 flex flex-col md:flex-row">
            <div className="w-full md:w-[50%] flex flex-col md:flex-row justify-between">
              <div className="flex flex-col gap-2 px-4">
                <h1 className="uppercase font-semibold text-2xl text-[#E5901F]">
                  Technical
                </h1>
                <Link className="hover:text-white text-white/85 tect-xl flex gap-2 items-center mt-1 ">
                  <IoIosArrowForward />
                  Techincal Comparision
                </Link>
                <Link className="hover:text-white text-white/85 tect-xl flex gap-2 items-center">
                  <IoIosArrowForward />
                  Aerolite Technical Data
                </Link>
              </div>
              <div className="flex flex-col px-4">
                <h1 className="uppercase font-semibold text-2xl text-[#E5901F] ">
                  Contact us
                </h1>
                <div className="text-white/85 mt-2">
                  <h2>VIRTUS INTERIOR PRODUCTS</h2>
                  <p>A/604, Mulund Kumar CHS. LTD Above State Bank,</p>
                  <p>Mhada Colony, Mulund East,</p>
                  <p>Mumbai 400081.</p>
                </div>
                <div className="text-white/85 mt-4">
                  <p>Phone: 9820324799 / 76661 17424</p>
                  <p>(Enquiry / Sales Support)</p>
                  <a className="text-[#4F8BAD]">suresh.virtus@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <div className="flex flex-col px-4">
                <h1 className="uppercase font-semibold text-2xl text-[#E5901F]">
                  Enquiry
                </h1>
                <form className="flex flex-col gap-4 mt-2">
                  <div className="flex flex-col md:flex-row gap-4 w-[100%]">
                    <div className="flex flex-col w-full md:w-[50%]">
                      <label className="block text-white mb-2" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="w-full p-2 bg-white text-gray"
                        type="text"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="flex flex-col w-full md:w-[50%]">
                      <label className="block text-white mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full p-2 bg-white text-gray"
                        type="email"
                        id="email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 w-[100%]">
                    <div className="flex flex-col w-full md:w-[50%]">
                      <label className="block text-white mb-2" htmlFor="mobile">
                        Mobile
                      </label>
                      <input
                        className="w-full p-2 bg-white text-gray"
                        type="tel"
                        id="mobile"
                        name="mobile"
                      />
                    </div>
                    <div className="flex flex-col w-full md:w-[50%]">
                      <label
                        className="block text-white mb-2"
                        htmlFor="projectLocation"
                      >
                        Project Location
                      </label>
                      <input
                        className="w-full p-2 bg-white text-gray"
                        type="text"
                        id="projectLocation"
                        name="projectLocation"
                      />
                    </div>
                  </div>
                  <div className="w-[100%]">
                    <label className="block text-white mb-2" htmlFor="comments">
                      Comments
                    </label>
                    <textarea
                      className="w-full p-3 bg-white text-black"
                      id="comments"
                      name="comments"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="">
                    <ReCAPTChHA
                      sitekey="6LegpbgpAAAAAD4M2jzmYcEo1VrrRHDwOUX2pimn"
                      onChange={handleRecaptchaChange}
                    />
                    <button
                      type="submit"
                      className={`text-white py-2 px-6 w-[30%] mt-4 ${
                        isVerified ? "bg-yellow-500" : "bg-yellow-600"
                      }`}
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-[#E5901F] h-px border-none" />
        <div className="py-6">
          <div className="px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-36">
            <div className="flex items-center justify-between">
              <p className="text-white">
                Copyright © 2020 Aerolite Ceiling Systems, All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
