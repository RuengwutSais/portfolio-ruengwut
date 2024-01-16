/* eslint-disable react/no-unescaped-entities */

import RentEstate from "../assets/pictures/1.png";
import MiWeater from "../assets/pictures/2.png";
import FilmicPass from "../assets/pictures/3.png";
import TaskList from "../assets/pictures/4.png";
import MusicApp from "../assets/pictures/5.png";
import Ecommerce from "../assets/pictures/6.png";

import {
  FaVuejs,
  FaBootstrap,
  FaNodeJs,
  FaDocker,
  FaReact,
  FaCcStripe 
} from "react-icons/fa";
import { SiSocketdotio, SiMariadb, SiTailwindcss,SiTypescript, SiPostgresql, SiJavascript, SiHtml5, SiCss3, SiSass } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiSupabaseFill } from "react-icons/ri";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectComponent = () => {
  return (
    <>
      <section className="py-16 md:py-20" id="project">
        <h1 className="text-center text-4xl font-bold uppercase text-primary sm:text-5xl lg:text-6xl text-rose-600">
          Projects
        </h1>
        <h2 className="pt-6 text-center text-xl font-semibold text-black sm:text-2xl lg:text-3xl">
          Here's the projects that I have done
        </h2>
        <div className="mx-auto grid w-full grid-cols-1 gap-10 pt-12 sm:w-4/5 md:gap-10 lg:w-full lg:grid-cols-2 sm:p-20 p-8">
          <div className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <div className="shadow-md relative overflow-hidden items-start justify-start group">
              <img
                src={RentEstate}
                alt="RentEstate"
                className="w-full h-full shadow bg-center bg-cover object-cover"
              />
              <div
                className="absolute left-0 right-0 bottom-0 bg-zinc-900 text-black p-4 max-h-full ease-in-out duration-300 translate-y-full 
                        group-hover:translate-y-0 h-full overflow-y-auto"
              >
                <h3 className="font-bold text-xl text-rose-600">
                  Web Application Residence Rent Center
                </h3>
                <p className="text-slate-300">2022-2023</p>
                <h3 className="font-bold text-rose-600 mt-2">Overview</h3>
                <p className="text-white">
                  This project focuses on providing a web application service
                  for renting estates , catering to general users, members, and
                  system administrators with various features tailored to each
                  role.
                </p>
                <h3 className="font-bold text-rose-600 mt-2">Tools</h3>
                <div className="flex flex-wrap gap-2 zinc-900 text-xl text-white mt-2">
                  <SiHtml5 />
                  <SiHtml5 />
                  <SiSass />
                  <SiHtml5 />
                  <FaNodeJs />
                  <FaVuejs />
                  <FaBootstrap />
                  <FaDocker />
                  <SiSocketdotio />
                  <SiMariadb />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <div className="shadow-md relative overflow-hidden items-start justify-start group">
              <img
                src={MusicApp}
                alt="MusicApp"
                className="w-full h-full shadow bg-center bg-cover object-cover"
              />
              <div
                className="absolute left-0 right-0 bottom-0 bg-zinc-900 text-black p-4 max-h-full ease-in-out duration-300 translate-y-full 
                        group-hover:translate-y-0 h-full overflow-y-auto"
              >
                <h3 className="font-bold text-xl text-rose-600">
                  Music App
                </h3>
                <p className="text-slate-300">2023</p>
                <h3 className="font-bold text-rose-600 mt-2">Overview</h3>
                <p className="text-white">
                  A Music App using NextJs with typescript and using Supabase as a database to create a Music App that has a features such as Sign-in/SignUp, Music Playback, Song Upload, Liked Songs Playlist, Song Search, Subscription Management.
                </p>
                <h3 className="font-bold text-rose-600 mt-2">Tools</h3>
                <div className="flex flex-wrap gap-2 zinc-900 text-xl text-white mt-2">
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                  <SiTypescript />
                  <SiPostgresql />
                  <FaReact />
                  <TbBrandNextjs />
                  <SiTailwindcss />
                  <RiSupabaseFill />
                  <FaCcStripe />
                </div>
                <div className="h-12 w-32">
                  <a
                  href="https://music-app-amber-eight.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  >
                    <button
                      className="bg-zinc-900 text-white border-2 border-white rounded mt-4 h-12 w-32 p-2 flex flex-wrap items-center justify-center gap-2
                hover:bg-white hover:text-zinc-900 ease-in-out hover:scale-110 duration-300"
                    >
                      <FaArrowUpRightFromSquare /> Preview
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <div className="shadow-md relative overflow-hidden items-start justify-start group">
              <img
                src={FilmicPass}
                alt="FilmicPass"
                className="w-full h-full shadow bg-center bg-cover object-cover"
              />
              <div
                className="absolute left-0 right-0 bottom-0 bg-zinc-900 text-black p-4 max-h-full ease-in-out duration-300 translate-y-full 
                        group-hover:translate-y-0 h-full overflow-y-auto"
              >
                <h3 className="font-bold text-xl text-rose-600">
                  Side Project FimicPass
                </h3>
                <p className="text-slate-300">2023</p>
                <h3 className="font-bold text-rose-600 mt-2">Overview</h3>
                <p className="text-white">
                  Create a movie website that allows users to search for
                  information about movies using TMDB API.
                </p>
                <h3 className="font-bold text-rose-600 mt-2">Tools</h3>
                <div className="flex flex-wrap gap-2 zinc-900 text-xl text-white mt-2">
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                  <FaReact />
                  <SiTailwindcss />
                </div>
                <div className=" h-12 w-32">
                  <a
                  href="https://filmic-pass.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  >
                    <button
                      className="bg-zinc-900 text-white border-2 border-white rounded mt-4 h-12 w-32 p-2 flex flex-wrap items-center justify-center gap-2
                hover:bg-white hover:text-zinc-900 ease-in-out hover:scale-110 duration-300"
                    >
                      <FaArrowUpRightFromSquare /> Preview
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <div className="shadow-md relative overflow-hidden items-start justify-start group">
              <img
                src={MiWeater}
                alt="MiWeater"
                className="w-full h-full shadow bg-center bg-cover object-cover"
              />
              <div
                className="absolute left-0 right-0 bottom-0 bg-zinc-900 text-black p-4 max-h-full ease-in-out duration-300 translate-y-full 
                        group-hover:translate-y-0 h-full overflow-y-auto"
              >
                <h3 className="font-bold text-xl text-rose-600">
                  Side Project MiWeather
                </h3>
                <p className="text-slate-300">2023</p>
                <h3 className="font-bold text-rose-600 mt-2">Overview</h3>
                <p className="text-white">
                  Create a weather dashboard that allow users to search for
                  infomation about city weather ,By using OpenWeather API.
                </p>
                <h3 className="font-bold text-rose-600 mt-2">Tools</h3>
                <div className="flex flex-wrap gap-2 zinc-900 text-xl text-white mt-2">
                  <SiHtml5 />
                  <SiCss3 />
                  <SiSass />
                  <SiJavascript />
                  <FaVuejs />
                  <FaBootstrap />
                </div>
                <div className=" h-12 w-32">
                  <a
                    href="https://miweather-workspace.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className="bg-zinc-900 text-white border-2 border-white rounded mt-4 h-12 w-32 p-2 flex flex-wrap items-center justify-center gap-2
                hover:bg-white hover:text-zinc-900 ease-in-out hover:scale-110 duration-300"
                    >
                      <FaArrowUpRightFromSquare /> Preview
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <div className="shadow-md relative overflow-hidden items-start justify-start group">
              <img
                src={Ecommerce}
                alt="Ecommerce"
                className="w-full h-full shadow bg-center bg-cover object-cover"
              />
              <div
                className="absolute left-0 right-0 bottom-0 bg-zinc-900 text-black p-4 max-h-full ease-in-out duration-300 translate-y-full 
                        group-hover:translate-y-0 h-full overflow-y-auto"
              >
                <h3 className="font-bold text-xl text-rose-600">
                  Side Project Ecommerce Mockup
                </h3>
                <p className="text-slate-300">2023</p>
                <h3 className="font-bold text-rose-600 mt-2">Overview</h3>
                <p className="text-white">
                  A side project pactice to mockup an ecommerce platform using NextJs with tailwind and JsonDummy as a mockup API.
                </p>
                <h3 className="font-bold text-rose-600 mt-2">Tools</h3>
                <div className="flex flex-wrap gap-2 zinc-900 text-xl text-white mt-2">
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                  <FaReact />
                  <TbBrandNextjs />
                  <SiTailwindcss />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <div className="shadow-md relative overflow-hidden items-start justify-start group">
              <img
                src={TaskList}
                alt="TaskList"
                className="w-full h-full shadow bg-center bg-cover object-cover"
              />
              <div
                className="absolute left-0 right-0 bottom-0 bg-zinc-900 text-black p-4 max-h-full ease-in-out duration-300 translate-y-full 
                        group-hover:translate-y-0 h-full overflow-y-auto"
              >
                <h3 className="font-bold text-xl text-rose-600">
                  Side Project TaskList
                </h3>
                <p className="text-slate-300">2023</p>
                <h3 className="font-bold text-rose-600 mt-2">Overview</h3>
                <p className="text-white">
                  A simple Task list that allow users to enter the task that
                  need doing and checked that task by store the data in local
                  storage
                </p>
                <h3 className="font-bold text-rose-600 mt-2">Tools</h3>
                <div className="flex flex-wrap gap-2 zinc-900 text-xl text-white mt-2">
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                  <FaVuejs />
                  <FaBootstrap />
                </div>
                <div className=" h-12 w-32">
                  <a
                  href="https://task-list-ruengwut.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  >
                    <button
                      className="bg-zinc-900 text-white border-2 border-white rounded mt-4 h-12 w-32 p-2 flex flex-wrap items-center justify-center gap-2
                hover:bg-white hover:text-zinc-900 ease-in-out hover:scale-110 duration-300"
                    >
                      <FaArrowUpRightFromSquare /> Preview
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectComponent;
