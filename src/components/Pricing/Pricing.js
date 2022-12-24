// @ts-nocheck
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Heading from "../Heading";
import Button from "../Button";
import { staggerContainer, zoomIn, slideIn } from "../../utils/motion";
import { ThemeContext } from "../../Theme";
import pricingLogo from "../../assets/pricing-logo.svg";

const Pricing = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const isMobile = window.innerWidth < 768;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      className="relative flex flex-col justify-center pb-0 md:pb-12"
    >
      <Heading
        size="h1"
        className={
          theme === "dark"
            ? "text-white text-center mx-auto my-4 md:my-8 px-4 md:px-0"
            : "text-slate-600 text-center mx-auto my-4 md:my-8 px-4 md:px-0"
        }
      >
        {t("pricelist")}
        <div className="w-full h-2 bg-gradient-to-r from-orange-100 to-transparent"></div>
      </Heading>
      <div className="flex flex-col md:flex-row w-full mb-12">
        <motion.div
          variants={slideIn("right", "tween", 0, 0.3)}
          className="flex flex-col font-semibold md:text-base 2xl:text-xl justify-center items-center w-full md:w-1/2 mr-4 px-4 md:px-8 pt-8 text-justify"
        >
          <form
            action="https://formbold.com/s/FORM_ID"
            method="POST"
            className="w-full"
          >
            <div className="mb-5">
              <label
                for="name"
                className={
                  theme === "dark"
                    ? "mb-3 block text-base font-medium text-white"
                    : "mb-3 block text-base font-medium text-[#07074D]"
                }
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium outline-none focus:border-pink-100 focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="email"
                className={
                  theme === "dark"
                    ? "mb-3 block text-base font-medium text-white"
                    : "mb-3 block text-base font-medium text-[#07074D]"
                }
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium outline-none focus:border-pink-100 focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="subject"
                className={
                  theme === "dark"
                    ? "mb-3 block text-base font-medium text-white"
                    : "mb-3 block text-base font-medium text-[#07074D]"
                }
              >
                Subject
              </label>
              <select
                name="subject"
                id="subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium outline-none focus:border-pink-100 focus:shadow-md"
              >
                <option value="" disabled selected>
                  Enter your subject
                </option>
                <option value="spa">Single Page Application</option>
                <option value="mpa">Multi Page Application</option>
                <option value="spa1">Single Page Application</option>
                <option value="mpa2">Multi Page Application</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                for="message"
                className={
                  theme === "dark"
                    ? "mb-3 block text-base font-medium text-white"
                    : "mb-3 block text-base font-medium text-[#07074D]"
                }
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full rounded-md border border-[#e0e0e09c] bg-white py-3 px-4 text-base font-medium outline-none focus:border-pink-100 focus:shadow-md"
              ></textarea>
            </div>
            <div className="mt-8 px-1.5">
              <Button className="w-full">
                <svg width={24} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M13 19C13 15.69 15.69 13 19 13C20.1 13 21.12 13.3 22 13.81V6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13.09C13.04 19.67 13 19.34 13 19M4 8V6L12 11L20 6V8L12 13L4 8M20 22V20H16V18H20V16L23 19L20 22Z"
                  />
                </svg>
                <p>{t("writeUs")}</p>
              </Button>
            </div>
          </form>
        </motion.div>
        <div className="flex justify-center w-full md:w-1/2 mt-8 md:mt-0 ml-0 md:ml-4 px-4 md:px-8 pt-8">
          <div
            className={
              theme === "dark"
                ? "flex flex-col justify-end bg-gradient-to-t from-navy-400 to-transparent rounded-xl border-b-4 border-b-[#bcbcbc]"
                : "flex flex-col justify-end bg-gradient-to-t from-light-100 to-transparent rounded-xl border-b-4 border-b-[#475569]"
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
