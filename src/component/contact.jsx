import * as React from "react";
import { FaMobile, FaAngleDoubleRight } from "react-icons/fa";
import { MdEmail, MdPinDrop } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BeatLoader from "react-spinners/BeatLoader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "transparent",
  p: 4,
};

const ContactComponent = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Ruengwut Saisawat",
      message: message,
    };

    console.log("Email :", email);
    handleOpen();

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email :", email);
        setName("");
        setEmail("");
        setMessage("");
        console.log("Email sent successfully:", response);
        handleClose();

        // Clear the form using the form ref
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <section id="contact" className="sm:p-20 p-8 bg-zinc-900 py-16 md:py-20">
        <h2 className="text-center font-header text-4xl font-bold uppercase text-rose-600 sm:text-5xl lg:text-6xl ">
          Contact
        </h2>
        <h4 className="pt-6 text-center text-xl text-white sm:text-2xl lg:text-3xl">
          Message me via email
        </h4>
        <form
          className="mx-auto w-full pt-10 sm:w-3/4"
          onSubmit={sendEmail}
          ref={form}
        >
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              name="name"
              className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
              placeholder="person@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="mt-6 flex items-center justify-center rounded bg-rose-600 px-8 py-3 font-header 
            text-lg font-bold uppercase text-white border-rose-600
            gap-2 ease-in-out duration-200 focus:scale-95 hover:bg-zinc-900 hover:text-white border-2 hover:border-white"
          >
            Send
            <FaAngleDoubleRight />
          </button>
        </form>
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
      <div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              className=" flex justify-center items-center"
            >
              <BeatLoader color="#e11d48" />
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ContactComponent;
