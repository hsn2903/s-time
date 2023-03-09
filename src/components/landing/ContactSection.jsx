import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-gray-200 py-24">
      <div className="w-[95vw] md:w-[90vw] mx-auto">
        <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-8">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex items-center gap-4 mb-8 md:mb-0">
            <FaPhoneAlt className="text-3xl text-indigo-900" />
            <div>
              <p className="font-bold text-lg">Phone</p>
              <p className="text-gray-700">555-555-5555</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-3xl text-indigo-900" />
            <div>
              <p className="font-bold text-lg">Email</p>
              <p className="text-gray-700">support@s-time.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
