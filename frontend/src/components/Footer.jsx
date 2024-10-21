import { useRef } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Insta from "../../src/assets/Img/homepage/insta.png";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  // Send email via Email.js
  emailjs
    .sendForm(
      "service_j1j6vh1U", // Your Email.js service ID
      "template_63xzv2g", // Your Email.js template ID
      form.current,
      "B4LhwcBjKcQIwZ9sk" // Your Email.js publicKey
    )
    .then(
      (result) => {
        console.log(result); // Log result for debugging
        toast.success("Message sent successfully!");
        form.current.reset();

        // Extract form data
        const formData = new FormData(form.current);
        const name = formData.get("username");
        const email = formData.get("useremail");
        const mobile = formData.get("mobile");
        const location = formData.get("projectLocation");
        const comments = formData.get("comments");

        // Construct WhatsApp message and encode properly
        const whatsappMessage = `*Name:* ${encodeURIComponent(
          name
        )}%0A*Email:* ${encodeURIComponent(
          email
        )}%0A*Mobile:* ${encodeURIComponent(
          mobile
        )}%0A*Project Location:* ${encodeURIComponent(
          location
        )}%0A*Comments:* ${encodeURIComponent(comments)}`;

        // WhatsApp number (replace with your own)
        const whatsappNumber = "918097036352"; // Your WhatsApp number with country code

        // Open WhatsApp URL in a new tab
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        window.open(whatsappUrl, "_blank");
      },
      (error) => {
        console.log(error); // Log error for debugging
        toast.error("Failed to send message, please try again.");
      }
    );
};


  return (
    <>
      <div className="bg-[#2B2E31] h-auto">
        <div className="px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-[4rem]">
          <div className="py-4 flex flex-col md:flex-row">
            <div className="w-full md:w-[50%] flex flex-col md:flex-row justify-between">
              <div className="flex flex-col gap-2 px-4 md:w-[50%]">
                <h1 className="uppercase font-semibold text-2xl text-[#E5901F]">
                  Follow Us
                </h1>
                <p className="text-white/85 mt-2">
                  Explore VIRTUS modular ceilings, wall panels, and grills to
                  transform your space with style and quality.
                </p>
                <div className="socials flex flex-row gap-4 my-4">
                  <a
                    href="https://www.linkedin.com/company/103939751/admin/feed/posts/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-[#0A66C2] text-2xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61560728654788"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-blue-500 text-2xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/virtus.interior.products/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Insta}
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="rounded-md"
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-col px-4 md:w-[50%]">
                <h1 className="uppercase font-semibold text-2xl text-[#E5901F] ">
                  Our Address
                </h1>
                <div className="text-white/85 mt-2">
                  <h2>VIRTUS INTERIOR PRODUCTS</h2>
                  <p>A/604, Mulund Kumar CHS. LTD Above State Bank,</p>
                  <p>Mhada Colony, Mulund East,</p>
                  <p>Mumbai 400081.</p>
                </div>
                <div className="text-white/85 mt-4">
                  <p>Phone: 9820324799 / 7666117424</p>
                  <p>(Enquiry / Sales Support)</p>
                  <p className="text-[#4F8BAD] py-4">suresh.virtus@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <div className="flex flex-col px-4">
                <h1 className="uppercase font-semibold text-2xl text-[#E5901F]">
                  Contact Us
                </h1>
                <form
                  ref={form}
                  className="flex flex-col gap-4 mt-2"
                  onSubmit={sendEmail}
                >
                  <div className="flex flex-col md:flex-row gap-4 w-[100%]">
                    <div className="flex flex-col w-full md:w-[50%]">
                      <label
                        className="block text-white mb-2"
                        htmlFor="username"
                      >
                        Name
                      </label>
                      <input
                        className="w-full p-2 bg-white text-gray rounded"
                        type="text"
                        id="username"
                        name="username"
                        required
                      />
                    </div>
                    <div className="flex flex-col w-full md:w-[50%]">
                      <label
                        className="block text-white mb-2"
                        htmlFor="useremail"
                      >
                        Email
                      </label>
                      <input
                        className="w-full p-2 bg-white text-gray rounded"
                        type="email"
                        id="useremail"
                        name="useremail"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 w-[100%]">
                    <div className="flex flex-col w-full md:w-[50%]">
                      <label className="block text-white mb-2" htmlFor="mobile">
                        Mobile
                      </label>
                      <input
                        className="w-full p-2 bg-white text-gray rounded"
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
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
                        className="w-full p-2 bg-white text-gray rounded"
                        type="text"
                        id="projectLocation"
                        name="projectLocation"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-[100%]">
                    <label className="block text-white mb-2" htmlFor="comments">
                      Comments
                    </label>
                    <textarea
                      className="w-full p-3 bg-white text-black rounded"
                      id="comments"
                      name="comments"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="text-white py-2 px-4 w-[40%] mt-4 bg-yellow-600 hover:bg-[#E5901F] rounded"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-[#777777] h-px border-none" />
        <div className="py-6">
          <div className="px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-36">
            <div className="flex items-center justify-center">
              <p className="text-white text-center">
                Copyright © 2020 Aerolite Ceiling Systems, All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Footer;
