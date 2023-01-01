// @ts-nocheck
import React, { useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import Heading from "../Heading";
import Button from "../Button";
import { staggerContainer, zoomIn, slideIn } from "../../utils/motion";
import { ThemeContext } from "../../Theme";
import pricingLogo from "../../assets/pricing-logo.svg";

const Pricing = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState(false);
  const form = useRef();
  const nameRef = useRef();
  const mailRef = useRef();
  const subRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_CONTACT_SERVICE,
        "pricing-form",
        form.current,
        process.env.REACT_APP_CONTACT_KEY
      )
      .then(
        (result) => {
          setIsSend(true);
          nameRef.current.value = "";
          mailRef.current.value = "";
          subRef.current.value = "";
          messageRef.current.value = "";
        },
        (error) => {
          setIsError(true);
        }
      );
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      className="relative flex flex-col justify-center pb-0 lg:pb-12"
    >
      <Heading
        size="h1"
        className={
          theme === "dark"
            ? "text-white text-center mx-auto my-4 lg:my-8 px-4 lg:px-0"
            : "text-slate-600 text-center mx-auto my-4 lg:my-8 px-4 lg:px-0"
        }
      >
        {t("pricelist")}
        <div className="w-full h-2 bg-gradient-to-r from-orange-100 to-transparent"></div>
      </Heading>
      {isSend ? (
        <div className="w-full text-center text-2xl text-white">
          {t("sendSuccess")}
        </div>
      ) : (
        isError && (
          <div className="w-full text-center text-2xl text-white">
            {t("sendError")}
          </div>
        )
      )}
      <div className="flex flex-col lg:flex-row w-full mb-12">
        <motion.div
          variants={slideIn("right", "tween", 0, 0.3)}
          className="flex flex-col font-semibold lg:text-base 2xl:text-xl justify-center items-center w-full lg:w-1/2 mr-4 px-4 lg:px-8 pt-8 text-justify"
        >
          <form
            id="pricing-form"
            ref={form}
            onSubmit={sendEmail}
            method="POST"
            className="w-full"
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className={
                  theme === "dark"
                    ? "mb-3 block text-base font-medium text-white"
                    : "mb-3 block text-base font-medium text-[#07074D]"
                }
              >
                {t("fullName")}
              </label>
              <input
                type="text"
                name="full_name"
                id="name"
                ref={nameRef}
                placeholder={t("fullName")}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium outline-none focus:border-pink-100 focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className={
                  theme === "dark"
                    ? "mb-3 block text-base font-medium text-white"
                    : "mb-3 block text-base font-medium text-[#07074D]"
                }
              >
                {t("emailAddress")}
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                ref={mailRef}
                placeholder={t("emailAddress")}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium outline-none focus:border-pink-100 focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className={
                  theme === "dark"
                    ? "mb-3 block text-base font-medium text-white"
                    : "mb-3 block text-base font-medium text-[#07074D]"
                }
              >
                {t("subject")}
              </label>
              <select
                name="subject"
                id="subject"
                ref={subRef}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium outline-none focus:border-pink-100 focus:shadow-md"
              >
                <option value="" disabled defaultValue>
                  {t("subject")}
                </option>
                <option value="singlePageAppWithDesign">
                  {t("singlePageAppWithDesign")}
                </option>
                <option value="multiPageAppWithDesign">
                  {t("multiPageAppWithDesign")}
                </option>
                <option value="singlePageApp">{t("singlePageApp")}</option>
                <option value="multiPageApp">{t("multiPageApp")}</option>
                <option value="eCommerce">{t("eCommerce")}</option>
                <option value="blogWebsite">{t("blogWebsite")}</option>
                <option value="other">{t("other")}</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className={
                  theme === "dark"
                    ? "mb-3 block text-base font-medium text-white"
                    : "mb-3 block text-base font-medium text-[#07074D]"
                }
              >
                {t("message")}
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                ref={messageRef}
                placeholder={t("message")}
                className="w-full rounded-md border border-[#e0e0e09c] bg-white py-3 px-4 text-base font-medium outline-none focus:border-pink-100 focus:shadow-md"
              ></textarea>
            </div>
            <div className="mt-8 px-1.5">
              <Button
                className="w-full"
                type="submit"
                appearance={theme === "dark" ? "baseDark" : "baseLight"}
              >
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
        <div className="flex justify-center w-full lg:w-1/2 mt-8 lg:mt-0 ml-0 lg:ml-4 px-4 lg:px-8 pt-8">
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
              height={600}
              className="relative"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
