"use client";
import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function page() {
  const form = useRef<any>();
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_86nm9fd",
        "template_mm3ypld",
        form.current,
        "HPIdbttIv3X7mrUq9"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      {!sent && (
        <div className="bg-slate-300 m-auto p-6 rounded-lg shadow-lg w-96">
          <form className="flex flex-col" onSubmit={sendEmail} ref={form}>
            <fieldset className="flex flex-col mb-4">
              <legend className="text-xl font-bold mb-2">Personal Info:</legend>
              <label className="mb-2">
                Name:
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="user_name"
                />
              </label>
              <label className="mb-2">
                Age:　
                <input
                  type="text"
                  placeholder="Age"
                  className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="user_age"
                />
              </label>
              <label className="mb-2">
                Email:
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="user_email"
                />
              </label>
            </fieldset>

            <label className="mb-2 font-bold">English Level:</label>
            <select
              className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="user_level"
            >
              <option value="nothing">Nothing</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="upperintermediate">Upper intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <label className="mb-2 font-bold">
              What English are you interested in:
            </label>
            <select
              className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="user_preference"
            >
              <option value="nothing">Eiken</option>
              <option value="beginner">Toeic</option>
              <option value="intermediate">Conversation</option>
            </select>
            <label className="mb-2">
              Message:
              <input
                type="text"
                placeholder="optional"
                className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="message"
              />
            </label>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {sent && <p>Thank you for sending the email.</p>}
    </div>
  );
}
