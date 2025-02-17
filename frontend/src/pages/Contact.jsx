import React, { useState } from "react"; 
import { Button } from "../components/Button"; 
import Sms from "../assets/Sms.jpg";

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 text-sm mb-4">{content}</p>
        <Button text="Close" onClick={onClose} />
      </div>
    </div>
  );
};

export function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const showModal = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  return (
    <section className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ">

      {/* Left Section */}
      <div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-600 leading-tight mb-6">
          HOW CAN WE HELP YOU?
        </h2>
        <p className="text-slate-700 text-lg mb-4">
          Questions, collabs, inquiries? Use the contact form, and we will get in touch, or mail us at 
          <a href="mailto:info@creativeplusstudio.com" className="text-orange-500 font-medium"> info@creativeplusstudio.com</a>. 
          Need help? Go to our <a href="#" className="text-orange-500 font-medium">Contact Us</a> page.
        </p>
        <img src={Sms} alt="Contact" className="w-full rounded-lg mt-6 shadow-md" />
      </div>

      {/* Right Section (Form) */}
      <div className="p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-orange-500 mb-6">Send Request To Us</h3>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input 
              type="text" 
              placeholder="First Name" 
              className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" 
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" 
            />
            <input 
              type="text" 
              placeholder="Phone Number" 
              className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" 
            />
          </div>

          <input 
            type="url" 
            placeholder="https:// Company URL" 
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4" 
          />

          <input 
            type="text" 
            placeholder="Interested In" 
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4" 
          />

          <textarea 
            placeholder="Your Message" 
            rows="4" 
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
          ></textarea>

          <input 
            type="text" 
            placeholder="Budget" 
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4" 
          />

          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <p className="text-slate-700 text-sm">
              Accept to agree with our 
              <span className="text-orange-500 cursor-pointer" onClick={() => showModal("Privacy Policy", "We value your privacy and ensure data protection.")}> Privacy Policy</span> 
              and <span className="text-orange-500 cursor-pointer" onClick={() => showModal("Cookies Policy", "We use cookies to enhance your experience.")}> Cookies Policy</span>.
            </p>
          </div>

          <Button text="Submit" onClick={(e) => { e.preventDefault(); alert("Request Sent!"); }} />
        </form>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalContent.title} content={modalContent.content} />
    </section>
  );
}
