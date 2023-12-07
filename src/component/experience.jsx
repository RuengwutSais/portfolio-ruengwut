/* eslint-disable react/no-unescaped-entities */

import Avalant from "../assets/pictures/avalant.png";
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

const ExperienceComponent = () => {
  return (
    <>
      <section className="py-16 md:py-20" id="exerience">
        <h1 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl text-rose-600">
          Experience
        </h1>
        <h2 className="pt-6 text-center text-xl font-semibold text-zinc-900 sm:text-2xl lg:text-3xl">
          Here's what I have done in the past
        </h2>
        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-4/5 p-10">
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5 flex justify-center items-start">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src={Avalant} alt="" className="h-auto w-72" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <div className="mt-1 flex">
                  <div className="md:-mt-1 md:pl-8 text-start sm:text-center">
                    <span className="block font-body font-bold text-grey-40">
                      Jan 2022 - Apr 2022
                    </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-zince-900">
                      Intern at Avalant Co.,Ltd.
                    </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-rose-600">
                      Developer
                    </span>
                    <div className="pt-2">
                      <div className="block text-start text-zinc-900">
                        <span className="text-zinc-900 text-xl font-bold text-start w-full">
                          Responsibilities
                        </span>
                        <ul className="list-disc gap-4 flex flex-col text-justify">
                          <li>
                            Handled Customer Requests (CR) for the SCS
                            SiamVisual project during the first three months.
                          </li>
                          <li>Transferred to assist in resolving defects.</li>
                          <li>
                            Responsible for handling Customer Requests (CR) for
                            the SCG VRGreen project.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <span className="block pt-6 font-header text-xl font-bold uppercase text-rose-600">
                      Best Achievement
                    </span>
                    <span className="text-zinc-900 text-xl">
                      Product Notification Feature
                    </span>
                    <span className="block pt-6 font-header text-xl font-bold uppercase text-rose-600">
                      Tools
                    </span>
                    <div className="flex flex-wrap gap-2 zinc-900 text-4xl text-zinc-900 mt-2 items-center justify-start sm:justify-center">
                      <FaHtml5 />
                      <FaCss3 />
                      <FaJs />
                      <GrMysql />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceComponent;
