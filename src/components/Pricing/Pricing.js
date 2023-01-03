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
    <>
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
      <svg viewBox="0 0 670.732 9.3" xmlns="http://www.w3.org/2000/svg">
        <path
          fill={theme === "dark" ? "#1a1f2c" : "#edf2f8"}
          d="M521.533.005c-.544-.04-1.1.143-1.576.6-1.238 1.19-7.808 2.645-7.604 1.683.107-.502-.583-1.05-1.611-1.27-1.028-.218-1.899.107-2.037.759-.126.59-.622.615-1.04.04-.451-.614-1.784-.657-3.066-.095-3.156 1.385-7.704 1.91-10.36 1.2-2.032-.549-2.349-.168-2.835 3.423-.228 1.708-.4 2.64-.619 2.955h-.406c-.15-.153-.325-.44-.54-.846-.638-1.21-.617-2.164.053-2.562a2.508 2.508 0 00.705-2.555c-.47-2.473-2.68-1.226-2.554 1.436.047 1.07-.374 1.899-.89 1.789-.517-.11-.854-.84-.706-1.535.154-.725-.702-1.533-1.9-1.787-1.454-.31-2.54.446-3.254 2.273-.864 2.19-1.256 2.4-1.965 1.03-1.202-2.33-14.13-4.336-15.043-2.335-.383.84-1 1.172-1.34.705s-1.464-.041-2.476.926c-1.013.968-1.748 1.268-1.616.647.35-1.643-10.02-4.34-11.033-2.88a1.301 1.301 0 01-2.047.231c-.64-.578-3.044-1.027-5.373-1.011-3.316.022-4.33.566-4.752 2.554-.618 2.906-2.391 4.285-2.799 2.18-.152-.79.18-1.415.692-1.307s.86-.45.724-1.168c-.329-1.732-11.596-3.013-14.398-1.638-1.196.596-2.566.63-3.193.08-.596-.52-1.662-.09-2.35.953-.756 1.153-1.364 1.34-1.53.463-.173-.911-1.6-1.292-3.896-1.022a29.486 29.486 0 01-7.818-.478c-2.311-.492-4.57-.345-5.03.314a1.161 1.161 0 01-1.777.35c-.512-.475-3.924-.272-7.564.437-4.01.787-7.792.74-9.584-.12-1.625-.785-3.615-.939-4.403-.34a8.01 8.01 0 01-4.23.949 8.154 8.154 0 00-4.152.832c-.761.51-1.76.49-2.498-.051-1.28-1.137-19.358.206-21.088 1.57a2.89 2.89 0 01-3.034-.252 6.035 6.035 0 00-4.597-.25 25.018 25.018 0 01-6.977.828c-2.313-.058-5.459-.001-6.914.116s-3.622.207-4.73.175c-1.134-.016-7.755.03-14.744.106-6.99.075-14.686.102-17.143.05-2.493-.05-4.358.34-4.252.874.106.533-2.373.215-5.488-.701-3.116-.917-5.796-1.154-5.928-.534-.132.62-2.628.808-5.5.414-2.872-.393-5.485-.222-5.756.362-.271.583-2.014.43-3.818-.348a18.863 18.863 0 00-7.996-.912 74.57 74.57 0 01-13.352-.527c-4.8-.58-11.407-1.049-14.808-1.038-3.402.011-7.886-.09-10.065-.22-2.12-.133-4.54.138-5.271.594-.731.455-2.976.551-4.961.199-5.605-.99-12.01-.535-13.018.927-.51.742-1.952.682-3.475-.144-1.606-.867-3.188-.878-4.115-.016-.817.758-3.116 1.206-5.037.975-1.92-.232-4.143.048-4.871.61-.745.576-2.8.55-4.64-.057a8.883 8.883 0 00-5.577-.063 6.2 6.2 0 01-3.58.623 8.32 8.32 0 00-3.101.125h-33.088c-.463-.06-.87-.125-1.143-.201-1.606-.45-2.968-.36-3.088.201h-7.355a51.267 51.267 0 00-3.883-.148 104.69 104.69 0 01-10.666-.744c-7.763-.94-15.848-1.397-18.828-1.08-1.198.131-6.278-.573-11.17-1.54-4.892-.966-9.061-1.334-9.17-.824-.109.51-1.385.423-2.777-.197-1.393-.62-3.245-.611-4.03.004a2.946 2.946 0 01-3.257-.035c-1.1-.712-1.929-.605-2.116.275-.179.843-1.803 1.132-3.857.695a14.223 14.223 0 00-6.152.084c-2.367.48-4.8.522-7.182.122-2.51-.387-4.89-.262-5.25.275a1.2 1.2 0 01-1.783-.016C11.552 4.706 1.416 7.09.019 9.273c-.006.01-.013.017-.02.027 670.733 0 .02-.027 670.733 0-.41-.557-.759-.548-1.313 0h-4.966c-1.038-1.466-1.301-1.463-1.237 0h-9.847c-5.293-.884-9.885-.893-12.87 0h-1.527c-.189-.256-.193-.743-.033-1.496.564-2.655-1.964-3.402-3.188-.95-.538 1.077-1.226 1.575-1.59 1.118-.362-.456-1-.275-1.476.412-.461.664-3.852.452-7.506-.47-5.943-1.496-6.877-1.393-8.64.937-.13.17-.246.297-.37.45h-2.847c.02-.117.021-.207.048-.335.376-1.766.155-1.908-1.261-.795-1.29 1.017-1.639.975-1.397-.164.389-1.827-7.76-2.214-10.011-.467-.967.75-1.296.62-1.073-.431a1.61 1.61 0 00-1.261-1.854c-1.368-.29-1.437-.11-.51 1.346.813 1.27.567 1.341-1.006.31-1.18-.767-2.098-1.882-2.127-2.56.116-1.806-2.528-2.124-2.844-.342-.204.962-1.29 1.002-2.976.094-3.453-1.85-6.734-.195-6.719 3.387.003.809-.099 1.4-.26 1.81h-1.433a4.878 4.878 0 01-.475-.834c-.979-2.148-5.035-4.084-5.916-2.826-1.29 1.851-2.59 1.166-2.107-1.105.287-1.345-.467-2.21-2.266-2.592-1.454-.31-2.828.033-2.98.75a1.306 1.306 0 01-1.604 1.043c-.765-.163-2.346.693-3.695 1.99-1.35 1.297-2.233 1.674-2.065.883.203-.955-.307-1.087-1.613-.412a2.257 2.257 0 01-2.908-.414 2.304 2.304 0 00-2.19-1.06c-.67.19-1.508-.655-1.916-1.933a3.966 3.966 0 00-2.523-2.644c-1.027-.218-1.615.11-1.367.767a2.01 2.01 0 001.279 1.323c.516.11.835.711.799 1.492-.088 2.084-4.987.786-5.084-1.344-.127-2.942-2.507-2.643-3.922.488-1.088 2.405-1.293 2.476-1.217.397.101-2.745-2.33-3.7-4.387-1.719-1.006.97-1.37.975-1.166.014.403-1.893-6.49-.057-7.996 2.127-.929 1.341-1.134 1.214-1.232-.785-.077-1.654-1.212-2.813-2.408-2.9zm48.188 3.576c.065-.017.121.033.167.16a4.26 4.26 0 01-.492 2.54l-.002.004c-.194.372-.335.545-.414.523-.127-.027-.108-.527.074-1.457.208-1.046.47-1.716.666-1.77zm-99.563.71a.606.606 0 01.213.01c.452.095.898 1.25.951 2.445l.008.005c.051 1.103-.194 1.71-.617 1.616a.693.693 0 01-.283-.15c-1.146-.918-1.261-3.784-.272-3.927zm97.414 0c.425.08.462.51-.055 1.26v.003a2.427 2.427 0 01-2.375.943c-1.282-.272-1.257-.468.16-1.365 1.033-.653 1.845-.922 2.27-.842zm-168.809.736a.486.486 0 01.334.217 1.85 1.85 0 01-.156 2.085v.008c-.536.77-1.056 1.056-1.406.967-.49-.104-.648-.906-.053-2.084.406-.805.902-1.243 1.281-1.193zm132.14.12c.413.008.878.064 1.392.173 3.077.654 3.105.722.68 1.613l.001.006c-2.044.748-3.229 1.08-3.832.947-.544-.115-.62-.598-.433-1.478.18-.85.95-1.281 2.191-1.26zm43.741 1.397c.288-.043.712.31 1.227 1.043.351.528.606 1.108.764 1.713h-1.25c-.024-.393-.151-.659-.397-.71-.516-.11-.853-.85-.707-1.534.067-.316.19-.485.363-.512zM485.2 7.77c.07-.002.136.06.19.191.059.45.04.9-.036 1.34h-.834l.004-.01c.2-.94.465-1.514.676-1.521zm13.943 1.324c.06.013.125.095.192.207h-.569c.16-.135.299-.224.377-.207z"
        ></path>
      </svg>
    </>
  );
};

export default Pricing;
