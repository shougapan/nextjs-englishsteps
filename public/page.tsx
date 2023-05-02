"use client";
import React from "react";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function page() {
  const form = useRef<any>();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("HELLO");

    emailjs
      .sendForm(
        "service_86nm9fd",
        "template_1vq3ov9",
        form.current,
        "HPIdbttIv3X7mrUq9"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
