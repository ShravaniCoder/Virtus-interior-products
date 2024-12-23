import Layout from "../components/Layout";
import { PiPhoneTransferFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";
import banner from "../../src/assets/Img/homepage/Img2.png";
import { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
      username: "",
      useremail: "",
      mobile: "",
      projectLocation: "",
      comments: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Send data to WhatsApp
      const { username, useremail, mobile, projectLocation, comments } =
        formData;
      const phoneNumber = "918097036352"; // Your WhatsApp number (91 is the country code for India)

      // Prepare the message content
      const message = `Name: ${username}%0AEmail: ${useremail}%0AMobile: ${mobile}%0AProject Location: ${projectLocation}%0AComments: ${comments}`;

      // WhatsApp URL
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

      // Open WhatsApp link in a new tab
      window.open(whatsappUrl, "_blank");

      // Also submit form to Formspree
      e.target.submit();
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
              <p className="text-black/70">Phone : 98203 24799 / 76661 17424</p>
            </div>
            <div className="flex items-center gap-4">
              <BiLogoGmail className="text-orange-600" />
              <p className="text-black/70">Email : suresh.virtus@gmail.com</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="py-10">
          <h1 className="text-2xl font-bold mb-6">Get a Quote</h1>
          <form
            className="space-y-4"
            method="POST"
            action="https://formspree.io/f/xldrgddz"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 mb-4 md:mb-0">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-6 py-2 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  name="username"
                  required
                  autoComplete="off"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-6 rounded-3xl py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  name="useremail"
                  required
                  autoComplete="off"
                  value={formData.useremail}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 mb-4 md:mb-0">
                <label className="block text-sm font-medium text-gray-700">
                  Mobile
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-6 rounded-3xl py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  name="mobile"
                  required
                  autoComplete="off"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1 mb-4 md:mb-0">
                <label className="block text-sm font-medium text-gray-700">
                  Project Location
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-6 rounded-3xl py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  name="projectLocation"
                  required
                  autoComplete="off"
                  value={formData.projectLocation}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Upload BOQ
                </label>
                <input
                  type="file"
                  className="mt-1 block w-full px-6 rounded-3xl py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  required
                  autoComplete="off"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Comments
              </label>
              <textarea
                className="mt-1 block w-full px-6 rounded-3xl py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                rows="4"
                required
                name="comments"
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className="py-2 px-10 bg-yellow-500 rounded-full text-white/90 font-medium shadow-sm hover:bg-[#F8CE06] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
