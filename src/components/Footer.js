import React from "react";
import { useTranslation } from "react-i18next";
import azureCircle from "../assets/azurecircle.png";

import Heading from "./Heading";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row w-full bg-navy-800 py-12 px-8">
      <div className="w-1/2">
        <Heading size="h2" className="mb-8">
          {t("erzet")}
        </Heading>
        <div className="w-full flex flex-row gap-8">
          <address className="w-1/2 text-white not-italic">
            <p>ul. Prowiantowa, nr 15, lok. 49</p>
            <p>15-707 Białystok</p>
            <p>NIP: 8513120222</p>
            <p>REGON: 523299221</p>
          </address>
          <div className="w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.6922176289754!2d23.12483401588338!3d53.133670398320895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc73f5083fb5%3A0xf094a0bc90dd9ff8!2sProwiantowa%2C%20Bia%C5%82ystok!5e0!3m2!1spl!2spl!4v1670157302884!5m2!1spl!2spl"
              width="250"
              height="200"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="border-l border-orange-100/20 mx-16"></div>
      <div className="w-1/2">
        <Heading size="h2" className="mb-8">
          {t("socialMedia")}
        </Heading>
        <ul className="relative cursor-pointer list-none flex gap-8">
          <li className="relative social-media-item">
            <a className="social-media-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
          </li>
          <li className="relative social-media-item">
            <a className="social-media-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </li>
          <li className="relative social-media-item">
            <a className="social-media-link" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 100 512 399.42"
              >
                <path
                  d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
                  fill="rgba(226, 232, 240, 0.2)"
                />
                <path
                  d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
                  fill="rgba(226, 232, 240, 0.2)"
                />
                <path
                  d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
                  fill="rgba(226, 232, 240, 0.2)"
                />
                <path
                  d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
                  fill="rgba(226, 232, 240, 0.2)"
                />
                <path
                  d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
                  fill="rgba(226, 232, 240, 0.2)"
                />
              </svg>
            </a>
          </li>
          <li className="relative social-media-item">
            <a className="social-media-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
