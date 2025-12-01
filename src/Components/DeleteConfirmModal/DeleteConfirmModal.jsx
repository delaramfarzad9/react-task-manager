import React from "react";
import Button from "../TodoList/Button";

export default function DeleteConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm ">
      <div className="bg-gray-100 rounded-xl shadow-lg p-6 w-80">
     
        <p className="text-gray-600 mb-6">
         Are you sure you want to delete this task?
        </p>
        <div className="flex justify-end gap-4">
          <Button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-500 text-gray-100 hover:bg-red-600"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
