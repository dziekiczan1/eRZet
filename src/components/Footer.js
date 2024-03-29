// @ts-nocheck
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { textVariant, staggerContainer, slideIn } from "../utils/motion";

import Heading from "./Heading";
import { ThemeContext } from "../Theme";
import logo from "../assets/logo.webp";
import logoDark from "../assets/logo_dark.webp";
import iconEmail from "../assets/footer/email-logo.svg";
import iconPhone from "../assets/footer/phone-logo.svg";
import contactSvg from "../assets/footer/contact.svg";

const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className={
        theme === "dark"
          ? "flex flex-col lg:flex-row w-full bg-navy-800 py-8 lg:py-12 px-4 lg:px-8 relative overflow-hidden"
          : "flex flex-col lg:flex-row w-full bg-light-100 py-8 lg:py-12 px-4 lg:px-8 relative overflow-hidden"
      }
    >
      <div className="flex flex-col w-full lg:w-1/2 overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div className="flex items-center lg:items-start flex-col w-full lg:w-1/2">
            <motion.img
              variants={textVariant(0.2)}
              src={theme === "dark" ? logo : logoDark}
              alt="eRZet"
              width={706}
              height={219}
              className="z-10 w-3/4 h-auto mb-4"
            />
            <Heading
              size="h2"
              className={
                theme === "dark" ? "mb-4 text-white" : "mb-4 text-slate-600"
              }
            >
              {t("erzet")}
            </Heading>
            <address
              className={
                theme === "dark"
                  ? "flex flex-col items-center lg:items-start w-full text-white not-italic"
                  : "flex flex-col items-center lg:items-start w-full text-slate-600 not-italic"
              }
            >
              <p>ul. Prowiantowa, nr 15, lok. 49</p>
              <p>15-707 Białystok</p>
              <p>NIP: 8513120222</p>
              <p>REGON: 523299221</p>
            </address>
          </div>
          <motion.div
            className="flex justify-center w-full lg:w-1/2 overflow-hidden"
            variants={slideIn("right", "tween", 0, 0.6)}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.6922176289754!2d23.12483401588338!3d53.133670398320895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc73f5083fb5%3A0xf094a0bc90dd9ff8!2sProwiantowa%2C%20Bia%C5%82ystok!5e0!3m2!1spl!2spl!4v1670157302884!5m2!1spl!2spl"
              width="400"
              height="250"
              loading="lazy"
              title="eRZet company location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
      <div className="border-t lg:border-l border-orange-100/20 my-8 lg:my-8 lg:mx-16"></div>
      <div className="flex flex-col w-full lg:w-1/2">
        <div
          className={
            theme === "dark"
              ? "flex flex-col items-center lg:items-start mb-8 text-white"
              : "flex flex-col items-center lg:items-start mb-8 text-light-500"
          }
        >
          <Heading
            size="h2"
            className={
              theme === "dark" ? "text-white mb-6" : "text-light-500 mb-6"
            }
          >
            {t("contactUs")}
            <div className="w-full h-1 bg-gradient-to-r from-orange-100 to-transparent"></div>
          </Heading>
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              className="flex flex-row items-center gap-2 lg:gap-4 mb-4"
              variants={textVariant(0.2)}
            >
              <img
                src={iconPhone}
                alt="eRZet Phone Number"
                width={30}
                height={30}
              />
              <p className="text-lg">505 - 933 - 394</p>
            </motion.div>
            <motion.div
              className="flex flex-row items-center gap-2 lg:gap-4 "
              variants={textVariant(0.2)}
            >
              <img
                src={iconEmail}
                alt="eRZet Email address"
                width={30}
                height={30}
              />
              <p className="text-lg">p.rzadkowolski@gmail.com</p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <Heading
            size="h2"
            className={
              theme === "dark" ? "text-white mb-6" : "text-light-500 mb-6"
            }
          >
            {t("socialMedia")}
            <div className="w-full h-1 bg-gradient-to-r from-orange-100 to-transparent"></div>
          </Heading>
          <div className="flex flex-row justify-center lg:justify-start">
            <motion.ul
              variants={textVariant(0.2)}
              className="relative cursor-pointer list-none flex gap-8 text-light-500"
            >
              <li
                className={
                  theme === "dark"
                    ? "transition ease-in-out delay-[50ms] hover:text-slate-300 border-b-2 border-transparent hover:border-b-2 hover:border-orange-100 pb-2"
                    : "transition ease-in-out delay-[50ms] hover:text-azure-50 border-b-2 border-transparent hover:border-b-2 hover:border-orange-100 pb-2"
                }
              >
                <a
                  href="https://www.facebook.com/people/ERZET/100089004531475/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook page of eRZet Company"
                >
                  <svg
                    strokeLinejoin="round"
                    viewBox="0 0 512 512"
                    width={50}
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M255.022,511.998l0.229,0.001l-0.079,0l-0.15,-0.001Zm1.806,0.001l-0.079,0l0.229,-0.001l-0.15,0.001Zm-2.588,-0.005l0.247,0.001l-0.142,0l-0.105,-0.001Zm3.415,0.001l-0.142,0l0.247,-0.001l-0.105,0.001Zm-4.169,-0.007l0.165,0.001l-0.132,-0.001l-0.033,0Zm4.995,0l-0.132,0.001l0.165,-0.001l-0.033,0Zm0.826,-0.009l-0.058,0.001l0.223,-0.003l-0.165,0.002Zm-6.779,-0.002l0.223,0.003l-0.058,-0.001l-0.165,-0.002Zm7.604,-0.01l-0.135,0.002l0.275,-0.004l-0.14,0.002Zm-8.404,-0.002l0.275,0.004l-0.135,-0.002l-0.14,-0.002Zm9.228,-0.012l-0.182,0.003l0.254,-0.005l-0.072,0.002Zm-9.984,-0.002l0.254,0.005l-0.182,-0.003l-0.072,-0.002Zm-0.937,-0.019l0.225,0.005l-0.04,-0.001l-0.185,-0.004Zm11.745,0.004l-0.04,0.001l0.225,-0.005l-0.185,0.004Zm-12.567,-0.025l0.309,0.008l-0.125,-0.003l-0.184,-0.005Zm13.39,0.005l-0.125,0.003l0.309,-0.008l-0.184,0.005Zm0.823,-0.022l-0.201,0.006l0.316,-0.009l-0.115,0.003Zm-14.967,-0.003l0.316,0.009l-0.201,-0.006l-0.115,-0.003Zm-0.72,-0.022l0.225,0.007l-0.212,-0.007l-0.194,-0.006l0.181,0.006Zm16.509,0l-0.212,0.007l0.225,-0.007l0.181,-0.006l-0.194,0.006Zm0.821,-0.027l-0.112,0.004l0.345,-0.012l-0.233,0.008Zm-18.371,-0.008l0.345,0.012l-0.112,-0.004l-0.233,-0.008Zm-0.749,-0.028l0.362,0.013l-0.201,-0.007l-0.161,-0.006Zm19.941,0.006l-0.201,0.007l0.362,-0.013l-0.161,0.006Zm-20.676,-0.036l0.354,0.015l-0.277,-0.011l-0.077,-0.004Zm21.495,0.004l-0.277,0.011l0.354,-0.015l-0.077,0.004Zm-22.525,-0.049l0.38,0.017l-0.093,-0.003l-0.287,-0.014Zm23.345,0.014l-0.093,0.003l0.38,-0.017l-0.287,0.014Zm-24.084,-0.048l0.394,0.018l-0.186,-0.008l-0.208,-0.01Zm24.902,0.01l-0.186,0.008l0.394,-0.018l-0.208,0.01Zm-25.63,-0.047l0.397,0.02l-0.279,-0.013l-0.118,-0.007Zm26.448,0.007l-0.279,0.013l0.397,-0.02l-0.118,0.007Zm0.818,-0.043l-0.362,0.019l0.321,-0.017l0.378,-0.021l-0.337,0.019Zm-27.925,0.002l0.321,0.017l-0.362,-0.019l-0.337,-0.019l0.378,0.021Zm28.741,-0.048l-0.16,0.009l0.406,-0.023l-0.246,0.014Zm-29.844,-0.014l0.406,0.023l-0.16,-0.009l-0.246,-0.014Zm-0.722,-0.043l0.405,0.024l-0.253,-0.014l-0.152,-0.01Zm31.382,0.01l-0.253,0.014l0.405,-0.024l-0.152,0.01Zm-32.071,-0.053l0.365,0.023l-0.34,-0.021l-0.342,-0.022l0.317,0.02Zm32.887,0.002l-0.34,0.021l0.365,-0.023l0.317,-0.02l-0.342,0.022Zm0.814,-0.053l-0.122,0.008l0.387,-0.026l-0.265,0.018Zm-34.755,-0.018l0.387,0.026l-0.122,-0.008l-0.265,-0.018Zm-0.721,-0.05l0.38,0.027l-0.208,-0.014l-0.172,-0.013Zm36.29,0.013l-0.208,0.014l0.38,-0.027l-0.172,0.013Zm-37.009,-0.064l0.349,0.025l-0.271,-0.019l-0.078,-0.006Zm37.822,0.006l-0.271,0.019l0.349,-0.025l-0.078,0.006Zm-38.789,-0.079l0.306,0.023l-0.074,-0.005l-0.232,-0.018Zm39.602,0.018l-0.074,0.005l0.306,-0.023l-0.232,0.018Zm0.811,-0.063l-0.146,0.011l0.311,-0.025l-0.165,0.014Zm-41.157,-0.014l0.311,0.025l-0.146,-0.011l-0.165,-0.014Zm-0.725,-0.059l0.264,0.022l-0.186,-0.015l-0.078,-0.007Zm42.694,0.007l-0.186,0.015l0.264,-0.022l-0.078,0.007Zm-43.492,-0.074l0.079,0.007l-0.013,-0.001l-0.066,-0.006Zm44.302,0.006l-0.013,0.001l0.079,-0.007l-0.066,0.006Zm0.81,-0.071l-0.072,0.006l0.181,-0.016l-0.109,0.01Zm-45.965,-0.01l0.181,0.016l-0.072,-0.006l-0.109,-0.01Zm-0.75,-0.068l0.135,0.013l-0.084,-0.008l-0.051,-0.005Zm47.523,0.005l-0.084,0.008l0.135,-0.013l-0.051,0.005Zm-63.736,-2.025c-122.319,-19.226 -216,-125.203 -216,-252.887c0,-141.29 114.71,-256 256,-256c141.29,0 256,114.71 256,256c0,127.684 -93.681,233.661 -216,252.887l0,-178.887l59.65,0l11.35,-74l-71,0l0,-48.021c0,-20.245 9.918,-39.979 41.719,-39.979l32.281,0l0,-63c0,0 -29.296,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.887Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li
                className={
                  theme === "dark"
                    ? "transition ease-in-out delay-[50ms] hover:text-slate-300 border-b-2 border-transparent hover:border-b-2 hover:border-orange-100 pb-2"
                    : "transition ease-in-out delay-[50ms] hover:text-azure-50 border-b-2 border-transparent hover:border-b-2 hover:border-orange-100 pb-2"
                }
              >
                <a
                  href="https://twitter.com/eRZetCompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter page of eRZet Company"
                >
                  <svg
                    strokeLinejoin="round"
                    viewBox="0 0 512 512"
                    width={50}
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-45.091,392.158c113.283,0 175.224,-93.87 175.224,-175.223c0,-2.682 0,-5.364 -0.128,-7.919c12.005,-8.684 22.478,-19.54 30.779,-31.928c-10.983,4.853 -22.861,8.174 -35.377,9.706c12.772,-7.663 22.478,-19.668 27.076,-34.099c-11.878,7.024 -25.032,12.132 -39.081,14.942c-11.239,-12.005 -27.203,-19.412 -44.955,-19.412c-33.972,0 -61.558,27.586 -61.558,61.558c0,4.853 0.511,9.578 1.66,14.048c-51.213,-2.554 -96.552,-27.075 -126.947,-64.368c-5.237,9.068 -8.302,19.668 -8.302,30.907c0,21.328 10.856,40.23 27.459,51.213c-10.09,-0.255 -19.541,-3.065 -27.842,-7.662l0,0.766c0,29.885 21.2,54.661 49.425,60.409c-5.108,1.404 -10.6,2.171 -16.219,2.171c-3.96,0 -7.791,-0.383 -11.622,-1.15c7.79,24.521 30.523,42.274 57.471,42.784c-21.073,16.476 -47.637,26.31 -76.501,26.31c-4.981,0 -9.834,-0.256 -14.687,-0.894c26.948,17.624 59.387,27.841 94.125,27.841Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li
                className={
                  theme === "dark"
                    ? "transition ease-in-out delay-[50ms] hover:text-slate-300 border-b-2 border-transparent hover:border-b-2 hover:border-orange-100 pb-2"
                    : "transition ease-in-out delay-[50ms] hover:text-azure-50 border-b-2 border-transparent hover:border-b-2 hover:border-orange-100 pb-2"
                }
              >
                <a
                  href="https://www.instagram.com/erzetcompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram page of eRZet Company"
                >
                  <svg
                    strokeLinejoin="round"
                    viewBox="0 0 512 512"
                    width={50}
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm0,96c-43.453,0 -48.902,0.184 -65.968,0.963c-17.03,0.777 -28.661,3.482 -38.839,7.437c-10.521,4.089 -19.444,9.56 -28.339,18.455c-8.895,8.895 -14.366,17.818 -18.455,28.339c-3.955,10.177 -6.659,21.808 -7.437,38.838c-0.778,17.066 -0.962,22.515 -0.962,65.968c0,43.453 0.184,48.902 0.962,65.968c0.778,17.03 3.482,28.661 7.437,38.838c4.089,10.521 9.56,19.444 18.455,28.34c8.895,8.895 17.818,14.366 28.339,18.455c10.178,3.954 21.809,6.659 38.839,7.436c17.066,0.779 22.515,0.963 65.968,0.963c43.453,0 48.902,-0.184 65.968,-0.963c17.03,-0.777 28.661,-3.482 38.838,-7.436c10.521,-4.089 19.444,-9.56 28.34,-18.455c8.895,-8.896 14.366,-17.819 18.455,-28.34c3.954,-10.177 6.659,-21.808 7.436,-38.838c0.779,-17.066 0.963,-22.515 0.963,-65.968c0,-43.453 -0.184,-48.902 -0.963,-65.968c-0.777,-17.03 -3.482,-28.661 -7.436,-38.838c-4.089,-10.521 -9.56,-19.444 -18.455,-28.339c-8.896,-8.895 -17.819,-14.366 -28.34,-18.455c-10.177,-3.955 -21.808,-6.66 -38.838,-7.437c-17.066,-0.779 -22.515,-0.963 -65.968,-0.963Zm0,28.829c42.722,0 47.782,0.163 64.654,0.933c15.6,0.712 24.071,3.318 29.709,5.509c7.469,2.902 12.799,6.37 18.397,11.969c5.6,5.598 9.067,10.929 11.969,18.397c2.191,5.638 4.798,14.109 5.509,29.709c0.77,16.872 0.933,21.932 0.933,64.654c0,42.722 -0.163,47.782 -0.933,64.654c-0.711,15.6 -3.318,24.071 -5.509,29.709c-2.902,7.469 -6.369,12.799 -11.969,18.397c-5.598,5.6 -10.928,9.067 -18.397,11.969c-5.638,2.191 -14.109,4.798 -29.709,5.509c-16.869,0.77 -21.929,0.933 -64.654,0.933c-42.725,0 -47.784,-0.163 -64.654,-0.933c-15.6,-0.711 -24.071,-3.318 -29.709,-5.509c-7.469,-2.902 -12.799,-6.369 -18.398,-11.969c-5.599,-5.598 -9.066,-10.928 -11.968,-18.397c-2.191,-5.638 -4.798,-14.109 -5.51,-29.709c-0.77,-16.872 -0.932,-21.932 -0.932,-64.654c0,-42.722 0.162,-47.782 0.932,-64.654c0.712,-15.6 3.319,-24.071 5.51,-29.709c2.902,-7.468 6.369,-12.799 11.968,-18.397c5.599,-5.599 10.929,-9.067 18.398,-11.969c5.638,-2.191 14.109,-4.797 29.709,-5.509c16.872,-0.77 21.932,-0.933 64.654,-0.933Zm0,49.009c-45.377,0 -82.162,36.785 -82.162,82.162c0,45.377 36.785,82.162 82.162,82.162c45.377,0 82.162,-36.785 82.162,-82.162c0,-45.377 -36.785,-82.162 -82.162,-82.162Zm0,135.495c-29.455,0 -53.333,-23.878 -53.333,-53.333c0,-29.455 23.878,-53.333 53.333,-53.333c29.455,0 53.333,23.878 53.333,53.333c0,29.455 -23.878,53.333 -53.333,53.333Zm104.609,-138.741c0,10.604 -8.597,19.199 -19.201,19.199c-10.603,0 -19.199,-8.595 -19.199,-19.199c0,-10.604 8.596,-19.2 19.199,-19.2c10.604,0 19.201,8.596 19.201,19.2Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li
                className={
                  theme === "dark"
                    ? "transition ease-in-out delay-[50ms] hover:text-slate-300 border-b-2 border-transparent hover:border-b-2 hover:border-orange-100 pb-2"
                    : "transition ease-in-out delay-[50ms] hover:text-azure-50 border-b-2 border-transparent hover:border-b-2 hover:border-orange-100 pb-2"
                }
              >
                <a
                  href="https://www.linkedin.com/company/erzet"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin page of eRZet Company"
                >
                  <svg
                    strokeLinejoin="round"
                    viewBox="0 0 512 512"
                    width={50}
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
            </motion.ul>
          </div>
        </div>
        <motion.img
          src={contactSvg}
          variants={slideIn("down", "tween", 0, 0.6)}
          alt="Contact us!"
          width={320}
          height={320}
          className="hidden 2xl:block absolute bottom-8 right-[6rem]"
        />
      </div>
    </motion.div>
  );
};

export default Footer;
