import React from "react";

export default function page() {
  return (
    <div className="bg-slate-300 m-auto p-6 rounded-lg shadow-lg w-96">
      <form className="flex flex-col">
        <fieldset className="flex flex-col mb-4">
          <legend className="text-xl font-bold mb-2">Personal Info:</legend>
          <label className="mb-2">
            Name:
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="mb-2">
            Age:　
            <input
              type="text"
              placeholder="Age"
              className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="mb-2">
            Email:
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </fieldset>

        <label className="mb-2 font-bold">English Level:</label>
        <select className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="nothing">Nothing</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="upperintermediate">Upper intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <label className="mb-2 font-bold">
          What English are you interested in:
        </label>
        <select className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="nothing">Eiken</option>
          <option value="beginner">Toeic</option>
          <option value="intermediate">Conversation</option>
        </select>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
