import { FaMobile, FaAngleDoubleRight } from "react-icons/fa";
import { MdEmail, MdPinDrop } from "react-icons/md";
import emailjs from "@emailjs/browser";

const ContactComponent = () => {
//   const sendEmail = (e) => {
//     const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
//     const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
//     const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

//     console.log("Service ID:", serviceId);
//     console.log("Template ID:", templateId);
//     console.log("Public Key:", publicKey);

//     e.preventDefault();
//     emailjs.sendForm(serviceId, templateId, e.target, {
//       user_id: publicKey,
//       service_id: "gmail",
//       scope: "https://www.googleapis.com/auth/gmail.send",
//     });
//   };

  return (
    <>
      <section id="contact" className="sm:p-20 p-8 bg-zinc-900 py-16 md:py-20 h-screen justify-center items-center flex flex-col">
        <h2 className="text-center font-header text-4xl font-bold uppercase text-rose-600 sm:text-5xl lg:text-6xl ">
          Contact
        </h2>
        {/* <h4 className="pt-6 text-center text-xl text-white sm:text-2xl lg:text-3xl">
          Message me via email
        </h4>
        <form className="mx-auto w-full pt-10 sm:w-3/4" onSubmit={sendEmail}>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              name="name_form"
              id="nameForm"
              className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
              placeholder="Name"
            />
            <input
              type="email"
              name="email_from"
              id="emailForm"
              className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
              placeholder="person@example.com"
            />
          </div>
          <textarea
            name="message"
            id="messageForm"
            cols="30"
            rows="10"
            className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8 "
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="mt-6 flex items-center justify-center rounded bg-rose-600 px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-white hover:text-zinc-900 border-2 border-rose-600
                    hover:border-zinc-900 gap-2 ease-in-out duration-300 hover:scale-110"
          >
            Send
            <FaAngleDoubleRight />
          </button>
        </form> */}
        <div className="flex flex-col pt-16 lg:flex-row gap-4">
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-zinc-800 px-6 py-6 sm:py-8 lg:w-1/3">
            <div className="flex items-center text-white">
              <FaMobile className="text-2xl" />
              <p className="pl-2 font-body font-bold uppercase lg:text-lg">
                Phone
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-rose-600 lg:text-lg">
              (+66) 098-848-2480
            </p>
          </div>
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-zinc-800 px-6 py-6 sm:py-8 lg:w-1/3">
            <div className="flex items-center text-white">
              <MdEmail className="text-2xl" />
              <p className="pl-2 font-body font-bold uppercase lg:text-lg">
                Email
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-rose-600 lg:text-lg">
              ruengwut.sais@gmail.com
            </p>
          </div>
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-zinc-800 px-6 py-6 sm:py-8 lg:w-1/3">
            <div className="flex items-center text-white">
              <MdPinDrop className="text-2xl" />
              <p className="pl-2 font-body font-bold uppercase lg:text-lg">
                Address
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-rose-600 lg:text-lg">
              62/202 Village Natural Pracha u tit-76 Thugkru Thugkru Bangkok
              10140
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactComponent;
