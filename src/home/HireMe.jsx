// src/HireMe.jsx
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const HireMe = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t99a0hv",
        "template_yob4uss",
        formRef.current,
        "hpaT9vzW_4FtWup4J"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">HIRE ME</h2>

        {/* Form Container */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-8"
        >
          {/* Left Column: Name, Email, Phone */}
          <div className="md:w-1/2 flex flex-col space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Name
              </label>
              <input
                id="name"
                name="from_name"
                type="text"
                placeholder="Your Name"
                requigreen
                className="w-full border border-gray-300 p-3 rounded outline-none"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">
                Email
              </label>
              <input
                id="email"
                name="from_email"
                type="email"
                placeholder="Your Email"
                requigreen
                className="w-full border border-gray-300 p-3 rounded outline-none"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block mb-1 font-semibold">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="Your Phone"
                requigreen
                className="w-full border border-gray-300 p-3 rounded outline-none"
              />
            </div>

            {/* Send Message Button */}
            <button
              type="submit"
              className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600 transition-colors"
            >
              Send Message
            </button>
          </div>

          {/* Right Column: Message */}
          <div className="md:w-1/2">
            <label htmlFor="message" className="block mb-1 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="8"
              requigreen
              className="w-full border border-gray-300 p-3 rounded outline-none h-full"
            ></textarea>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HireMe;
