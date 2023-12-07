import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaSass,
  FaVuejs,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";

const AboutComponent = () => {
  return (
    <>
      <section className=" bg-zinc-900" id="about">
        <div className="flex flex-col items-center py-16 md:py-20 lg:flex-row w-full">
          <div className="sm:p-20 p-8 text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h1 className="text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl text-rose-600">
              About me
            </h1>
            <h2 className="pt-6 text-xl font-medium text-white sm:text-2xl lg:text-3xl">
              I'm a{' '}
              <span className="text-rose-600 font-semibold">
               Front end devloper
              </span>
            </h2>
            <p className="pt-6 text-justify leading-relaxed text-white">
              My primary focus is on seeking valuable experience and growth
              opportunities. I am passionate about continuous learning and
              constantly challenge myself to expand my skillset. With a strong
              foundation in my field, I am eager to apply my knowledge and
              expertise in practical settings.
            </p>
            <div className="mt-6 text-start">
              <h4 className="text-4xl font-semibold uppercase text-rose-600">
                Education
              </h4>
              <h2 className="pt-6 text-xl font-medium text-white sm:text-2xl lg:text-3xl">
                Bachelor's Degree at Bangkok University
              </h2>
              <p className="text-slate-100">May 2018 - June 2023</p>
              <h3 className=" mt-4 text-xl font-medium text-white sm:text-2xl lg:text-3xl">
              Information Technology and Digital Innovation Faculty
              </h3>
              <h4 className="mt-2 text-xl font-medium text-white sm:text-xl lg:text-2xl">Computer Science Major</h4>
              <h4 className="mt-2 text-xl font-medium text-rose-600 sm:text-xl lg:text-2xl">GPA 3.03</h4>
            </div>
          </div>
          <div className="w-full pl-0 lg:pr-12 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div className="mt-8 pl-8 pr-8 sm:p-0">
              <h4 className="text-4xl font-semibold uppercase text-rose-600">
                Skills
              </h4>
              <div className="flex flex-wrap gap-4 mt-8 text-white text-5xl">
                <FaHtml5 />
                <FaCss3 />
                <FaJs />
                <FaSass />
                <GrMysql />
              </div>
            </div>
            <div className="mt-8 pl-8 pr-8  sm:p-0">
              <h4 className="text-4xl font-semibold uppercase text-rose-600">
                Framework and Libraries
              </h4>
              <div className="flex flex-wrap gap-4 mt-8 text-white text-5xl">
                <FaVuejs />
                <FaReact />
                <FaBootstrap />
                <SiTailwindcss />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
