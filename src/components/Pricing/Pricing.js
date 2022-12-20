// @ts-nocheck
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Heading from "../Heading";
import { staggerContainer, zoomIn, slideIn } from "../../utils/motion";
import { ThemeContext } from "../../Theme";
import pricingLogo from "../../assets/pricing-logo.svg";

const Pricing = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      className="relative flex flex-col justify-center pt-10 pb-16"
    >
      <Heading
        size="h1"
        className={
          theme === "dark"
            ? "text-white mx-auto mt-8 my-16"
            : "text-slate-600 mx-auto mt-8 my-16"
        }
      >
        {t("pricelist")}
        <div className="w-26 h-2 bg-gradient-to-r from-orange-100 to-transparent"></div>
      </Heading>
      <div className="flex flex-row w-full mb-12">
        <motion.div
          variants={slideIn("right", "tween", 0, 0.3)}
          className="flex flex-col font-semibold md:text-base 2xl:text-xl justify-center items-center w-1/2 mr-4 px-20 pt-8 text-justify"
        >
          <form
            action="https://formbold.com/s/FORM_ID"
            method="POST"
            className="w-full"
          >
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="email"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="message"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button className="flex flex-row justify-center gap-2 w-full bg-navy-700 p-4 text-white text-bold outline-offset-4 outline outline-2 outline-orange-100">
                <svg width={24} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19.7 12.9L14 18.6H11.7V16.3L17.4 10.6L19.7 12.9M23.1 12.1C23.1 12.4 22.8 12.7 22.5 13L20 15.5L19.1 14.6L21.7 12L21.1 11.4L20.4 12.1L18.1 9.8L20.3 7.7C20.5 7.5 20.9 7.5 21.2 7.7L22.6 9.1C22.8 9.3 22.8 9.7 22.6 10C22.4 10.2 22.2 10.4 22.2 10.6C22.2 10.8 22.4 11 22.6 11.2C22.9 11.5 23.2 11.8 23.1 12.1M3 20V4H10V9H15V10.5L17 8.5V8L11 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H15C16.1 22 17 21.1 17 20H3M11 17.1C10.8 17.1 10.6 17.2 10.5 17.2L10 15H8.5L6.4 16.7L7 14H5.5L4.5 19H6L8.9 16.4L9.5 18.7H10.5L11 18.6V17.1Z"
                  />
                </svg>
                <p>{t("writeUs")}</p>
              </button>
            </div>
          </form>
        </motion.div>
        <div className="flex justify-center w-1/2 ml-4 px-8 pt-8">
          <div
            className={
              theme === "dark"
                ? "bg-gradient-to-t from-navy-400 to-transparent rounded-xl border-b-4 border-b-[#bcbcbc] px-4"
                : "bg-gradient-to-t from-light-100 to-transparent rounded-xl border-b-4 border-b-[#475569] px-4"
            }
          >
            <motion.img
              variants={zoomIn(0.4, 0.6)}
              src={pricingLogo}
              alt="eRZet - Contact us"
              width={600}
              className="relative"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
