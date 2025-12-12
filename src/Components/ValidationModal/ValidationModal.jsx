import React from "react";
import Button from "../TodoList/Button";

export default function ValidationModal({ message, onClose }) {
  return (
    <div className="fixed z-100 inset-0 flex items-center justify-center  backdrop-blur-sm ">
      <div className="bg-gray-100 rounded-lg shadow-lg p-6 max-w-xs sm:max-w-sm md:w-80">
        <h2 className="md:text-lg text-base font-bold text-red-600 mb-4">Validation Error</h2>
        <p className="text-gray-700 text-sm md:text-base mb-6">{message}</p>
        <div className="flex justify-end">
          <Button
            onClick={onClose}
            className=" bg-blue-500 text-gray-100 hover:bg-blue-600"
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  );
}
