/* eslint-disable react/no-unescaped-entities */
import ProfileImg from "../assets/pictures/Ruengwut.jpg";
import DeskImg from "../assets/pictures/desk.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSquareGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const HomeComponent = () => {
  return (
    <>
      <div
        className="flex flex-row sm:p-20 p-8 relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${DeskImg}')` }}
      >
        <div className="absolute inset-0 bg-rose-700 bg-cover bg-center bg-no-repeat opacity-95"></div>
        <div className="flex flex-wrap w-full h-full items-center justify-center z-20">
          <div className="flex justify-center items-center">
            <img
              src={ProfileImg}
              alt="profileImg"
              className="sm:h-96 sm:w-96 h-72 w-72 rounded-full border-8 border-rose-700 shadow-xl object-cover"
            />
          </div>
          <div className="m-4 flex flex-col justify-center text-white w-96">
            <p className="font-bold text-start">Hi, My name is</p>
            <h1 className="text-2xl sm:text-4xl font-bold text-start">
              Ruengwut Saisawat
            </h1>
            <h3 className="text-xl text-start">Front end developer</h3>
            <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start mt-4">
              <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                <p className="font-body text-lg uppercase text-white">
                  Let's get to know
                </p>
                <div className="hidden sm:block">
                  <FontAwesomeIcon icon={faChevronRight} className="text-4xl" />
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0 gap-4">
                <a
                  href="https://www.facebook.com/FormRuengwut"
                  className="text-3xl text-white hover:scale-125 ease-in-out duration-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://www.instagram.com/ruengwut.sais/"
                  className="text-3xl text-white hover:scale-125 ease-in-out duration-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://github.com/RuengwutSais"
                  className="text-3xl text-white hover:scale-125 ease-in-out duration-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faSquareGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ruengwut-saisawat-7535ab284/"
                  className="text-3xl text-white hover:scale-125 ease-in-out duration-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
