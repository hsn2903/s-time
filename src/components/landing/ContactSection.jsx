import { FaEnvelope, FaPhone, FaMapMarker } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="w-[95%] md:w-[90%] mx-auto bg-gray-100 border-t border-gray-300 py-24">
      <div className="container mx-auto py-12 px-4">
        <div className="flex items-center flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Us
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 leading-loose mb-4 text-lg">
              If you have any questions, feedback, or suggestions, please
              don&apos;t hesitate to get in touch with us.
            </p>
            <ul className="list-disc pl-4">
              <li className="flex items-center mb-2">
                <FaEnvelope className="text-gray-600 mr-2" />
                <a href="mailto:contact@habittracker.com">
                  contact@habittracker.com
                </a>
              </li>
              <li className="flex items-center mb-2">
                <FaPhone className="text-gray-600 mr-2" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center mb-2">
                <FaMapMarker className="text-gray-600 mr-2" />
                <span>123 Main Street, Anytown, USA</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Send Us a Message
            </h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border border-gray-400 py-2 px-4 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border border-gray-400 py-2 px-4 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="w-full border border-gray-400 py-2 px-4 rounded-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-lg hover:opacity-80 transition-colors duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
