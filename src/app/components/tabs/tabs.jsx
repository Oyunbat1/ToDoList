"use client";
import { useState } from "react";

const Tabs = function ({ status, setStatus }) {
  return (
    <div className="flex items-center justify-center gap-4 py-[20px]">
      <button
        onClick={() => setStatus("All")}
        className={`px-[18px] py-[4px] rounded-md flex items-center justify-center text-black 
          ${status === "All" ? "bg-blue-500 text-[#fff]" : "bg-[#dedede]"}`}
      >
        All
      </button>
      <button
        onClick={() => setStatus("Active")}
        className={`px-[18px] py-[4px] rounded-md flex items-center justify-center text-black 
          ${status === "Active" ? "bg-blue-500 text-[#fff]" : "bg-[#dedede]"}`}
      >
        Active
      </button>
      <button
        onClick={() => setStatus("Completed")}
        className={`px-[18px] py-[4px] rounded-md flex items-center justify-center text-black 
          ${
            status === "Completed" ? "bg-blue-500 text-[#fff]" : "bg-[#dedede]"
          }`}
      >
        Completed
      </button>
    </div>
  );
};

export default Tabs;
