import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <section className="w-96 m-auto bg-blue-50 border-4 border-yellow-400 my-4 text-center shadow-2xl border-l-yellow-300 border-t-yellow-300">
        <h1 className="text-6xl bg-yellow-300 text-gray-600 py-4">Group:</h1>
        <div className="my-4">
          <div className="my-4">
            <h1 className="text-3xl py-2 ">Children (7-11 years old)</h1>
            <p className="bg-white text-xl font-semibold py-2">¥4,000/month</p>
            <p className="bg-white py-2">
              Once a week (1 hour - max: 3 people)
            </p>
          </div>
        </div>
        <div className="my-4">
          <div className="w-86">
            <h1 className="text-3xl py-2 ">Teenage</h1>
            <p className="bg-white text-xl font-semibold py-2">¥4,000/month</p>
            <p className="bg-white py-2">
              Once a week (1 hour - max: 3 people)
            </p>
          </div>
        </div>
        <div className="my-4">
          <div className="w-86">
            <h1 className="text-3xl py-2 ">Adult Group Lessons</h1>
            <p className="bg-white text-xl font-semibold py-2">¥4,000/month</p>
            <p className="bg-white py-2">
              Once a week (1 hour - max: 3 people)
            </p>
          </div>
        </div>
      </section>

      <section className="w-96 m-auto bg-blue-50 border-4 border-yellow-400 my-4 text-center shadow-2xl border-l-yellow-300 border-t-yellow-300">
        <div className="my-4">
          <div className="my-4">
            <h1 className="text-3xl py-2 ">Private lessons:</h1>
            <p className="bg-white text-xl font-semibold py-2">12,000/month</p>
            <p className="bg-white py-2">Once a week (1 hour)</p>
          </div>
        </div>
      </section>
    </>
  );
}
