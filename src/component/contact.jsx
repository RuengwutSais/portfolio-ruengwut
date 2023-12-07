import { FaMobile } from "react-icons/fa";
import { MdEmail,MdPinDrop  } from "react-icons/md";



const ContactComponent = () => {
    return(
        <>
            <section id="contact" className="sm:p-20 p-8 bg-zinc-900 h-screen items-center flex flex-col justify-center">
                <h2 className="text-center font-header text-4xl font-bold uppercase text-rose-600 sm:text-5xl lg:text-6xl">Contact</h2>
                <div className="flex flex-col pt-16 lg:flex-row gap-4">
                    <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-zinc-800 px-6 py-6 sm:py-8 lg:w-1/3">
                        <div className="flex items-center text-white">
                            <FaMobile className="text-2xl"/>
                            <p className="pl-2 font-body font-bold uppercase lg:text-lg">Phone</p>
                        </div>
                        <p className="pt-2 text-left font-body font-bold text-rose-600 lg:text-lg">(+66) 098-848-2480</p>
                    </div>
                    <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-zinc-800 px-6 py-6 sm:py-8 lg:w-1/3">
                        <div className="flex items-center text-white">
                            <MdEmail className="text-2xl"/>
                            <p className="pl-2 font-body font-bold uppercase lg:text-lg">Email</p>
                        </div>
                        <p className="pt-2 text-left font-body font-bold text-rose-600 lg:text-lg">ruengwut.sais@gmail.com</p>
                    </div>
                    <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-zinc-800 px-6 py-6 sm:py-8 lg:w-1/3">
                        <div className="flex items-center text-white">
                            <MdPinDrop className="text-2xl"/>
                            <p className="pl-2 font-body font-bold uppercase lg:text-lg">Address</p>
                        </div>
                        <p className="pt-2 text-left font-body font-bold text-rose-600 lg:text-lg">62/202 Village Natural Pracha u tit-76 Thugkru Thugkru Bangkok 10140
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactComponent