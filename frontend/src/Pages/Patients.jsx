import React from "react";

const Patients = () => {
  return (
    <div className="flex justify-center ml-5">
      <select className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <option>Ward 1 </option>
        <option>Ward 2 </option>
        <option>Ward 3 </option>
        <option>Ward 4 </option>
      </select>


      <div>
        <h1></h1>
      </div>
    </div>
  );
};

export default Patients;
